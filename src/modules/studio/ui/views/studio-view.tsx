"use client";

import { useCallback, useEffect, useState } from "react";
import { studioRawData } from "../../assets/studio-raw-data";
import { VideoSection } from "../sections/video-section";
import { setCustomParam } from "@/utils/share/custom-params-setter";

export const StudioView = () => {
  const [studeoView, setStudioView] = useState("video");

  const handleStudioView = useCallback(() => {
    setCustomParam("studioView", studeoView);
  }, [studeoView]);

  useEffect(() => {
    handleStudioView();
  }, [handleStudioView]);



  return (
    <div className="flex flex-col gap-y-4 pt-2.5">
      <div className="px-4">
        <h1 className="text-2xl font-bold">Channel content</h1>
        <p className="text-xs text-muted-foreground">
          Manage your channel content and videos
        </p>
      </div>
      <div className="flex pt-2 gap-x-4 px-4 text-sm text-muted-foreground font-semibold">
        {studioRawData.map((item, index) => (
          <p
            onClick={() => setStudioView(item.slug)}
            className={`cursor-pointer ${studeoView === item.slug ? "text-stone-900 border-b-2 border-stone-900" : ""}`}
            key={index}
          >
            {item.name}
          </p>
        ))}
      </div>
      <VideoSection studiodata={studioRawData.filter((item) => item.slug === studeoView)[0].table} />
    </div>
  );
};
