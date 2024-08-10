import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useLikePost = (post) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid));
  const showToast = useShowToast();

  useEffect(() => {
    const fetchPostData = async () => {
      const postRef = doc(firestore, "posts", post.id);
      const postDoc = await getDoc(postRef);
      if (postDoc.exists()) {
        const postData = postDoc.data();
        setLikes(postData.likes.length);
        setIsLiked(postData.likes.includes(authUser?.uid));
      }
    };

    fetchPostData();
  }, [post.id]);

  const handleLikePost = async () => {
    if (isUpdating) return;
    if (!authUser)
      return showToast(
        "Error",
        "You must be logged in to like a post",
        "error"
      );
    setIsUpdating(true);

    try {
      const postRef = doc(firestore, "posts", post.id);
      await updateDoc(postRef, {
        likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
      });

      setIsLiked(!isLiked);
      isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  return { isLiked, likes, handleLikePost };
};

export default useLikePost;
