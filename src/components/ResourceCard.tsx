import React from 'react'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Resource } from '../types'
import { formatUrl } from '../lib/utils'

interface ResourceCardProps {
  resource: Resource
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const handleResourceClick = () => {
    window.open(formatUrl(resource.url), '_blank', 'noopener,noreferrer')
  }

  return (
    <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer" 
          onClick={handleResourceClick}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
            {resource.name}
          </CardTitle>
          {resource.isExternal && (
            <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 ml-2" />
          )}
        </div>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          {resource.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {resource.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              handleResourceClick()
            }}
          >
            Visit <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
