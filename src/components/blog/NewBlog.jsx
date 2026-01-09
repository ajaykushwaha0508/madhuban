export const dynamic = "force-dynamic";
import React from "react";
import BlogListWithPagination from "@/common-components/Pagination/BlogListWithPagination";
import BlogBanner from "./BlogBanner";
import NaturesStory from "./NaturesStory";
import { getAllBlogs } from "@/services/blog/blogServices";
import DecorativeHeading from "@/common-components/heading/DecorativeHeading";

export const metadata = {
  title: "Explore Shikso Blog for Smart and AI driven Learning Insight",
  description:
    "Explore the Shikso Blog for stories and insights on school education, AI learning, and modern teaching trends. Stay updated with India’s evolving education landscape.",
  keywords: [
    "Shikso blog",
    " school education trends",
    " AI learning",
    " edtech insights",
    " smart learning India",
    " gamified learning",
    " digital classrooms",
    " AI in schools",
    " modern teaching",
  ],
  alternates: { canonical: "https://www.shikso.com/blogs" },
  openGraph: {
    title: "Explore Shikso Blog for Smart and AI driven Learning Insight",
    description:
      "Explore the Shikso Blog for stories and insights on school education, AI learning, and modern teaching trends. Stay updated with India’s evolving education landscape.",
    url: "https://www.shikso.com/",
    images: [
      {
        url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Shikso Blog for Smart and AI driven Learning Insight",
    description:
      "Explore the Shikso Blog for stories and insights on school education, AI learning, and modern teaching trends. Stay updated with India’s evolving education landscape.",
    images: [
      {
        url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png",
      },
    ],
  },
};

const LIMIT = 8;

const NewBlogPage = async () => {
  const page = 1;
  const res = await getAllBlogs(page, LIMIT);
  const posts = res?.data;
  const blogs = Array.isArray(posts?.blogs) ? posts.blogs : [];

  return (
    <div>
      <BlogBanner />
      <NaturesStory />
      <div className="custom-container py-4 md:py-8">
        <DecorativeHeading text={"Blogs"} as="h1" textClasses={"w-50"} />

        <div className="mt-4 md:mt-10 flex items-center justify-center gap-5">
          {!blogs.length ? (
            <div className="text-center">
              <p className="text-primary-gray2 text-lg md:text-xl">
                {" "}
                No blogs available at the moment.{" "}
              </p>
              <p className="text-primary-gray2 text-sm">
                Stay tuned—we’ll be sharing insights, stories, and experiences
                very soon.
              </p>
            </div>
          ) : (
            <BlogListWithPagination
              initialBlogs={blogs}
              totalBlogs={posts.totalpages}
              limit={LIMIT}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default NewBlogPage;
