import { useSelector } from "react-redux";

function Posts() {
  const { posts, status } = useSelector((state) => state.postReducer);
  return (
    <div>
      {status === "Loading" ? (
        <h3>"Loading...</h3>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.postID}>
              <h3>{post.caption}</h3>
              <h4>{post.likes}</h4>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Posts;
