import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";

const MarriageProblemSolution = () => {
  useEffect(() => {
    document.title = "Marriage Problem Solution | Om Astro Service";
  }, []);

  return (
    <div>
      <Breadcrumb title="Marriage Problem Solution" />
      <div className="ast_about_wrapper ast_toppadder70 ast_bottompadder70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_heading">
                <h2>
                  Marriage Problem <span>Solution</span>
                </h2>
                <p>Astrological solutions for marriage-related challenges</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_about_info">
                <p>
                  When navigating hurdles on the path to marriage, astrology
                  offers solutions. Whether due to planetary changes or chart
                  discrepancies, it can address pre- and post-marriage issues.
                  While some react aggressively, a composed approach turns to
                  astrology to alleviate emotional distress caused by a
                  partner's actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarriageProblemSolution;
