import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";

const PhotoGallery = () => {
  useEffect(() => {
    document.title = "Photo Gallery | OM Astro Solution";
  }, []);

  const photos = Array.from({ length: 44 }, (_, i) => {
    const photoNumber = i + 1;
    // Skip photo 22 as it doesn't exist in the original
    if (photoNumber === 22) return null;
    return `/images/pg/${photoNumber}.jpg`;
  }).filter(Boolean);

  return (
    <div>
      <Breadcrumb title="Photo Gallery" />

      <div className="ast_service_wrapper ast_toppadder70 ast_bottompadder50">
        <div className="container-fluid">
          <div className="row">
            {photos.map((photo, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="pg-g">
                  <img
                    src={photo}
                    className="img-thumbnail"
                    alt={`Gallery ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
