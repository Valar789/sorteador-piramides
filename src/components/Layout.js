import React from "react";
import Footer from "./Footer";

import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <section className="grid place-content-center h-screen   bg-greenPrimary ">
        {children}
      </section>
      <Footer/>
    </>
  );
}
