import Post from "./Post";
import PostSkeleton from "../skeletons/PostSkeleton";
import { POSTS } from "../../utils/db/dummy";
import { useEffect } from "react";


const Posts = ({ feedType, username, userId }) => {
  const getPostEndpoint = () => {
    switch (feedType) {
  // Whoever is doing posts: Please work around the stuff that's already in getPostEndpoint
  // I wrote in some code for it because I needed it to for the Profile Page section - Clara
      case "posts":
        return `/api/posts/user/${username}`;
      case "likes":
        return `api/posts/likes/${userId}`;
    }
  };
  const isLoading = false;
  // Also wrote a bit of this because it's needed for the Profile Page Section - Clara
  /*useEffect(() => {
    refetch();
  }, [username]);*/

  return (
    <>
      {isLoading && (
        <div className="flex flex-col justify-center">
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      )}
      {!isLoading && POSTS?.length === 0 && (
        <p className="text-center my-4">No posts in this tab. Switch 👻</p>
      )}
      {!isLoading && POSTS && (
        <div>
          {POSTS.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};
export default Posts;
