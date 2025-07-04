import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Our Astro Service";
  }, []);

  return (
    <div>
      <Breadcrumb title="Contact Us" />

      <div className="ast_contact_wrapper ast_toppadder70 ast_bottompadder50">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="ast_contact_info">
                <span>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <h4>phone</h4>
                <p>
                  <a href="tel:+919510613656">+91 95106 13656</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="ast_contact_info">
                <span>
                  <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
                </span>
                <h4>email</h4>
                <p>
                  <a href="mailto:omastroserviceindia@gmail.com">
                    omastroserviceindia@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="ast_contact_info">
                <span>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <h4>address</h4>
                <p>Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842677533!2d72.41492722798856!3d23.020474102818895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1696613223074!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      ></iframe>
    </div>
  );
};

export default Contact;
