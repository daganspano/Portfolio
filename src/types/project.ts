export interface Project {
  _id: string
  name: string
  description: string
  category: string
  tags: string[]
  featured: boolean
  status: string
  start_date: Date
  end_date: Date
  url: string | null
  repo_url: string | null
  company: Company | null
  images: Image[]
  thumbnail_url: string
  thumbnail_alt_text: string
  createdAt: Date
  updatedAt: Date
}

interface Company {
  name: string
  url: string
  logo_url: string
  role: CompanyRole
}

interface CompanyRole {
  title: string
  employment_type: string
  team: string
}

interface Image {
  url: string
  alt_text: string
  caption: string
}
