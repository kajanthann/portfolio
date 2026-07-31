import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Database } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const STATS_URL = `${API_URL}/api/projects/db-stats`;

const formatBytes = (bytes) => {
  if (bytes === 0) return "0 MB";
  const mb = bytes / (1024 * 1024);
  if (mb < 1) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${mb.toFixed(2)} MB`;
};

const StorageUsage = ({ token }) => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(STATS_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to load stats");
        setStats(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchStats();
  }, [token]);

  if (error) {
    return (
      <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
        {error}
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="mb-6 rounded-2xl border border-slate-200 p-6 shadow-sm">
        <p className="text-sm font-mono text-slate-400">Loading storage stats...</p>
      </div>
    );
  }

  const usedBytes = stats.totalSize;
  const freeBytes = Math.max(stats.limitBytes - usedBytes, 0);

  const chartData = [
    { name: "Used", value: usedBytes },
    { name: "Free", value: freeBytes },
  ];

  const COLORS = ["#16a34a", "#e2e8f0"];

  const isNearLimit = parseFloat(stats.usedPercent) > 80;

  return (
    <div className="mb-6 rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-2">
        <Database size={16} className="text-green-600" />
        <p className="text-sm font-mono text-green-600">{">"} database.storage()</p>
      </div>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Chart */}
        <div className="relative h-40 w-40 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={50}
                outerRadius={70}
                startAngle={90}
                endAngle={-270}
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span
              className={`text-lg font-bold font-mono ${
                isNearLimit ? "text-red-600" : "text-slate-900"
              }`}
            >
              {stats.usedPercent}%
            </span>
            <span className="text-[10px] font-mono text-slate-400">used</span>
          </div>
        </div>

        {/* Stats breakdown */}
        <div className="grid w-full grid-cols-2 gap-4 sm:w-auto sm:grid-cols-1">
          <div>
            <p className="text-[11px] font-mono text-slate-400">Data Size</p>
            <p className="text-sm font-mono font-semibold text-slate-900">
              {formatBytes(stats.dataSize)}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-mono text-slate-400">Index Size</p>
            <p className="text-sm font-mono font-semibold text-slate-900">
              {formatBytes(stats.indexSize)}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-mono text-slate-400">Collections</p>
            <p className="text-sm font-mono font-semibold text-slate-900">
              {stats.collections}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-mono text-slate-400">Documents</p>
            <p className="text-sm font-mono font-semibold text-slate-900">
              {stats.objects}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 border-t border-slate-200 pt-3">
        <p className="text-[11px] font-mono text-slate-400">
          {formatBytes(usedBytes)} used of {formatBytes(stats.limitBytes)} limit
          {isNearLimit && (
            <span className="ml-2 text-red-500">⚠ Approaching storage limit</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default StorageUsage;