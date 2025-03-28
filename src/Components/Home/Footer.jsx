import React from "react";

const Footer = () => {
  const navLinks = ["home", "work", "service", "About"];
  const anotherLinks = ["contact", "privacy policy ", "terms &  condition"];
  const socialLinks = ["github", "linkedin", "email"];
  return (
    <div>
      <footer className="h-[50vh] flex w-full">
        <div className="logo w-96">
          <h1 className="w-60 border border-white text-2xl capitalize text-center py-3 rounded-full">
            hamza nasir
          </h1>
          <p className="capitalize">
            frontend developer <br /> designer
          </p>
        </div>
        <div className="nav-links w-96">
          <ul>
            {
                navLinks.map((links , index)=> <li className="capitalize text-xl">{links}</li> )
            }
          </ul>
        </div>
        <div className="another-links w-96">
        <ul>
            {
                anotherLinks.map((links , index)=> <li className="capitalize text-xl">{links}</li> )
            }
          </ul>
        </div>
        <div className="social-links w-96">
        <ul>
            {
                socialLinks.map((links , index)=> <li className="capitalize text-xl">{links}</li> )
            }
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
