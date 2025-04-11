import Script from 'next/script'

interface UmamiAnalyticsProps {
  websiteId?: string
  src?: string
}

export function UmamiAnalytics({
  websiteId,
  src = 'https://cloud.umami.is/script.js',
}: UmamiAnalyticsProps) {
  if (!websiteId) {
    // Log to Vercel build logs or local console for debugging
    console.warn('UmamiAnalytics: websiteId is missing');
    return null;
  }
  return (
    <Script
      id="umami-analytics"
      strategy="lazyOnload"
      data-website-id={websiteId}
      src={src}
    />
  );
}