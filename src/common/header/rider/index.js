import React from "react";
import Header from "../header";
import logo from "common/assets/logo/rider.png";

export default function() {
  return (
    <Header
      header="Rider"
      text="The sword has to be more than a simple weapon, it has to be an answer to life's questions."
      logo={logo}
    />
  );
}
