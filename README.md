# Distance MBA College - Next.js Project Structure

## Quick Start

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase and Sanity credentials

# Run development server
npm run dev

# Open http://localhost:3000
```

## Configuration

### Environment Variables

Create `.env.local` from `.env.local.example` and fill in:

- Supabase project URL and keys
- Sanity project ID and token
- Site URL for production

### Supabase Setup

Create these tables in Supabase PostgreSQL:

```sql
-- Leads table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT,
  course TEXT,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enquiries table
CREATE TABLE enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Universities table
CREATE TABLE universities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  logo_url TEXT,
  ranking INT,
  fee_range TEXT,
  duration_months INT,
  accreditation TEXT,
  programmes TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

-- Courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  university_id UUID NOT NULL REFERENCES universities(id),
  course_name TEXT NOT NULL,
  duration_months INT,
  fees INT,
  eligibility TEXT,
  specializations TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

-- Specializations table
CREATE TABLE specializations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  career_paths JSONB,
  top_recruiters TEXT[],
  salary_range TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Sanity Setup

1. Create a Sanity project at https://www.sanity.io/
2. Add the schema types (already in `src/sanity/schemaTypes/`)
3. Add your project ID to `.env.local`

## Architecture Highlights

- **App Router** - Latest Next.js 15 with server components
- **TypeScript** - Strict typing throughout
- **Tailwind CSS** - Brand-aligned design system
- **Supabase** - PostgreSQL backend for leads and application data
- **Sanity CMS** - Blog management (blogs only)
- **Server Actions** - Form submissions without API client
- **Vercel Ready** - Zero deployment configuration needed

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── layout/      # Header, Footer, MainLayout
│   ├── sections/    # Reusable sections
│   └── features/    # Smaller features
├── lib/             # Utilities and SDK clients
├── services/        # Business logic and database operations
├── hooks/           # React hooks
├── types/           # TypeScript type definitions
├── actions/         # Server actions
├── sanity/          # Sanity CMS configuration
└── styles/          # Global CSS
```

## Common Tasks

### Add a New Page

1. Create file in `src/app/[route]/page.tsx`
2. Import components and layout
3. Add metadata for SEO
4. Build with Tailwind classes

### Fetch Data from Supabase

```typescript
import { getUniversities } from '@/services/database'

export default async function Page() {
  const universities = await getUniversities()
  return <div>{/* render universities */}</div>
}
```

### Create a Blog Post

1. Go to your Sanity studio
2. Create a new Blog Post document
3. Fill in title, content, metadata
4. Query via `src/lib/blog-queries.ts`

### Deploy to Vercel

```bash
# Push to GitHub first
git push

# Vercel will auto-deploy on push
# Visit https://vercel.com/dashboard
```

## Design System

All colors, typography, and spacing are configured in `tailwind.config.ts` using brand tokens:

```tailwind
// Colors
text-navy, bg-saffron, border-cream, etc.

// Typography
font-display, font-body, font-voice, font-mono

// Spacing
px-4, py-6, gap-8, etc. (responsive scaling built-in)

// Custom classes
.container, .section, .section-sm, etc.
```

## Next Phase

After initial setup:

1. Create layout components (Header, Footer)
2. Build page-specific components
3. Populate Supabase with university data
4. Setup Sanity blog structure
5. Implement forms and lead capture
6. Deploy to Vercel

## Support

For issues or questions:

- Check TypeScript types in `src/types/`
- Review service functions in `src/services/`
- Inspect Tailwind config in `tailwind.config.ts`
