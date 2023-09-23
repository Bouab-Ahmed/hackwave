import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { useAuth } from "../context/AuthContext"; // Import the AuthProvider and useAuth



const Nav = () => {
  const { profile, login, logOut } = useAuth(); // Use the useAuth hook to access authentication values

  const [navToggle, setNavToggle] = useState(false);


  return (
    <nav className="w-full flex-between mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <img
          src={Logo}
          width={40}
          height={40}
          className="object-contain"
          alt="Logo"
        />
        <p className="logo_text">Hack Js</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden  gap-3 md:gap-5  ">
        {profile ? (
          <>
            <button className="outline_btn" onClick={logOut} type="button">
              Sign Out
            </button>
            <Link href="/profile">
              <img
                src={profile.picture}
                width={38}
                height={38}
                className="rounded-full"
                alt="profile"
              />{" "}
            </Link>
          </>
        ) : (
          <>
            {/* Sign In Button */}
            <button onClick={() => login()} className="black_btn">
              Sign in with Google 🚀{" "}
            </button>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="flex sm:hidden relative gap-2 justify-center items-stretch">
        {profile ? (
          <div className="flex">
            <img
              src={profile.picture}
              width={38}
              height={38}
              className="rounded-full"
              alt="profile"
              onClick={() => {
                setNavToggle((prev) => !prev);
              }}
            />

            {navToggle && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_Link"
                  onClick={() => setNavToggle(false)}
                >
                  {" "}
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_Link"
                  onClick={() => setNavToggle(false)}
                >
                  {" "}
                  Create Prompt
                </Link>
                <button
                  type="button"
                  className="w-full mt-5 black_btn"
                  onClick={() => {
                    setNavToggle(false);
                    logOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Sign In Button */}
            <button onClick={() => login()} className="black_btn">
              Sign in with Google 🚀{" "}
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav