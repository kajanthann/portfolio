import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, ExternalLink, Upload, Pencil, Trash2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/";
const PROJECTS_URL = `${API_URL}api/projects`;

const emptyForm = {
  title: "",
  desc: "",
  tags: "",
  status: "Completed",
  github: "",
  demo: "",
};

const statusStyles = {
  Completed: "bg-green-100 text-green-700 border-green-500/30",
  "In Progress": "bg-yellow-100 text-yellow-700 border-yellow-500/30",
  Prototype: "bg-blue-100 text-blue-700 border-blue-500/30",
};

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // 👈 tracks add/update in progress
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const authHeader = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    if (!token) {
      navigate("/projects-access");
      return;
    }
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${PROJECTS_URL}/all-projects`, {
        headers: authHeader,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch projects");
      setProjects(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const resetForm = () => {
    setForm(emptyForm);
    setImageFile(null);
    setImagePreview(null);
    setEditingId(null);
  };

  const openCreateModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isSubmitting) return; // don't allow closing mid-submit
    setIsModalOpen(false);
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!editingId && !imageFile) {
      setError("Please select an image for the project.");
      return;
    }

    const tagsArray = form.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("desc", form.desc);
    formData.append("tags", JSON.stringify(tagsArray));
    formData.append("status", form.status);
    formData.append("github", form.github || "");
    formData.append("demo", form.demo || "");
    if (imageFile) {
      formData.append("image", imageFile);
    }

    setIsSubmitting(true); // 👈 start loading state
    try {
      const url = editingId
        ? `${PROJECTS_URL}/${editingId}`
        : `${PROJECTS_URL}/create`;
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: authHeader,
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to save project");

      closeModal();
      fetchProjects();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false); // 👈 stop loading state, success or fail
    }
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title,
      desc: project.desc,
      tags: project.tags.join(", "),
      status: project.status,
      github: project.github || "",
      demo: project.demo || "",
    });
    setImageFile(null);
    setImagePreview(project.image);
    setEditingId(project._id);
    setIsModalOpen(true);
  };

  const requestDelete = (project) => {
    setDeleteTarget(project);
  };

  const cancelDelete = () => {
    setDeleteTarget(null);
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;

    try {
      const res = await fetch(`${PROJECTS_URL}/${deleteTarget._id}`, {
        method: "DELETE",
        headers: authHeader,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to delete project");
      fetchProjects();
    } catch (err) {
      setError(err.message);
    } finally {
      setDeleteTarget(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/projects-access");
  };

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20";

  const labelClass = "mb-1.5 block text-xs font-mono text-slate-600";

  // Only the CREATE flow (no editingId) shows the spinner animation.
  const isCreating = isSubmitting && !editingId;

  return (
    <div className="min-h-screen px-5 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold font-mono text-slate-900">
              {">"} admin.projects()
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-mono text-slate-600 transition hover:border-red-300 hover:text-red-600 cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Project List */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-mono text-green-600">
            {">"} all.projects({projects.length})
          </p>
          <button
            onClick={openCreateModal}
            className="rounded-lg bg-green-600 px-4 py-2 text-xs font-mono text-white transition hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/20 cursor-pointer"
          >
            Create
          </button>
        </div>

        {loading ? (
          <p className="text-sm font-mono text-slate-400">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <div
                key={project._id}
                className="overflow-hidden rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-lg"
              >
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20" />

                  {/* Status */}
                  <span
                    className={`absolute right-3 top-3 rounded-full border px-2 py-1 text-[10px] font-mono ${
                      statusStyles[project.status] ||
                      "bg-slate-100 text-slate-700 border-slate-500/30"
                    }`}
                  >
                    {project.status}
                  </span>

                 {/* Project Links + Admin Controls */}
<div
  className="
    absolute
    bottom-3
    left-3
    right-3
    flex
    items-center
    justify-between
  "
>

  {/* Left Side - Project Links */}
  <div className="flex items-center gap-2">

    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded
          bg-white/90
          text-slate-700
          shadow
          transition
          hover:bg-green-600
          hover:text-white
        "
        title="GitHub Repository"
      >
        <FaGithub size={15} />
      </a>
    )}


    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded
          bg-white/90
          text-slate-700
          shadow
          transition
          hover:bg-green-600
          hover:text-white
        "
        title="Live Website"
      >
        <ExternalLink size={12} />
      </a>
    )}

  </div>



  {/* Right Side - Admin Controls */}
  <div className="flex items-center gap-1">

    <button
      onClick={() => handleEdit(project)}
      title="Edit project"
      className="
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded
        border border-green-400
        text-green-100
        shadow
        transition
      bg-green-600
        hover:text-white
        cursor-pointer
      "
    >
      <Pencil size={13} />
    </button>


    <button
      onClick={() => requestDelete(project)}
      title="Delete project"
      className="
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded
        border border-red-400
        text-red-200
        shadow
        transition
        bg-red-600
        hover:text-white
        cursor-pointer
      "
    >
      <Trash2 size={13} />
    </button>

  </div>


</div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="mb-2 text-sm font-semibold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-slate-600">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1 border-t border-slate-200 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-md border border-slate-200 px-2 py-0.5 text-[11px] font-mono text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create / Edit Modal */}
      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5"
          onClick={closeModal}
        >
          <div
            className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded border border-slate-200 bg-white p-5 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-mono text-green-600">
                {">"} {editingId ? "edit.project()" : "new.project()"}
              </p>

              <button
                onClick={closeModal}
                disabled={isSubmitting}
                className="text-slate-400 transition hover:text-slate-600 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Image Upload */}
              <div>
                <label className={labelClass}>
                  Project Image {editingId ? "(leave empty to keep current)" : ""}
                </label>

                <label
                  htmlFor="image-upload"
                  className="flex min-h-36 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 text-center transition hover:border-green-400"
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="min-h-36 w-full rounded-md object-cover"
                    />
                  ) : (
                    <>
                      <Upload size={20} className="text-slate-400" />
                      <span className="text-xs font-mono text-slate-500">
                        Click to select an image
                      </span>
                    </>
                  )}
                </label>

                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClass}>Title</label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    placeholder="Project title"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Status</label>
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Prototype">Prototype</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>GitHub URL</label>
                  <input
                    type="text"
                    name="github"
                    value={form.github}
                    onChange={handleChange}
                    placeholder="Optional"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Demo URL</label>
                  <input
                    type="text"
                    name="demo"
                    value={form.demo}
                    onChange={handleChange}
                    placeholder="Optional"
                    className={inputClass}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className={labelClass}>Tags</label>
                  <input
                    type="text"
                    name="tags"
                    value={form.tags}
                    onChange={handleChange}
                    placeholder="comma, separated, tags"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Description</label>
                <textarea
                  name="desc"
                  value={form.desc}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Short description"
                  className={inputClass}
                />
              </div>

              <div className="mt-2 flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex min-w-[140px] items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-mono text-white transition hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/20 cursor-pointer disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:shadow-none"
                >
                  {isCreating && (
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  )}
                  {isCreating
                    ? "Adding..."
                    : editingId
                    ? isSubmitting
                      ? "Updating..."
                      : "Update"
                    : "Add Project"}
                </button>

                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className="rounded-lg border border-slate-200 px-5 py-3 text-sm font-mono text-slate-600 transition hover:border-slate-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {/* Delete Confirmation Modal */}
      {deleteTarget ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5"
          onClick={cancelDelete}
        >
          <div
            className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-2 text-sm font-mono text-red-600">
              {">"} delete.project()
            </p>

            <p className="mb-1 text-sm text-slate-700">
              Are you sure you want to delete
            </p>
            <p className="mb-5 font-mono text-sm font-semibold text-slate-900">
              "{deleteTarget.title}"?
            </p>
            <p className="mb-5 text-xs text-slate-400">
              This action cannot be undone.
            </p>

            <div className="flex gap-3">
              <button
                onClick={confirmDelete}
                className="flex-1 rounded-lg bg-red-600 py-2.5 text-sm font-mono text-white transition hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={cancelDelete}
                className="flex-1 rounded-lg border border-slate-200 py-2.5 text-sm font-mono text-slate-600 transition hover:border-slate-300 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AdminPanel;