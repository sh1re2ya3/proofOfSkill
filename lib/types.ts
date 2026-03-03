export type Category = 'frontend' | 'design' | 'creative'

export interface Project {
  id: string
  slug: string
  title: string
  category: Category
  problem: string
  thumbnail: string
  tags: string[]
  links: {
    github?: string
    live?: string
  }
}
