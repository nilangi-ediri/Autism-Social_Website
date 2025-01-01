import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "graphql-request";

const GET_POST_QUERY = `
  query GetPost($slug: String!) {
    post(where: {slug: $slug}) {
      content {
        html
      }
      author {
        bio
        name
        photo {
          url
        }
      }
      title
      linkedinPublishedTime
      featuredImage {
        url
      }
    }
  }
`;

const BlogContent = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await request(
          "https://api-ap-southeast-2.hygraph.com/v2/clrir1rbb0cc301umweehk0ml/master",
          GET_POST_QUERY,
          { slug },
        );
        setPost(response.post);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  const { content, author, title, linkedinPublishedTime, featuredImage } =
    post || {};
  console.log(post); // This should log an object if the request is successful

  return (
    <main className="container mx-auto max-w-4xl px-6 py-8">
      <h1 className="text-4xl font-extrabold text-gray-800 leading-tight mb-6">
        {title}
      </h1>

      <div className="flex items-center text-sm text-gray-600 mb-8">
        {author?.photo?.url && (
          <img
            src={author.photo.url}
            alt={author.name}
            className="h-12 w-12 rounded-full mr-4"
          />
        )}
        <div>
          <p className="font-semibold">{author.name}</p>
          <p>
            Published on {new Date(linkedinPublishedTime).toLocaleDateString()}
          </p>
        </div>
      </div>

      {featuredImage && (
        <div className="my-6 flex justify-center">
          <img
            src={featuredImage.url}
            alt="Featured"
            className="rounded-lg" // Add more styles as needed
          />
        </div>
      )}

      {/* <div className="container mx-auto max-w-4xl">
        <article className="prose prose-lg prose-indigo mx-auto">
          <div dangerouslySetInnerHTML={{ __html: content.html }} />
        </article>
      </div> */}

      <article className="prose prose-custom mx-auto">
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </article>
    </main>
  );
};

export default BlogContent;
