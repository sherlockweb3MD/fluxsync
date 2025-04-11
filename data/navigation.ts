import { SITE_METADATA } from './site-metadata'

export const HEADER_NAV_LINKS = [
  { href: '/blog', title: 'Blog', emoji: 'writing-hand' },
  { href: '/about', title: 'About', emoji: 'billed-cap' },
  { href: '/tags', title: 'Tags', emoji: 'label' },
]

export const FOOTER_NAV_LINKS = [
  { href: '/blog', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
]

export const FOOTER_PERSONAL_STUFF = [
  { href: '/about', title: 'About' },
  { href: SITE_METADATA.analytics.umamiAnalytics.shareUrl, title: 'Analytics' },
]
