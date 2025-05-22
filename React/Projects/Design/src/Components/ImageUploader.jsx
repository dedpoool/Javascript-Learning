// ImageUploader.js
import { useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image");
    setUploading(true);
    const storageRef = ref(storage, `images/${image.name}`);
    try {
      await uploadBytes(storageRef, image);
      const url = await getDownloadURL(storageRef);
      setImageURL(url);
    } catch (err) {
      console.error("Upload error:", err);
    }
    setUploading(false);
  };

  return (
    <div>
      <h3>Upload Image</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {imageURL && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageURL} alt="Uploaded" style={{ width: "300px" }} />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
