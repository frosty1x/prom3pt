import React from "react";
import { cn } from "../lib/utils";

interface AdBannerProps {
  id: string;
  className?: string;
}

export default function AdBanner({ id, className }: AdBannerProps) {
  return (
    <div 
      id={id} 
      className={cn(
        "bg-white/5 border border-dashed border-white/10 rounded-lg flex items-center justify-center text-xs text-gray-500 uppercase tracking-widest min-h-[100px]",
        className
      )}
    >
      Advertisement Placeholder ({id})
    </div>
  );
}
