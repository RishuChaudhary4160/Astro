import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";

const LoveProblemSolution = () => {
  useEffect(() => {
    document.title = "Love Problem Solution | OM Astro Solution";
  }, []);

  return (
    <div>
      <Breadcrumb title="Love Problem Solution" />
      <div className="ast_about_wrapper ast_toppadder70 ast_bottompadder70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_heading">
                <h2>
                  Love Problem <span>Solution</span>
                </h2>
                <p>Expert guidance for all your love-related concerns</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_about_info">
                <p>
                  OM Astro Solution is your top love problem solution
                  Astrologer, specializing in love marriages. Love is a precious
                  gift but can come with challenges like communication issues
                  and relationship troubles. With his experience, Our Astro
                  Service provides effective solutions, offering tailored
                  guidance for a happier and easier love life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveProblemSolution;
