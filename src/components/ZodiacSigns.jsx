import React from "react";

const ZodiacSigns = () => {
  const zodiacSigns = [
    {
      name: "Aries",
      hindi: "मेष",
      svg: "M28.819,28.787c0,0,0.504-1.823,0.307-2.479...",
    },
    {
      name: "Taurus",
      hindi: "वृषभ",
      svg: "M12.48,11.539c-0.609-0.554-3.646-3.475...",
    },
    {
      name: "Gemini",
      hindi: "मिथुन",
      svg: "M24.545,12.646l-2.729-1.035c0,0-5.42...",
    },
    {
      name: "Cancer",
      hindi: "कर्क",
      svg: "M32,14.824c-3.197,5.81-6.949,5.456...",
    },
    {
      name: "Leo",
      hindi: "सिंह",
      svg: "M16.207,12.926c-1.268,2.979,5.197,3.232...",
    },
    {
      name: "Virgo",
      hindi: "कन्या",
      svg: "M31.078,11.713c0,0,0.551-0.153,0.514...",
    },
    { name: "Libra", hindi: "तुला", svg: "M18.46,11.25c0-1.604-1.3-2.904..." },
    {
      name: "Scorpio",
      hindi: "वृश्चिक",
      svg: "M20.83,14.079c-1.882-1.596-4.746...",
    },
    {
      name: "Sagittarius",
      hindi: "धनु",
      svg: "M29.452,9.632c0.438-1.48,1.816...",
    },
    {
      name: "Capricorn",
      hindi: "मकर",
      svg: "M29.452,9.632c0.438-1.48,1.816...",
    },
    {
      name: "Aquarius",
      hindi: "कुम्भ",
      svg: "M30.576,6.925c-1.229-1.228-6.105...",
    },
    {
      name: "Pisces",
      hindi: "मीन",
      svg: "M29.276,10.111c-0.166-0.34-0.257...",
    },
  ];

  return (
    <div className="ast_horoscope_wrapper ast_toppadder70 ast_bottompadder40">
      <div className="container-fluid">
        <div className="row">
          {zodiacSigns.map((sign, index) => (
            <div key={index} className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="ast_horoscope_box">
                <a href="javascript:void(0);">
                  <span>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32px"
                      height="32px"
                      viewBox="0 0 32 32"
                    >
                      <g>{/* <path d={sign.svg} /> */}</g>
                    </svg>
                  </span>
                  <h4>
                    {sign.name}
                    <br />
                    <strong>( {sign.hindi} )</strong>
                  </h4>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZodiacSigns;
