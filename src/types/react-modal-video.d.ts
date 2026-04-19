declare module "react-modal-video" {
  import * as React from "react";

  interface ModalVideoProps {
    channel?: "youtube" | "vimeo" | "facebook" | "custom";
    isOpen: boolean;
    videoId?: string;
    url?: string;
    autoplay?: boolean;
    ratio?: string;
    allowFullScreen?: boolean;
    animationSpeed?: number;
    aria?: {
      openMessage: string;
      dismissBtnMessage: string;
    };
    onClose?: () => void;
  }

  const ModalVideo: React.FC<ModalVideoProps>;
  export default ModalVideo;
}
