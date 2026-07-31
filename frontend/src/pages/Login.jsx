import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/";
const PROJECTS_URL = `${API_URL}api/projects`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${PROJECTS_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/adminpanel");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20";

  const labelClass = "mb-1.5 block text-xs font-mono text-slate-600";

  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 p-8 shadow-sm">
        {/* Header */}
        <div className="text-center mb-7">
          <h1 className="text-2xl font-bold font-mono text-slate-900">
            {">"} admin.login()
          </h1>

          <p className="mt-2 text-xs text-slate-500 font-mono">
            Manage projects and content
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@email.com"
              className={inputClass}
            />
          </div>

          {/* Password */}
          <div>
            <label className={labelClass}>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className={`${inputClass} pr-11`}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600 cursor-pointer"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-3 rounded-lg bg-green-600 py-3 text-sm font-mono text-white transition hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/20 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-xs font-mono text-slate-400">
          © 2026 Kajanthan.dev
        </p>
      </div>
    </div>
  );
};

export default Login;