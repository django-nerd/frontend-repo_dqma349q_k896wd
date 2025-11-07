import { Mosque, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-emerald-100 px-3 py-2 text-emerald-800 ring-1 ring-emerald-200">
              <Mosque className="h-5 w-5" />
              <span className="font-semibold">Madrasah Diniyah Al Fattah</span>
            </div>
            <p className="text-sm text-emerald-800/80">
              Membangun generasi Qur'ani dengan teknologi yang berkah.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-emerald-900">Kontak</p>
            <div className="mt-2 space-y-1 text-emerald-800/80">
              <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> admin@alfattah.sch.id</p>
              <p className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +62 812-3456-7890</p>
            </div>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-emerald-900">Ikuti Kami</p>
            <p className="mt-2 text-emerald-800/80">Facebook • Instagram • YouTube</p>
          </div>
        </div>
        <div className="mt-8 border-t border-emerald-100 pt-6 text-center text-xs text-emerald-700">
          © {new Date().getFullYear()} Madrasah Diniyah Al Fattah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
