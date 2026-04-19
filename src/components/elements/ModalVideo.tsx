import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoModal: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="video-modal-wrapper text-center">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <button
        className="theme-btn btn-style-one"
        onClick={() => setOpen(true)}
        aria-label="Watch Demo Video"
      >
        <span className="btn-title">VIEW DEMO</span>
      </button>
    </div>
  );
};

export default VideoModal;