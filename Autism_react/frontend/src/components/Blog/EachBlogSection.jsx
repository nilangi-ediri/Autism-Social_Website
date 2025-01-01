import React from "react";
import { Link } from "react-router-dom";

const EachBlogSection = ({ post }) => {
  const {
    id,
    slug,
    title,
    excert,
    linkedinPublishedTime,
    featuredImage,
    author,
  } = post;

  return (
    <article className="relative isolate flex flex-col gap-8 lg:flex-row">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <img
          src={featuredImage.url}
          alt={title}
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2020-03-16" className="text-gray-500">
            {linkedinPublishedTime}
          </time>
          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            Marketing
          </a>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link to={`/blogdetail/${slug}`} className="relative z-10">
              <span className="absolute inset-0"></span>
              {title}
            </Link>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600">{excert}</p>
        </div>
        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
          <div className="relative flex items-center gap-x-4">
            <img
              src={author.photo.url}
              alt=""
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  {author.name}
                </a>
              </p>
              <p className="text-gray-600">{author.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EachBlogSection;
