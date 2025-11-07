import { motion } from 'framer-motion';
import { BookOpen, Users } from 'lucide-react';

export default function NavBar() {
  const navItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Kelas', href: '#classes' },
    { label: 'Kuis', href: '#quizzes' },
    { label: 'Forum', href: '#forum' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-emerald-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-emerald-800">Madrasah Diniyah</p>
              <p className="text-xs text-emerald-600 font-medium">Al Fattah</p>
            </div>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-emerald-900/80 hover:text-emerald-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#login-teacher"
              className="hidden sm:inline-flex items-center gap-2 rounded-md border border-emerald-200 px-3 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-50 transition"
            >
              <Users className="h-4 w-4" />
              Guru
            </a>
            <a
              href="#login-student"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-600 to-emerald-700 px-3 py-2 text-sm font-semibold text-white shadow hover:shadow-md active:scale-[0.99]"
            >
              Santri
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
