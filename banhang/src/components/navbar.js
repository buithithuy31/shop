import Link from "next/link";
import React from "react";
import Select from "react-select";

const Navbar = ({ user, SignInUser }) => {
  return (
    <div className="flex flex-row justify-between p-5 h-[100px]">
      <div
        className="flex flex-row items-center ml-5 cursor-pointer"
        data-tip="Go home"
      >
        <Link href="/">
          <img
            height="50"
            width="50"
            src="https://icon-library.com/images/icon-shop/icon-shop-3.jpg"
          />
        </Link>
        <Link href="/">
            <span className="ml-2 font-bold">Shop BTT</span>
        </Link>

      </div>
    </div>
  );
};
export default Navbar;
