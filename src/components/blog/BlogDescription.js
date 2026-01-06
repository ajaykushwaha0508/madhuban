import React from "react";

const BlogDescription = ({ blog }) => {
  let data = blog?.description?.replace(
    /(<iframe\b[^>]*?)\s*sandbox=(["']?)?[^"'\s>]*?(["']?)?([^>]*>)/gi,
    "$1 $4"
  );
  data = data.replace(
    /<table([^>]*)>([\s\S]*?)<\/table>/gi,
    '<div class="table-wrapper"><table$1>$2</table></div>'
  );

  return (
    <div className="bg-primary-gray pt-10">
      <div className=" no-tailwind">
        <div
          className="discriptionContent"
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>
      </div>
    </div>
  );
};

export default BlogDescription;
