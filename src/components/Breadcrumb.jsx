import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, parentLink, parentTitle }) => {
  return (
    <div className="ast_pagetitle">
      <div className="ast_img_overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="page_title">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <ul className="breadcrumb">
              <li>
                <Link to="/" style={{ color: "blue" }}>
                  Home
                </Link>
              </li>
              <li>-</li>
              {parentLink && parentTitle && (
                <>
                  <li>
                    <Link to={parentLink}>{parentTitle}</Link>
                  </li>
                  <li>-</li>
                </>
              )}
              <li>
                <span>{title}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
