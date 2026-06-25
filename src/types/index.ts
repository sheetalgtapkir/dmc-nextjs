export type University = {
  id: string
  name: string
  slug: string
  description: string
  logo_url: string
  ranking: number
  fee_range: string
  duration_months: number
  accreditation: string
  programmes: string[]
  created_at: string
}

export type Course = {
  id: string
  university_id: string
  course_name: string
  duration_months: number
  fees: number
  eligibility: string
  specializations: string[]
  created_at: string
}

export type Specialization = {
  id: string
  name: string
  slug: string
  description: string
  career_paths: CareerPath[]
  top_recruiters: string[]
  salary_range: string
  created_at: string
}

export type CareerPath = {
  title: string
  description: string
  salary_min: number
  salary_max: number
  companies: string[]
}

export type Lead = {
  id: string
  name: string
  email: string
  phone: string
  city: string
  course: string
  source: string
  created_at: string
}

export type Enquiry = {
  id: string
  name: string
  email: string
  phone: string
  message: string
  created_at: string
}

export type BlogPost = {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: any
  featuredImage: {
    asset: {
      url: string
    }
    alt: string
  }
  category: {
    name: string
    slug: string
  }
  author: {
    name: string
    avatar: {
      asset: {
        url: string
      }
    }
  }
  metaTitle: string
  metaDescription: string
  publishedDate: string
  tags: string[]
  isPublished: boolean
}

export type BlogCategory = {
  _id: string
  name: string
  slug: string
  description: string
}

export type BlogAuthor = {
  _id: string
  name: string
  bio: string
  avatar: {
    asset: {
      url: string
    }
  }
  title: string
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter?: string
    github?: string
    linkedin?: string
  }
  phone: string
  email: string
}

export type FormState = {
  success?: boolean
  error?: string
  message?: string
}
