import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import { motion } from 'framer-motion';
import { Mosque, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <CTA />

        <section id="forum" className="py-16 bg-emerald-50/40 border-t border-emerald-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-2xl md:text-3xl font-extrabold text-emerald-900">Forum & Pengumuman</h3>
                <p className="text-emerald-800/80">Tempat guru menyampaikan pengumuman dan santri berdiskusi dengan sopan santun. Didesain untuk memudahkan komunikasi dan kebersamaan.</p>
                <div className="rounded-xl border border-emerald-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
                      <Mosque className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Pengumuman Madrasah</p>
                      <p className="text-xs text-emerald-700">Kegiatan istighotsah akbar pekan depan. Mohon kehadirannya.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.form
                id="login-teacher"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                onSubmit={(e) => e.preventDefault()}
                className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
              >
                <h4 className="text-lg font-semibold">Masuk sebagai Guru</h4>
                <div className="mt-4 grid gap-3">
                  <input type="email" placeholder="Email" className="w-full rounded-md border border-emerald-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                  <input type="password" placeholder="Kata sandi" className="w-full rounded-md border border-emerald-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                  <button className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md">Masuk Guru</button>
                </div>
                <p className="mt-3 text-xs text-emerald-700">Belum punya akun? Hubungi admin.</p>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-700">© {new Date().getFullYear()} Madrasah Diniyah Al Fattah. Semua hak cipta dilindungi.</p>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 hover:text-emerald-900">
            <Mail className="h-4 w-4" /> Kontak Kami
          </a>
        </div>
      </footer>
    </div>
  );
}
