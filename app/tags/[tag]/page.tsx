import { genPageMetadata } from 'app/seo'
import { allBlogs } from 'contentlayer/generated'
import { slug } from 'github-slugger'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SITE_METADATA } from '~/data/site-metadata'
import tagData from '~/json/tag-data.json'
import { ListLayoutWithTags } from '~/layouts/list-layout-with-tags'
import { allCoreContent } from '~/utils/contentlayer'
import { sortPosts } from '~/utils/misc'

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  let params = await props.params
  let tag = decodeURI(params.tag)
  return genPageMetadata({
    title: tag,
    description: `${SITE_METADATA.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${SITE_METADATA.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

export let generateStaticParams = async () => {
  let tagCounts = tagData as Record<string, number>
  let tagKeys = Object.keys(tagCounts)
  let paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }))
  return paths
}

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
  let params = await props.params
  let tag = decodeURI(params.tag)
  // Capitalize first letter and convert space to dash
  let title = '#' + tag[0] + tag.split(' ').join('-').slice(1)
  let filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )

  if (filteredPosts.length === 0) {
    return notFound()
  }
  return (
    <ListLayoutWithTags
      title={title}
      description={
        <>
          Things I've written about <span className="ml-1 font-semibold">#{tag}</span>
        </>
      }
      posts={filteredPosts}
    />
  )
}
