export const business = {
  name: 'Shelz Media',
  email: 'info@shelzmedia.nz',
  phone: '+64 210 841 8396',
  phoneHref: '+642108418396',
  whatsappNumber: '642108418396',
  origin: 'https://shelz-media.shankarappan.chatgpt.site',
  primaryCity: '',
  serviceAreas: [] as string[],
  address: '',
  hours: '',
  // Use only a confirmed, public HTTPS form endpoint. Never put secrets here.
  quoteEndpoint: '',
  social: {
    Instagram: '',
    Facebook: '',
    YouTube: '',
    TikTok: '',
    LinkedIn: '',
  } as Record<string, string>,
  streaming: {
    platforms: [] as string[],
    streamUrl: '',
    embedUrl: '',
    replayUrl: '',
  },
  analytics: { enabled: false },
};
export function whatsappUrl(service?: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(service ? `Hello Shelz Media, I am interested in ${service}. Please send me more information.` : 'Hello Shelz Media, I would like to enquire about your event services.')}`;
}
export const categories = [
  'All',
  'Weddings',
  'Corporate Events',
  'Concerts',
  'Cultural Events',
  'Private Celebrations',
  'Stage and Production',
  'Live Streaming',
];
export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  demo: boolean;
  video?: string;
};
// Add approved client work here. Keep demo:true for illustrative imagery.
export const projects: Project[] = [
  {
    id: 'live',
    title: 'Feel every moment.',
    category: 'Concerts',
    image: '/images/concert.jpg',
    alt: 'Amber beams illuminating a concert stage and audience',
    description:
      'Concert photography, performance films and event production, brought together around the energy of the room. This is licensed illustrative photography, not a Shelz Media project.',
    demo: true,
  },
  {
    id: 'wedding',
    title: 'Your story, beautifully told.',
    category: 'Weddings',
    image: '/images/wedding.jpg',
    alt: 'A couple dancing at an outdoor wedding reception under string lights',
    description:
      'Photography and film for the quiet glances, the big celebrations and everything in between. This is licensed illustrative photography, not a Shelz Media project.',
    demo: true,
  },
  {
    id: 'stage',
    title: 'Set the stage for something special.',
    category: 'Stage and Production',
    image: '/images/production.jpg',
    alt: 'Concert stage with LED screens, lighting rigging and a live audience',
    description:
      'Lighting, LED walls, staging and coordination shaped around your event. This is licensed illustrative photography, not a Shelz Media project.',
    demo: true,
  },
];
export const services = [
  {
    number: '01',
    title: 'Capture & create',
    subtitle: 'PHOTOGRAPHY & FILM',
    image: '/images/wedding.jpg',
    alt: 'Wedding celebration under string lights',
    description:
      'The atmosphere, the emotion, the moments you never want to lose.',
    items: [
      [
        'Event photography',
        'A considered visual record of your celebration, conference or community gathering.',
      ],
      [
        'Event videography',
        'Bring the movement, voices and atmosphere of your event back to life.',
      ],
      [
        'Wedding photography & film',
        'Tell the story of your day, from intimate details to the full celebration.',
      ],
      [
        'Concert & performance coverage',
        'Capture the connection between performers and their audience.',
      ],
      [
        'Corporate event coverage',
        'Create purposeful photography and video for conferences and brand events.',
      ],
      [
        'Family & celebration photography',
        'Keep the people and personal moments at the centre of your celebration.',
      ],
      [
        'Social content & highlight reels',
        'Give your event a life beyond the room with shareable, edited moments.',
      ],
    ],
  },
  {
    number: '02',
    title: 'Set the scene',
    subtitle: 'EVENT & TECHNICAL PRODUCTION',
    image: '/images/production.jpg',
    alt: 'LED screens and lighting on an event stage',
    description: 'Make the room feel as extraordinary as the occasion.',
    items: [
      [
        'Stage decorations & event styling',
        'Shape the setting for weddings, cultural celebrations and private functions.',
      ],
      [
        'LED walls, video walls & stage screens',
        'Give presentations, performances and event visuals a bigger canvas.',
      ],
      [
        'Event & concert lighting',
        'Create atmosphere and direct attention for celebrations and live performances.',
      ],
      [
        'Technical & stage production',
        'Bring the visual and stage elements together with a coordinated plan.',
      ],
    ],
  },
  {
    number: '03',
    title: 'Bring it together',
    subtitle: 'EVENT OPERATIONS & STREAMING',
    image: '/images/concert.jpg',
    alt: 'Crowd enjoying a coordinated live concert production',
    description:
      'The detail behind the scenes. The confidence to enjoy the day.',
    items: [
      [
        'Event management & coordination',
        'Connect the schedule, people and moving parts of your event.',
      ],
      [
        'Supplier & venue coordination',
        'Align the production plan with the people making your event happen.',
      ],
      [
        'Production scheduling',
        'Plan cues and key moments so your team knows what happens next.',
      ],
      [
        'Event security',
        'Discuss event security requirements as part of your operations plan.',
      ],
      [
        'Live streaming',
        'Bring a remote audience into your celebration, conference or performance.',
      ],
    ],
  },
];
