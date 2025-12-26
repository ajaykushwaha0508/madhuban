import React, { use } from "react";
import { getAllBlogs } from "@/services/blog/blogServices";
import Blog from "@/components/blog/Blog";
import NewBlogPage from "@/components/blog/NewBlog";

const BlogPage = () => {
  const getBlogs = async () => {
    try {
      const res = await getAllBlogs();
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

  return <NewBlogPage />;
};

export default BlogPage;

export const metadata = {
  title: "Madhuban Eco Retreat | Blog",

  description:
    "Explore Madhya Pradesh, Ratapani forest, wilderness, forest walk, eco retreat in Bhopal, eco retreat in india, explore forest, wildlife in Bhopal, Ratapani tiger santury",

  keywords: [
    "eco retreat near Ratapani",
    "Bhopal",
    "sustainable travel India",
    "eco resort near Ratapani",
    "Mud Houses in India",
    "farm to table dining",
    "nature stay Madhya Pradesh",
    "peaceful gateway for seniors",
    "wildlife and eco experience in India",
  ],

  alternates: {
    canonical: "https://www.madhubanecoretreat.com/",
  },

  openGraph: {
    title: "Madhuban Eco Retreat",
    description: "Nature-inspired living and travel at its best.",
    url: "https://www.madhubanecoretreat.com/",
    siteName: "Madhuban Eco Retreat",
    type: "website",
  },
};
