import React from "react";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import type { Resource } from "../types";
import { formatUrl } from "../lib/utils";

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const handleResourceClick = () => {
    window.open(formatUrl(resource.url), "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      className="group h-full card-hover-effect cursor-pointer relative overflow-hidden border-2 hover:border-primary/20"
      onClick={handleResourceClick}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Sparkle effect for external links */}
      {resource.isExternal && (
        <div className="absolute top-3 right-3">
          <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
        </div>
      )}

      <CardHeader className="pb-4 relative z-10">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
            {resource.name}
          </CardTitle>
          {resource.isExternal && (
            <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 ml-3 group-hover:text-primary transition-colors" />
          )}
        </div>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2 group-hover:text-foreground/80 transition-colors">
          {resource.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {resource.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 font-medium"
            onClick={(e) => {
              e.stopPropagation();
              handleResourceClick();
            }}>
            Take a look <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
