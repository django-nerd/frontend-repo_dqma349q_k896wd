import { motion } from 'framer-motion';
import { GraduationCap, School, Gamepad2, Trophy, MessageSquare, BarChart3 } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

export default function Features() {
  const list = [
    { icon: GraduationCap, title: 'Materi & Video', desc: 'Upload dan akses PDF, video, atau dokumen materi pelajaran.' },
    { icon: School, title: 'Kelas Online', desc: 'Kelola kelas: Tafsir, Hadis, Fiqih, Bahasa Arab, dan lainnya.' },
    { icon: Gamepad2, title: 'Gim Edukatif', desc: 'Spin Wheel, Kuis cepat, dan permainan memori berbahasa Arab.' },
    { icon: Trophy, title: 'Leaderboard & Lencana', desc: 'Poin, progres, dan lencana untuk memotivasi santri.' },
    { icon: MessageSquare, title: 'Forum Diskusi', desc: 'Pengumuman guru dan tanya-jawab santri.' },
    { icon: BarChart3, title: 'Analitik', desc: 'Pantau performa dan hasil kuis santri.' },
  ];

  return (
    <section id="classes" className="py-16 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-emerald-900">Fitur Unggulan</h2>
          <p className="mt-2 text-emerald-800/80">Semua yang dibutuhkan guru dan santri dalam satu platform yang elegan dan sederhana.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item, idx) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md transition shadow-emerald-100/50"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={idx}
              variants={cardVariants}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-900">{item.title}</h3>
              <p className="mt-1 text-sm text-emerald-800/80 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
