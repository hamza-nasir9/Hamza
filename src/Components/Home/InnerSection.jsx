import React from "react";

const InnerSection = ({heading , para} ) => {
  return (
    <div>
      <div className="card text-white w-[40vw] border-b pb-10 ">
        <div className="heading">
          <h1 className="text-4xl leading-20 capitalize"> {heading} </h1>
        </div>
        <div className="text">
          <p>
            {para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InnerSection;
