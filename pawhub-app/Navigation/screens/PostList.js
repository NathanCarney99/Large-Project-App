import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import axios from 'axios';

const API_BASE_URL = 'https://pawhub.space/api/';

function PostList() {
  const [postsData, setPostsData] = useState([]);

  const searchUsersReturnUsers = async (query) => {
    try {
      let response = await axios.get(`${API_BASE_URL}searchUsersReturnUsers`, {
        params: query
      });
      return response.data;
    } catch (error) {
      console.error('Failed to search data', error);
    }
  };

  const searchPostsReturnPosts = async (query) => {
    try {
      let response = await axios.get(`${API_BASE_URL}searchPostsReturnPosts`, {
        params: query
      });
      return response.data;
    } catch (error) {
      console.error('Failed to search data', error);
    }
  };

  const getPosts = async () => {
    try {
      let query = {};
      let posts = await searchPostsReturnPosts(query);

      let numPosts = posts.length;
      let postsDataArray = []; // Rename the variable to avoid redeclaration conflict

      if (numPosts > 0) {
        for (let i = 0; i < numPosts; i++) {
          const stringWithoutT = posts[i].dateCreated.replace('T', ' ');
          const simpleDate = stringWithoutT.slice(0, -5);

          let user = await searchUsersReturnUsers({ userID: posts[i].userID });

          const postData = {
            id: i,
            text: posts[i].text,
            numLikes: posts[i].numLikes,
            date: simpleDate,
            postID: posts[i].postID,
            images: posts[i].photo,
            username: user[0].username,
            pfp: user[0].profilePicture
          };

          postsDataArray.push(postData);
        }
      }

      postsDataArray = postsDataArray.reverse();
      return postsDataArray;
    } catch (error) {
      console.error('Failed to get posts', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPostsData(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      {postsData.map((postData) => (
        <PostCard key={postData.id} postData={postData} />
      ))}
    </>
  );
}

export default PostList;
