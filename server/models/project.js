import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    imagePublicId: { type: String },
    desc: { type: String, required: true },
    tags: { type: [String], default: [] },
    status: {
      type: String,
      enum: ["Completed", "In Progress", "Prototype"],
      default: "Completed",
    },
    github: { type: String, default: "https://github.com/kajanthann" },
    demo: { type: String, default: null },
  },
  { timestamps: true },
);

const ProjectModel = mongoose.models.Project || mongoose.model("Project", projectSchema);
export default ProjectModel;
