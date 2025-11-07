import { motion } from 'framer-motion';
import { Play, LogIn } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#a7f3d0_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
              Madrasah Diniyah Al Fattah
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-900">
              Belajar Islam dengan Joyful & Interaktif
            </h1>
            <p className="text-emerald-800/80 text-base leading-relaxed">
              Platform e-learning modern untuk Ustadz/Ustadzah dan Santri. Akses materi, ikut kuis, mainkan gim edukatif, dan raih lencana prestasi dalam suasana islami yang elegan.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#login-teacher"
                className="inline-flex items-center gap-2 rounded-md bg-white border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 shadow hover:bg-emerald-50"
              >
                <LogIn className="h-4 w-4" />
                Login Guru
              </a>
              <a
                href="#login-student"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md"
              >
                <Play className="h-4 w-4" />
                Login Santri
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div>
                <p className="text-2xl font-bold text-emerald-900">50+ Kelas</p>
                <p className="text-xs text-emerald-700">Tafsir, Hadis, Fiqih, Bahasa Arab</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-900">Gamified</p>
                <p className="text-xs text-emerald-700">Spin Wheel, Kuis Cepat, Leaderboard</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-900">Responsive</p>
                <p className="text-xs text-emerald-700">Nyaman di HP & Desktop</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584486398671-43cf15c2edda?q=80&w=1200&auto=format&fit=crop"
                alt="Kegiatan Madrasah"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block">
              <div className="rounded-xl border border-emerald-100 bg-white shadow-md px-4 py-3">
                <p className="text-sm font-semibold text-emerald-900">Visi</p>
                <p className="text-xs text-emerald-700">Mencetak generasi Qur’ani berakhlak mulia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
