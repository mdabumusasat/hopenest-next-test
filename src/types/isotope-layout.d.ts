declare module "isotope-layout" {
  export default class Isotope {
    constructor(
      element: Element | string,
      options?: {
        itemSelector?: string;
        percentPosition?: boolean;
        masonry?: { columnWidth?: string };
        transitionDuration?: string;
      }
    );
    arrange(options: { filter: string }): void;
    layout(): void;
    destroy(): void;
  }
}
