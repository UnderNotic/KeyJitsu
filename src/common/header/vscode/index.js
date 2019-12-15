import React from "react";
import Header from "../header";
import logo from "common/assets/logo/visual-studio-code.svg";

export default function() {
  return (
    <Header
      header="Visual Studio Code"
      text="A warrior is worthless unless he rises above others and stands strong in the midst of a storm."
      logo={logo}
    />
  );
}
