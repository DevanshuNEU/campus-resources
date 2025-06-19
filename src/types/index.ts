/**
 * Represents a campus resource with essential information
 */
export interface Resource {
  id: string
  name: string
  description: string
  url: string
  category: ResourceCategoryType
  tags?: string[]
  isExternal?: boolean
}

/**
 * Resource category configuration
 */
export interface ResourceCategory {
  id: ResourceCategoryType
  name: string
  description: string
  icon: string
  color: string
  resources: Resource[]
}

/**
 * Available resource categories
 */
export type ResourceCategoryType = 
  | 'relationships'
  | 'career'
  | 'financial-aid'
  | 'health'
  | 'identity'
  | 'academic-success'

/**
 * Tab navigation item
 */
export interface TabItem {
  id: string
  label: string
  count: number
  isActive: boolean
}
