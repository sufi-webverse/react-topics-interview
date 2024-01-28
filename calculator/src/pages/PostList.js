import { useEffect, useState } from "react";
import LCButton from "../components/Button";

const PostListCard = ({ id, title, body }) => {
  return (
    <>
      <div className="rounded shadow p-6 bg-indigo-500" key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </>
  );
};

const PostList = function () {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch , axios
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => setPosts((prev) => data));

    // 1000 list
    // react-infinite-scroll
  }, []);

  return (
    <>
      <LCButton text="submit" onClick={()=>alert('clicked')} />
      <div>
        {posts &&
          posts.map(function (post) {
            return (
              <>
                <div className="mb-3 ">
                  <PostListCard {...post} />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default PostList;
