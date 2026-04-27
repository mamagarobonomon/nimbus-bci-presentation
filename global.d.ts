export {};

declare global {
  interface Window {
    presentationAPI: {
      goToSlide: (index: number) => void;
      nextSlide: () => void;
      prevSlide: () => void;
      getCurrentSlide: () => number;
      getTotalSlides: () => number;
    };
  }
}
