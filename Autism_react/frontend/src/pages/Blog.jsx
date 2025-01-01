import React from "react";
import NavBar from "../components/NavBar";
import BlogPageSection from "../components/Blog/BlogPageSection";
import WhiteFooter from "../components/WhiteFooter";

function Blog() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-between h-dvh">
        <BlogPageSection />
        <WhiteFooter />
      </div>
    </>
  );
}

export default Blog;
