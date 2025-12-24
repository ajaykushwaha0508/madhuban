import React, { use } from "react";
import { getAllBlogs } from "@/services/blog/blogServices";
import Blog from "@/components/blog/Blog";

const BlogPage = () => {
  const getBlogs = async () => {
    try {
      const res = await getAllBlogs();
      console.log("blog");
      return res.data;
    } catch (err) {
      console.log("Error in fetching blogs", err);
    }
  };

  const blogsData = use(getBlogs());

  if (!blogsData?.blogs)
    return (
      <div className="h-[70vh] flex items-center justify-center">
        No Blogs Found
      </div>
    );

  return <Blog />;
};

export default BlogPage;
