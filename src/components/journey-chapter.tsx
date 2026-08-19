"use client";

import { Check, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { JourneyChapter as JourneyChapterType } from "@/lib/types";

interface JourneyChapterProps {
  chapter: JourneyChapterType;
}

export default function JourneyChapter({ chapter }: JourneyChapterProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <h3 className="text-base text-txt-primary font-semibold mb-1">
        Capítulo {chapter.id}: {chapter.title}
      </h3>
      <div className="h-0.5 bg-rose-200 rounded-full mb-4" />
      <div className="space-y-3">
        {chapter.items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            {item.completed ? (
              <Check className="w-5 h-5 text-sage-500 shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-txt-light shrink-0" />
            )}
            <span
              className={cn(
                "text-sm",
                item.completed
                  ? "text-txt-primary font-medium"
                  : "text-txt-muted"
              )}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-gradient-to-r from-rose-50 to-gold-50 rounded-xl p-3 border border-rose-100">
        <p className="text-sm text-txt-body">
          <span className="font-semibold">💡 Dica:</span> {chapter.tip}
        </p>
      </div>
    </div>
  );
}
