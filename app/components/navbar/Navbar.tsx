"use client";

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    // main navbar box fixed at top with full width & high z-index
    <div className="fixed w-full bg-white z-10 shadow-sm ">
      {/* inner div box with padding top & bottom with border bottom  */}
      <div
        className="
    py-4
    border-b-[1px]
    "
      >
        {/* container main job is to bring items in center from left & right responsively  */}
        <Container>
          {/* inner flex box for separating items responsively */}
          <div
            className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
            "
          >
            {/* logo section  */}
            <Logo />
            {/* search section  */}
            <Search />
            {/* user menu section for login / logout and profile */}
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
