import { useShowToast } from "./useShowToast";
import { useState } from "react";
import { firestore } from "../firebase/firestore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useAuthStore } from "../store/authStore";
import { usePostStore } from "../store/postStores";

const usePostComment = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const showToast = useShowToast();

  const authUser = useAuthStore((state) => state.user);

  const addComment = usePostStore((state = state.addComment));

  const handlePostComment = async (postId, comment) => {
    if (isCommenting) return;
    if (!authUser)
      return showToast("Error", "You must be logged into comment", "error");
    setIsCommenting(true);
    const newComment = {
      comment,
      createdAt: Date.now(),
      createdBy: authUser.uid,
      postId,
    };

    try {
      await updateDoc(doc(firestore, "posts", postId), {
        comments: arrayUnion(newComment),
      });

      addComment(postId, newComment);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsCommenting(false);
    }
  };

  return { isCommenting, handlePostComment };
};

export default usePostComment;
