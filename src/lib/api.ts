import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const escapedString = 'BigOChungus'

export function getPostSlugs(dir: string) {
  const postsDirectory = join(process.cwd(), dir)
  return fs.readdirSync(postsDirectory).filter((i) => (i.includes(".md")))
}

export function getPostBySlug(slug: string, fields: string[] = [], dir: string) {
  const postsDirectory = join(process.cwd(), dir)
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(
    fileContents
      .replace(/:/g, escapedString)
      .replace(`title${escapedString}`, 'title:')
      .replace(`author${escapedString}`, 'author:')
      .replace(`thumbnail${escapedString}`, 'thumbnail:')
      .replace(`video${escapedString}`, 'video:')
  )

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug.replace(new RegExp(escapedString, 'g'), ':')
    }

    if (field === 'content') {
      items[field] = content.replace(new RegExp(escapedString, 'g'), ':')
    }

    if (data[field]) {
      items[field] = data[field].replace(new RegExp(escapedString, 'g'), ':')
    }
  })

  return items
}

export function getAllPosts(fields: string[] = [], dir: string) {
  const slugs = getPostSlugs(dir)
  const posts = slugs.map(slug => getPostBySlug(slug, fields, dir))
  return posts
}
