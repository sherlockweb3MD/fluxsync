import Script from 'next/script'

interface UmamiAnalyticsProps {
  websiteId?: string
  src?: string
}

export function UmamiAnalytics({
  websiteId,
  src = 'https://cloud.umami.is/script.js',
}: UmamiAnalyticsProps) {
  if (websiteId) {
    return <Script
  id="umami-analytics"
  strategy="lazyOnload"
  data-website-id={websiteId}
  src={src}
  onLoad={() => console.log('Umami script loaded')}
  onError={(e) => console.error('Umami script failed to load:', e)}
/>
  }
  return null
}
