import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Inquiry | OM Astro Solution";
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <Breadcrumb title="Inquiry" />

      <div className="ast_contact_wrapper ast_toppadder70 ast_bottompadder50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12 mx-auto">
              <div className="contact-form">
                <h2 className="text-center mb-4">Send us your Inquiry</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your Name *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="form-group mb-3">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your Email *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="form-group mb-3">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your Phone *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="form-group mb-3">
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-control"
                          required
                        >
                          <option value="">Select Subject *</option>
                          <option value="Love Problem Solution">
                            Love Problem Solution
                          </option>
                          <option value="Marriage Problem Solution">
                            Marriage Problem Solution
                          </option>
                          <option value="Family Problem Solution">
                            Family Problem Solution
                          </option>
                          <option value="Horoscope Reading">
                            Horoscope Reading
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="form-group mb-3">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control"
                          rows={5}
                          placeholder="Your Message *"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text-center">
                        <button type="submit" className="ast_btn">
                          Send Inquiry
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
