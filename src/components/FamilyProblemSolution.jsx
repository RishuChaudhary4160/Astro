import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";

const FamilyProblemSolution = () => {
  useEffect(() => {
    document.title = "Family Problem Solution | Our Astro Service";
  }, []);

  return (
    <div>
      <Breadcrumb title="Family Problem Solution" />
      <div className="ast_about_wrapper ast_toppadder70 ast_bottompadder70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_heading">
                <h2>
                  Family Problem <span>Solution</span>
                </h2>
                <p>Restore harmony in your family relationships</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_about_info">
                <p>
                  At times, we encounter family conflicts that disrupt harmony
                  and strain relationships among relatives. These issues can
                  cause emotional turmoil as family matters deeply to us.
                  Seeking guidance from a top astrologer for family problem
                  solutions can provide relief.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyProblemSolution;
