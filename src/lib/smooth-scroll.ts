"use client";

// Smooth scrolling is now handled natively via the `scroll-smooth` class on
// the <html> element in globals.css. Lenis was removed: its artificial
// scroll-glide effect felt like lag on trackpads/mouse wheels compared to
// native scrolling, and caused responsiveness issues on some mobile GPUs.
export function useSmoothScroll() {
  // Intentionally a no-op — kept as a hook so SmoothScrollProvider doesn't
  // need to change if you ever want to reintroduce a scroll library later.
}
