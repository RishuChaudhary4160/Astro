import React from "react";

const Awards = () => {
  const awards = [
    "/images/awa/1.jpg",
    "/images/awa/2.jpg",
    "/images/awa/3.jpg",
    "/images/awa/4.jpg",
    "/images/awa/5.jpg",
    "/images/awa/6.jpg",
    "/images/awa/7.jpg",
    "/images/awa/8.jpg",
    "/images/awa/9.jpg",
    "/images/awa/10.jpg",
    "/images/awa/11.jpg",
  ];

  return (
    <div className="ast_testimonial_wrapper ast_toppadder70 ast_bottompadder70 bg1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>
                Our <span> Awards</span>
              </h1>
              <p>
                We are truly grateful to be recognized for our dedication and
                hard work. Each award reflects the trust and support of our
                amazing community.
              </p>
            </div>
          </div>
          <div className="col-lg-10 col-md-12 col-sm-12 col-12 offset-lg-1 offset-md-0 offset-sm-0 offset-0">
            <div className="ast_testimonials_slider ast_testimonials_slider1">
              <div className="row">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                  >
                    <div className="ast_service_slider_box">
                      <img
                        src={award}
                        alt={`Award ${index + 1}`}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
