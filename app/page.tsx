import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 pb-20 pt-10 md:flex-row md:items-center md:justify-between md:px-6 md:pt-16">
        <div className="space-y-6 text-center md:max-w-xl md:text-left">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            <span className="block text-slate-900">Usada</span>
            <span className="block text-green-600">Bali</span>
          </h1>
          <p className="text-sm text-slate-600 md:text-base">
            Sistem identifikasi tanaman Usada Bali yang membantu Anda mengenali
            tanaman herbal tradisional berdasarkan citra daun.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Link href="/identifikasi">
              <Button>Mulai Identifikasi</Button>
            </Link>
            <Link href="/tentang">
              <Button variant="outline">Pelajari Tentang Usada Bali</Button>
            </Link>
          </div>
        </div>

        <div className="relative mt-6 h-56 w-full max-w-md md:mt-0 md:h-72">
          {/* Placeholder daun: ganti dengan asset sendiri */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-100 via-green-50 to-white shadow-lg" />
          <div className="relative flex h-full items-center justify-center">
            <Image
              src="https://images.pexels.com/photos/1498929/pexels-photo-1498929.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Daun herbal"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
