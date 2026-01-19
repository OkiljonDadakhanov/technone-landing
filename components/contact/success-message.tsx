"use client";

import { useTranslations } from "next-intl";

export function SuccessMessage() {
  const t = useTranslations("Contact");

  return (
    <div
      className="text-center py-12 bg-emerald-50 rounded-2xl"
      role="status"
      aria-live="polite"
    >
      <p className="text-emerald-600 font-medium text-lg">
        {t("success")}
      </p>
    </div>
  );
}
