import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex-center my-7 self-end ">
      <span>
        {new Date().getFullYear()} &copy;{" "}
        <Link href="https://github.com">
          {" "}
          Hack Js Team
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
