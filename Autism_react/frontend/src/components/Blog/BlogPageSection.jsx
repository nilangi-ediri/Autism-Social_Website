import React, { useEffect, useState } from "react";
import EachBlogSection from "./EachBlogSection";
import { useParams, Link } from "react-router-dom";
import { request } from "graphql-request";

const BLOG_POSTS_QUERY = `
{  
  posts (orderBy: linkedinPublishedTime_DESC){
    id
    slug
    title
    excert
    linkedinPublishedTime
    featuredImage {
      url
    }
    author(locales: en) {
      id
      bio
      name
      photo {
        url
      }
    }
  }
}
`;

const BlogPageSection = () => {
  const [posts, setPosts] = useState([]);
  const { page } = useParams(); // 获取当前页码
  const postsPerPage = 2;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // const variables = { after: after };
        const { posts } = await request(
          "https://api-ap-southeast-2.hygraph.com/v2/clrir1rbb0cc301umweehk0ml/master",
          BLOG_POSTS_QUERY,
        );
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  console.log(posts); // This should log an array if the request is successful

  const totalPosts = posts.length; // 假设你知道总共有3篇博客
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const [visiblePages, setVisiblePages] = useState([
    Number(page),
    Number(page) + 1,
    Number(page) - 1,
  ]);
  // 处理点击 "..." 的逻辑

  useEffect(() => {
    setVisiblePages([Number(page), Number(page) + 1, Number(page) - 1]);
  }, [page]);

  // const handleExpandClick = () => {
  //     // 扩展页码显示范围
  //     setVisiblePages([Number(page)+1,Number(page)+2,Number(page)-2]);
  //   };

  return (
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Gain insights on nurturing autism care with guidance from
            specialists.
          </p>

          <Link to="/CreateBlog">
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create
            </button>
          </Link>

          {/* line here */}
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post, index) => {
              if (
                index >= (page - 1) * postsPerPage &&
                index < page * postsPerPage
              ) {
                return <EachBlogSection key={post.id} post={post} />;
              }
              return null;
            })}

            <div className="text-center py-4">
              {[...Array(totalPages)].map((_, i) => {
                // console.log(i)
                // console.log(visiblePages)
                if (visiblePages.includes(i + 1)) {
                  return (
                    <Link
                      key={i}
                      to={{ pathname: `/blog/${i + 1}` }}
                      className={`inline-block mx-1 px-4 py-2 bg-gray-200 text-blue-700 border border-gray-300 rounded hover:bg-gray-300 focus:text-blue-800 ${
                        page === i + 1 ? "bg-blue-500 text-white" : ""
                      }`}
                    >
                      {i + 1}
                    </Link>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageSection;
