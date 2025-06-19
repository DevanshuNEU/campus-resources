import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { ResourceCard } from './ResourceCard'
import { resourcesData } from '../data/resources'
import { ResourceCategoryType } from '../types'

export const CampusResources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ResourceCategoryType>('relationships')

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-foreground">
          Discover Campus Resources
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Find the support, opportunities, and communities you need to thrive during your college journey. 
          Explore resources organized by what matters most to you.
        </p>
      </div>

      {/* Resource Categories */}
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ResourceCategoryType)}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto gap-2 bg-muted/50 p-2">
          {resourcesData.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex flex-col items-center gap-2 h-auto py-3 px-2 text-xs font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <span className="text-lg">{category.icon}</span>
              <span className="text-center leading-tight">{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {resourcesData.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            {/* Category Header */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
