import type { Author } from 'contentlayer/generated'
import type { ReactNode } from 'react'
import { CareerTimeline } from '~/components/author/career'
import { SocialAccounts } from '~/components/author/social-accounts'
import { ProfileCard } from '~/components/cards/profile'
import { Button } from '~/components/ui/button'
import { Container } from '~/components/ui/container'
import { Image } from '~/components/ui/image'
import { PageHeader } from '~/components/ui/page-header'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'

interface Props {
  children?: ReactNode
  content: Omit<Author, '_id' | '_raw' | 'body'>
}

export function AuthorLayout({ children }: Props) {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="About"
        description="A bit of background on who I am, what I do, and why I started this blog. Nothing too serious, just a little intro to the person typing away behind the scenes."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-8 md:grid md:grid-cols-3">
        <div className="pr-4">
          <ProfileCard />
        </div>
        <div className="md:col-span-2 md:pl-12 xl:pl-16">
          <div className="prose prose-lg dark:prose-invert">
            <div>
              <h2 className="mt-0">
                Hi there <Twemoji emoji="waving-hand" />
              </h2>
              <p>
                I'm <strong>Victor Igbokwe</strong> (alias <strong>𝕾𝖍𝖊𝖗𝖑𝖔𝖈𝖐</strong> at work), a
                software engineer from <strong>Nigeria</strong>. I have a passion for all things{' '}
                <strong>Javascript</strong>. I enjoy building eCommerce software and stuff related
                to web dev. I work mainly with <strong>Typescript</strong>, <strong>React</strong>,{' '}
                <strong>NodeJS</strong>, <strong>Remix</strong>, and <strong>TailwindCSS</strong>.
              </p>
              <p>
                This blog serves as a journal for documenting and sharing the insights and knowledge
                I've gained as a software engineer. Building, writing, and sharing things is a great
                way for me to solidify my understanding of new concepts and ideas.
              </p>
              <p>
                I would greatly appreciate any comments and thoughts on my posts{' '}
                <Twemoji emoji="clinking-beer-mugs" />.
              </p>
            </div>
            <div>
              <div className="mb-[1em] mt-[2em] flex items-center justify-between [&>h2]:my-0">
                <h2>My career</h2>
              </div>
              <CareerTimeline />
            </div>

            <div>
              <h2>Contact</h2>
              <p>
                Reach out to me at{' '}
                <a href={`mailto:${SITE_METADATA.email}`}>{SITE_METADATA.email}</a> or find me on
                social media:
              </p>
              <SocialAccounts />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
