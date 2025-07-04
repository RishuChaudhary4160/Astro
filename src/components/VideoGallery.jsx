import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";

const VideoGallery = () => {
  useEffect(() => {
    document.title = "Video Gallery | Our Astro Service";
  }, []);

  const videos = Array.from(
    { length: 12 },
    (_, i) => `/images/vg/${i + 1}.mp4`
  );

  return (
    <div>
      <Breadcrumb title="Video Gallery" />

      <div className="ast_service_wrapper ast_toppadder70 ast_bottompadder50">
        <div className="container-fluid">
          <div className="row">
            {videos.map((video, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="pg-g">
                  <video
                    controls
                    className="img-thumbnail"
                    style={{ width: "100%", height: "auto" }}
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
