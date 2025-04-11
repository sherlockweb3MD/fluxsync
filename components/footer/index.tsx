import { Container } from '~/components/ui/container'
import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'
import { Brand } from '~/components/ui/brand'
import MadeInVietNam from '~/icons/nig.svg'

export function Footer() {
  return (
    <Container as="footer" className="mt-8 border-t border-gray-200 py-8 dark:border-gray-700">
      <div className="space-y-4">
        {/* Logo and Title */}
        <div>
          <Link href={SITE_METADATA.siteRepo} className="font-medium">
            {SITE_METADATA.headerTitle}
          </Link>
          <span className="ml-2 text-gray-500">{SITE_METADATA.description}</span>
        </div>

        {/* Built With */}

        {/* Meta Info */}
        <div className="flex items-center">
          <span>Nigeria</span>
          <span className="ml-2">
            <MadeInVietNam width={20} height={20} className="inline-block" />
          </span>
          <span className="ml-2">|</span>
          <Link href={SITE_METADATA.siteRepo} className="ml-2">
            GitHub
          </Link>
        </div>

        {/* Bottom Link */}
      </div>
    </Container>
  )
}
