import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/Home";
import ResumePage from "../pages/Resume";
import Clearfix from "./Clearfix";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";

export default function MainContainer() {
  return (
    <div className="page-scroll">
      <div id="page_container" className="page-container bg-move-effect">
        <Header />
        <div id="main" className="site-main">
          <div id="main-content" className="single-page-content">
            <div id="primary" className="content-area">
              <div
                id="content"
                className="page-content site-content single-post"
                role="main"
              >
                <Routes>
                  <Route path="/" Component={HomePage} />
                  <Route path="/resume" Component={ResumePage} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
        <Clearfix />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
