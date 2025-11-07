import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, ShieldCheck } from "lucide-react";

export default function AuthGate() {
  const [role, setRole] = useState(null); // 'teacher' | 'student'

  return (
    <section id="login-teacher" className="bg-gradient-to-br from-white to-emerald-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-semibold text-emerald-900 md:text-4xl">
            Masuk ke Platform
          </h2>
          <p className="mt-2 text-emerald-700">
            Pilih peran Anda untuk melanjutkan ke dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2" id="login-student">
          <button
            onClick={() => setRole("teacher")}
            className="group rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50 to-emerald-100/60 p-6 text-left shadow-sm transition hover:shadow-md"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-amber-100 px-3 py-2 text-emerald-900 ring-1 ring-amber-200">
              <ShieldCheck className="h-5 w-5 text-amber-600" />
              <span className="font-semibold">Ustadz / Ustadzah</span>
            </div>
            <p className="text-sm text-emerald-800/90">
              Kelola materi, kelas, kuis, dan permainan edukatif.
            </p>
          </button>

          <button
            onClick={() => setRole("student")}
            className="group rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50 to-emerald-100/60 p-6 text-left shadow-sm transition hover:shadow-md"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-emerald-100 px-3 py-2 text-emerald-900 ring-1 ring-emerald-200">
              <User className="h-5 w-5 text-emerald-700" />
              <span className="font-semibold">Santri</span>
            </div>
            <p className="text-sm text-emerald-800/90">
              Akses materi, ikuti kuis, raih poin dan lencana.
            </p>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {role && (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="mt-10 overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm"
            >
              {role === "teacher" ? <TeacherPreview /> : <StudentPreview />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between border-t border-emerald-100 px-6 py-4 text-sm">
      <span className="text-emerald-800/80">{label}</span>
      <span className="font-medium text-emerald-900">{value}</span>
    </div>
  );
}

function TeacherPreview() {
  return (
    <div>
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4 text-white">
        <p className="text-sm font-semibold">Pratinjau Dashboard Ustadz/Ustadzah</p>
      </div>
      <Row label="Aksi Cepat" value="Upload Materi • Buat Kelas • Buat Kuis" />
      <Row label="Permainan" value="Roda Putar • Kuis Cepat • Hafalan" />
      <Row label="Analitik" value="Nilai Kuis • Kehadiran • Progres Santri" />
    </div>
  );
}

function StudentPreview() {
  return (
    <div>
      <div className="bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-4 text-emerald-950">
        <p className="text-sm font-semibold">Pratinjau Dashboard Santri</p>
      </div>
      <Row label="Belajar" value="Materi • Video • Tugas" />
      <Row label="Kompetisi" value="Leaderboard • Poin • Lencana" />
      <Row label="Interaksi" value="Kuis • Roda Putar • Tanya Ustadz" />
    </div>
  );
}
