'use client';

import Link from 'next/link';
import { useEffect, useState, type SyntheticEvent } from 'react';
import { ArrowUpRight, Download, Mail, MessageCircle } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { business, whatsappUrl } from '@/lib/site-config';
const serviceOptions = [
  'Photography',
  'Videography',
  'LED Wall',
  'Stage Decorations',
  'Event Lighting',
  'Concert Lighting',
  'Event Management',
  'Event Security',
  'Live Streaming',
  'Full Event Production',
  'Other',
];
function Choice({
  name,
  label,
  options,
  value,
  onChange,
}: {
  name: string;
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="field">
      <label id={`${name}-label`}>{label}</label>
      <Select
        name={name}
        value={value}
        onValueChange={(v) => onChange(v || '')}
      >
        <SelectTrigger
          aria-labelledby={`${name}-label`}
          className="form-select"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="select-popup">
          {options.map((o) => (
            <SelectItem key={o} value={o}>
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
export function QuoteForm() {
  const [chosen, setChosen] = useState<string[]>([]);
  const [eventType, setEventType] = useState('Wedding');
  const [contact, setContact] = useState('Email');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');
  const [summary, setSummary] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'prepared' | 'sent'
  >('idle');
  useEffect(() => {
    type ModelContext = {
      registerTool: (
        tool: {
          name: string;
          description: string;
          inputSchema: object;
          execute: (input: unknown) => unknown;
        },
        options: { signal: AbortSignal },
      ) => void | Promise<void>;
    };
    const ctx = (document as Document & { modelContext?: ModelContext })
      .modelContext;
    if (!ctx) return;
    const ac = new AbortController();
    try {
      void Promise.resolve(
        ctx.registerTool(
          {
            name: 'stage_quote_services',
            description:
              'Select services in the visible quote form. Does not submit or send an enquiry.',
            inputSchema: {
              type: 'object',
              properties: {
                services: {
                  type: 'array',
                  items: { type: 'string', enum: serviceOptions },
                },
              },
              required: ['services'],
              additionalProperties: false,
            },
            execute(input) {
              const value = input as { services?: unknown };
              if (
                !Array.isArray(value?.services) ||
                !value.services.length ||
                !value.services.every(
                  (s) => typeof s === 'string' && serviceOptions.includes(s),
                )
              )
                throw new Error('Choose one or more supported services.');
              setChosen([...new Set(value.services as string[])]);
              document.getElementById('contact')?.scrollIntoView();
              return { stagedServices: value.services, submitted: false };
            },
          },
          { signal: ac.signal },
        ),
      ).catch(() => {});
    } catch {
      /* Optional browser capability. */
    }
    return () => ac.abort();
  }, []);
  async function submit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    if (!chosen.length) {
      setError('Please choose at least one service.');
      return;
    }
    if (!consent) {
      setError('Please confirm that we may contact you about your enquiry.');
      return;
    }
    const data = new FormData(e.currentTarget);
    if (data.get('website')) return;
    const text = [
      `Hello Shelz Media, I would like to request an event quote.`,
      ...Array.from(data.entries())
        .filter(([k]) => !['website', 'eventType', 'contactMethod'].includes(k))
        .map(([k, v]) => `${k}: ${typeof v === 'string' ? v : v.name}`),
      `Event type: ${eventType}`,
      `Services: ${chosen.join(', ')}`,
      `Preferred contact: ${contact}`,
    ].join('\n');
    setSummary(text);
    if (!business.quoteEndpoint) {
      setStatus('prepared');
      return;
    }
    setStatus('sending');
    try {
      const response = await fetch(business.quoteEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...Object.fromEntries(data),
          eventType,
          services: chosen,
          contactMethod: contact,
          consent,
        }),
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('sent');
    } catch {
      setError(
        'Your enquiry could not be sent. Please try again, email us or use WhatsApp.',
      );
      setStatus('idle');
    }
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([summary], { type: 'text/plain' }),
    );
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Shelz-Media-event-enquiry.txt';
    link.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div className="quote-form">
      {(status === 'prepared' || status === 'sent') && (
        <output className="quote-result">
          <Mail size={32} />
          <h3>
            {status === 'sent'
              ? 'Thank you. Your enquiry is with us.'
              : 'Your enquiry is ready to send.'}
          </h3>
          <p>
            {status === 'sent'
              ? 'We’ll be in touch using your preferred contact details.'
              : 'Nothing has been sent yet. Open your email app to send the details below, or download your enquiry and email it to us.'}
          </p>
          <pre>{summary}</pre>
          <div className="actions">
            {status === 'prepared' && (
              <Link
                className="button gold"
                href={`mailto:${business.email}?subject=${encodeURIComponent('Event quote enquiry')}&body=${encodeURIComponent(summary)}`}
              >
                Open email to send <ArrowUpRight size={17} />
              </Link>
            )}
            <button className="button outline" onClick={download}>
              Download enquiry <Download size={16} />
            </button>
          </div>
          <Link
            className="text-link"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp <MessageCircle size={17} />
          </Link>
          <button className="text-link" onClick={() => setStatus('idle')}>
            Edit enquiry
          </button>
        </output>
      )}
      <form
        onSubmit={submit}
        hidden={status === 'prepared' || status === 'sent'}
      >
        <div className="form-grid">
          <div className="field">
            <label htmlFor="full-name">Full name *</label>
            <input
              id="full-name"
              name="Full name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Your name"
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="Email"
              type="email"
              autoComplete="email"
              required
              maxLength={200}
              placeholder="you@example.com"
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone number *</label>
            <input
              id="phone"
              name="Phone"
              type="tel"
              autoComplete="tel"
              required
              maxLength={40}
              placeholder="Your contact number"
            />
          </div>
          <Choice
            name="eventType"
            label="Event type"
            value={eventType}
            onChange={setEventType}
            options={[
              'Wedding',
              'Engagement',
              'Birthday / private celebration',
              'Corporate event',
              'Conference',
              'Concert / festival',
              'Cultural / religious celebration',
              'Community event',
              'Product launch',
              'School / university event',
              'Other',
            ]}
          />
          <div className="field">
            <label htmlFor="date">Event date</label>
            <input id="date" name="Event date" type="date" />
          </div>
          <div className="field">
            <label htmlFor="location">Event location *</label>
            <input
              id="location"
              name="Location"
              required
              maxLength={200}
              placeholder="City or venue"
            />
          </div>
          <div className="field">
            <label htmlFor="guests">Estimated guests</label>
            <input
              id="guests"
              name="Estimated guests"
              type="number"
              min="1"
              max="1000000"
              placeholder="Approximate number"
            />
          </div>
          <div className="field">
            <label htmlFor="budget">Budget range (optional)</label>
            <input
              id="budget"
              name="Budget"
              maxLength={80}
              placeholder="Your budget and currency"
            />
          </div>
        </div>
        <fieldset>
          <legend>What can we help with? *</legend>
          <div className="service-choices">
            {serviceOptions.map((s) => (
              <label className="check-label" key={s}>
                <Checkbox
                  checked={chosen.includes(s)}
                  onCheckedChange={(v) =>
                    setChosen(
                      v ? [...chosen, s] : chosen.filter((x) => x !== s),
                    )
                  }
                  aria-label={s}
                />
                <span>{s}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="field">
          <label htmlFor="message">Tell us about your event *</label>
          <textarea
            id="message"
            name="Message"
            rows={4}
            required
            maxLength={3000}
            placeholder="The occasion, your vision, and anything we should know…"
          />
        </div>
        <Choice
          name="contactMethod"
          label="Preferred contact method"
          value={contact}
          onChange={setContact}
          options={['Email', 'Phone', 'WhatsApp']}
        />
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <label className="check-label consent">
          <Checkbox
            checked={consent}
            onCheckedChange={setConsent}
            aria-label="I agree to be contacted about my enquiry"
          />
          <span>
            I agree to Shelz Media contacting me about this enquiry.{' '}
            <Link href="#privacy">Privacy details</Link>
          </span>
        </label>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <button
          className="button gold submit"
          type="submit"
          disabled={status === 'sending'}
        >
          {status === 'sending'
            ? 'Sending…'
            : business.quoteEndpoint
              ? 'Send quote request'
              : 'Prepare quote request'}
          <ArrowUpRight size={18} />
        </button>
        <p className="form-note">
          {business.quoteEndpoint
            ? 'Your details are used to respond to your enquiry.'
            : 'We’ll prepare your details for you to send by email. Nothing is sent automatically.'}
        </p>
      </form>
    </div>
  );
}
