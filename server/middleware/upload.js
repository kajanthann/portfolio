import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "portfolio_projects",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({
  storage,
});

export default upload;