import React from "react";
import "../src/styles/CSS/Page.css";

function Page({ children }) {
  return <section className="page">{children}</section>;
}
export default Page;
