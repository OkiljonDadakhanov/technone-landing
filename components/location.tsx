"use client";

import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function MapSection() {
  return (
    <div className="mt-16">
      <Card>
        <CardContent className="p-0">
          <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              title="Map"
              className="w-full h-full border-0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=69.353704%2C41.322945%2C69.361704%2C41.330945&layer=mapnik&marker=41.326945%2C69.357704"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="py-4 text-center">
            <MapPin className="h-6 w-6 text-gray-400 mx-auto mb-1" />
            <p className="text-gray-600">
              123 Tech Street, San Francisco, CA 94105
            </p>
        
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
