import { useState } from "react";
import { storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";

export const UploadImageToFirebase = (file) => {
  return new Promise((resolve, reject) => {
    try {
      // const [uploadProgress, setUploadProgress] = useState(0);
      const storageRef = ref(storage, `images/${v4() + file.name}`);
      const metadata = {
        contentType: file.type,
      };
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // setUploadProgress(progress);

          switch (snapshot.state) {
            case "paused":
              break;
            case "running":
              break;
          }
        },
        (error) => {
          reject(error);
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
              reject(error);
            });
        }
      );
    } catch (err) {
      console.error("Error uploading image to Firebase:", err);
      reject(err);
    }
  });
};
