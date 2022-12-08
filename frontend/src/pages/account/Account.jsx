import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "~/assets/unsplash-logo.svg";

const Account = ({ children }) => {
  const { username, profile_image } = useSelector((state) => state.user.currentUser);
  const pathname = useLocation().pathname.split('/')[1];
  // console.log(useLocation().pathname)
  // console.log(pathname)

  return (
    <div>
      <div className="container h-[130vh] scroll-smooth bg-white">
        <header className="flex justify-between fixed top-0 left-0 right-0 shadow-md bg-white py-2 px-5">
          <Link to="/">
            <img alt="logo" src={logo} width="35" height="35" />
          </Link>
          <div className="relative group">
            <img
              src={`api/photo/image_profile/${profile_image}`}
              alt="user"
              className="w-[32px] h-[32px] rounded-full cursor-pointer"
            />
            <div className="hidden z-50 bg-white absolute bottom-2 right-0 translate-y-[110%] border-gray-300 border group-hover:flex flex-col rounded-sm  shadow-lg">
              <div className="absolute -top-[8px] right-5 decorate">
                <span className="decorate-border"></span>
                <span className="decorate-bg"></span>
              </div>
              <div className="whitespace-nowrap text-sm text-gray-500">
                <div className=" border-b-[1.5px] py-1">
                  <Link to={`/@${username}`}>
                    <p className=" p-2 cursor-pointer hover:bg-gray-200">
                      View profile
                    </p>
                  </Link>
                  <p className=" p-2 cursor-pointer hover:bg-gray-200">Stats</p>
                  <p className=" p-2 cursor-pointer hover:bg-gray-200">
                    Account settings
                  </p>
                  <button className=" whitespace-nowrap outline-none border-[1.5px] rounded-md py-1 px-10 m-2">
                    Submit a photo
                  </button>
                </div>
                <div className="py-1">
                  <p className="p-2 cursor-pointer hover:bg-gray-200">
                    Logout {`@${username}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="body h-full flex pt-[8rem] px-5">
          <div className="side-left w-3/12 h-full">
            <div className="text-xl font-medium mb-5">
              <h1>Account settings</h1>
            </div>
            <div className="text-md text-gray-500 underline">
              <ul className="grid gap-4">
                <li>
                  <Link to='' className="hover:text-black">
                    Edit profile
                  </Link>
                </li>
                <li>
                  <Link to='hiring' className="hover:text-black">
                    Hiring
                  </Link>
                </li>
                <li>
                  <Link to='history' className="hover:text-black">
                    Download history
                  </Link>
                </li>
                <li>
                  <Link to='email_settings' className="hover:text-black">
                    Email settings
                  </Link>
                </li>
                <li>
                  <Link
                    to='password'
                    className="hover:text-black"
                  >
                    change password
                  </Link>
                </li>
                <li>
                  <Link to='connect' className="hover:text-black">
                    Connect accounts
                  </Link>
                </li>
                <li>
                  <Link
                    to='authorized_applications'
                    className="hover:text-black"
                  >
                    Application
                  </Link>
                </li>
                <li>
                  <Link to='close' className="hover:text-black">
                    Close account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="side-righ w-9/12 h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
