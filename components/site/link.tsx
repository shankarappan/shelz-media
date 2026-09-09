import NextLink from 'next/link';
import type { ComponentProps } from 'react';
import { basePath } from '@/lib/site-path';
// Pages is a static host: use document navigation instead of server RSC requests.
export default function SiteLink(props: ComponentProps<typeof NextLink>) {
  if (
    process.env.NEXT_PUBLIC_STATIC_HOST === 'true' &&
    typeof props.href === 'string'
  ) {
    const {
      href,
      prefetch: _prefetch,
      replace: _replace,
      scroll: _scroll,
      ...rest
    } = props;
    const target =
      href.startsWith('/') && !href.startsWith('//')
        ? `${basePath}${href}`
        : href;
    return (
      <a {...rest} href={target}>
        {props.children}
      </a>
    );
  }
  return <NextLink {...props} />;
}
