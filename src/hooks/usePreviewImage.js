import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const showToast = useShowToast();
  const maxFileSizeInBytes = 2 * 1024 * 1024;

  const handleImageChange = (e) => {
    const file = e.target.file[0];
    if (file && file.type.startsWith("/image")) {
      if (file.size > maxFileSizeInBytes) {
        showToast("Error", "File size must be less than 2MB", "error");
        setSelectedFile(null);
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(reader.result);
    } else {
      showToast("Error", "Please select an image file", "error");
      setSelectedFile(null);
    }
  };

  return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImage;
