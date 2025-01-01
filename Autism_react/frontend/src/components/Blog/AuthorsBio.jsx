import React, { useEffect, useState } from "react";
import { request } from "graphql-request";

const AUTHORS_QUERY = `
  {
    authors {
      bio
      id
    }
  }
`;

function AuthorsBio() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const { authors } = await request(
          "https://api-ap-southeast-2.hygraph.com/v2/clrir1rbb0cc301umweehk0ml/master",
          AUTHORS_QUERY,
        );
        setAuthors(authors);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  console.log(authors); // This should log an array if the request is successful
  return (
    <div className="App">
      <ul>
        {authors.map((author) => (
          <li key={author.id}>{author.bio}</li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorsBio;
