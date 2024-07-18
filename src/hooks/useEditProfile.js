import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../firebase/storage";
import { doc } from "firebase/firestore";

const useEditProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();

  const editProfile = async (inputs, selectedFile) => {
    if (isUpdating || !authUser) return;
    setIsUpdating(true);

    const storageRef = ref(storage, "profilePics/${authUser.uid");
    const userDocRef = doc(firestore, "users", authUser.uid);

    let URL = "";

    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        URL = await getDownloadURL(ref(storage, "profilePics/${authUser.uid"));
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
};

export default useEditProfile;
