import { motion } from 'framer-motion';
import { Crown, LogIn } from 'lucide-react';

export default function CTA() {
  return (
    <section id="quizzes" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg">
          <div className="absolute inset-0 opacity-25" style={{backgroundImage:'radial-gradient(white 1px, transparent 1px)', backgroundSize:'16px 16px'}} />

          <div className="relative grid gap-8 p-8 lg:grid-cols-2 lg:p-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                <Crown className="h-4 w-4" /> Gamifikasi Islami
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">Ikut Kuis & Dapatkan Lencana Prestasi</h3>
              <p className="text-white/90 text-sm md:text-base">Kumpulkan poin, naik peringkat di leaderboard, dan raih lencana untuk setiap pencapaian. Belajar jadi lebih seru dan bermakna.</p>

              <div className="flex gap-3 pt-2">
                <a href="#login-student" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow hover:shadow-md">
                  <LogIn className="h-4 w-4" /> Masuk Santri
                </a>
                <a href="#login-teacher" className="inline-flex items-center gap-2 rounded-md bg-emerald-900/30 px-4 py-2 text-sm font-semibold text-white border border-white/20 hover:bg-emerald-900/40">
                  <LogIn className="h-4 w-4" /> Masuk Guru
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="">
              <div className="grid grid-cols-3 gap-3">
                {["Tafsir","Hadis","Fiqih","Nahwu","Sharaf","Akhlaq","Sirah","Tajwid","Balaghah"].map((t) => (
                  <div key={t} className="rounded-xl bg-white/10 p-4 text-center border border-white/15 shadow">
                    <p className="text-sm font-semibold">{t}</p>
                    <p className="text-xs text-white/80">Materi</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
