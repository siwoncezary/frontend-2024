import { useLoaderData, useParams } from "react-router-dom";

function PageTwo() {
  const { id } = useParams();
  const post = useLoaderData();
  return (
    <>
      <h1>Page two</h1>
      <p>Fetched post with id: {id}</p>
      <p>User Id: {post.userId}</p>
      <p>Title: {post.title}</p>
      <p>Id: {post.id}</p>
      <p>Body: {post.body}</p>
    </>
  );
}

export default PageTwo;
