import { useEffect } from "react";
import { trackEvent } from "../utils/analytics";

export const useGlobalClickTracking = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest("button, a, [role='button']");
      if (!clickable) return;

      const tag = clickable.tagName.toLowerCase();
      const text = clickable.textContent?.trim().slice(0, 50);

      trackEvent(
        "Global Click",
        tag,
        text || "no-text"
      );
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};
