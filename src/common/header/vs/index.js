import React from "react";
import Header from "../header";
import logo from "common/assets/logo/visual-studio.svg";

export default function() {
  return (
    <Header
      header="Visual Studio"
      text="  There are only two forces in the world, the sword and the spirit. In
the long run the sword will always be conquered by the spirit."
      logo={logo}
    />
  );
}
