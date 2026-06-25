import { client } from './sanity'
import { BlogPost, BlogCategory } from '@/types'

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost" && isPublished == true] | order(publishedDate desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    category->,
    author->,
    metaTitle,
    metaDescription,
    publishedDate,
    tags,
    isPublished
  }`
  return await client.fetch(query)
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug && isPublished == true][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    category->,
    author->,
    metaTitle,
    metaDescription,
    publishedDate,
    tags,
    isPublished
  }`
  return await client.fetch(query, { slug })
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost" && category->slug.current == $category && isPublished == true] | order(publishedDate desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    category->,
    author->,
    metaTitle,
    metaDescription,
    publishedDate,
    tags,
    isPublished
  }`
  return await client.fetch(query, { category })
}

export async function getAllBlogCategories(): Promise<BlogCategory[]> {
  const query = `*[_type == "blogCategory"] | order(name asc) {
    _id,
    name,
    slug,
    description
  }`
  return await client.fetch(query)
}

export async function getRelatedBlogPosts(
  currentSlug: string,
  limit: number = 3
): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost" && slug.current != $slug && isPublished == true] | order(publishedDate desc)[0..${limit - 1}] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedDate
  }`
  return await client.fetch(query, { slug: currentSlug })
}
