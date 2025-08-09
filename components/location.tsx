"use client";

import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function MapSection() {
  const t = useTranslations("Location");
  return (
    <div className="mt-16">
      <Card>
        <CardContent className="p-0">
          <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              title={t("mapTitle")}
              className="w-full h-full border-0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=69.353704%2C41.322945%2C69.361704%2C41.330945&layer=mapnik&marker=41.326945%2C69.357704"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="py-4 text-center">

            <p className="text-gray-600"><MapPin className="h-6 w-6 text-gray-400 mx-auto mb-1" />
              Bakhodir 6, Qorasuv 2, Mirzo Ulug'bek, Tashkent
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
