"use client";

import { useEffect, useState } from "react";

type Post = {
  title: string;
  body: string;
};
const BlogPost = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [idPost, setIdPost] = useState(1);
  const idPosted = idPost;

  useEffect(() => {
    fetch("https://dummyjson.com/posts/" + idPost)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [idPost]);

  console.log("idPost", idPost);

  const handleChange = (e: any) => {
    const id = parseInt(e.target.value);
    setIdPost(id);
  };

  return (
    <div>
      <input type="number" name="idPost" id="" onChange={handleChange} />
      {
        idPost > 0 && idPost < 151 ? (
          <p>Selected post: {idPosted}</p>
        ) : (
          <p>No post selected </p>
        ) // 150 : numbre des articles disponible dans https://dummyjson.com/posts pour le moment
      }
      <article>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
          </>
        )}
      </article>
    </div>
  );
};

export default BlogPost;
