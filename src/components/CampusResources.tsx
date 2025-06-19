import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ResourceCard } from "./ResourceCard";
import { resourcesData } from "../data/resources";
import type { ResourceCategoryType } from "../types";

export const CampusResources: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<ResourceCategoryType>("relationships");

  return (
    <div className="space-y-12">
      {/* Enhanced Hero Section */}
      <div className="relative text-center space-y-6 py-12">
        {/* Background gradient */}
        <div className="absolute inset-0 hero-gradient opacity-5 rounded-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Discover Campus{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-float">
              Resources
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Find the support, opportunities, and communities you need to thrive
            during your
            <br className="hidden md:block" />
            college journey. Explore resources organized by what matters most to
            you.
          </p>
        </div>
      </div>

      {/* Enhanced Resource Categories */}
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as ResourceCategoryType)}>
        {/* Enhanced Tab Navigation */}
        <div className="relative">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto gap-3 bg-muted/30 backdrop-blur-sm p-3 rounded-2xl border">
            {resourcesData.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center gap-3 h-auto py-4 px-3 text-xs font-medium rounded-xl transition-all duration-300 data-[state=active]:bg-background data-[state=active]:shadow-lg data-[state=active]:scale-105">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                    <IconComponent />
                  </div>
                  <span className="text-center leading-tight font-medium">
                    {category.name}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {/* Enhanced Tab Content */}
        {resourcesData.map((category) => {
          const IconComponent = category.icon;
          return (
            <TabsContent
              key={category.id}
              value={category.id}
              className="space-y-8 mt-8">
              {/* Enhanced Category Header */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg animate-float`}>
                    <IconComponent />
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold text-foreground">
                      {category.name}
                    </h3>
                    <p className="text-lg text-muted-foreground font-light">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Resources Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.resources.map((resource, index) => (
                  <div
                    key={resource.id}
                    className="animate-in slide-in-from-bottom-4 duration-700"
                    style={{ animationDelay: `${index * 100}ms` }}>
                    <ResourceCard resource={resource} />
                  </div>
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};
