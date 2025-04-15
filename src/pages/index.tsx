import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center text-center">
        <div className="bg-black/50 p-8 rounded-xl text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Plan It Trip</h1>
          <p className="text-xl md:text-2xl mb-6">Your Trusted Travel & Event Partner</p>
          <Button className="text-lg px-6 py-4 rounded-2xl">Lihat Layanan</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
        <p className="text-lg leading-relaxed max-w-4xl">
          PT. PIT Travelmate Indonesia adalah perusahaan yang bergerak di bidang jasa pariwisata, perencanaan perjalanan, penyelenggaraan acara serta penyediaan alat tulis kantor. Kami hadir sebagai mitra strategis bagi pemerintahan dan korporat dengan layanan unggulan yang fleksibel dan profesional.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Reservasi Tiket & Akomodasi",
            "Perencanaan Perjalanan & Wisata",
            "Event Organizer (Pemerintah & Korporat)",
            "Sewa Kendaraan & Pengadaan ATK",
            "Penyediaan Merchandise & Souvenir",
            "Konsultasi & Kemitraan Strategis"
          ].map((service, index) => (
            <Card key={index} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6">Portofolio Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Rapat Koordinasi Nasional – Borobudur 2024",
            "Forum Bisnis Indonesia-Tiongkok – Labuan Bajo 2023",
            "Private Tour – Korea, China, Bali",
            "Gerakan Nasional Bangga Buatan Indonesia 2023-2024",
            "Event MotoGP, WSBK, F1 PowerBoat"
          ].map((item, index) => (
            <Card key={index} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{item}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
        <form className="space-y-4 max-w-xl">
          <input type="text" placeholder="Nama" className="w-full p-3 rounded-xl text-black" required />
          <input type="email" placeholder="Email" className="w-full p-3 rounded-xl text-black" required />
          <textarea placeholder="Pesan" rows="5" className="w-full p-3 rounded-xl text-black" required></textarea>
          <Button type="submit" className="px-6 py-3 text-lg rounded-2xl">Kirim Pesan</Button>
        </form>
        <div className="mt-10 space-y-4">
          <p className="flex items-center gap-3"><Phone size={20}/> (+62) 851-2190-4187</p>
          <p className="flex items-center gap-3"><Mail size={20}/> pit.travelmateindonesia@gmail.com</p>
          <p className="flex items-center gap-3"><MapPin size={20}/> Komplek Margaasih Permai, Kab. Bandung</p>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-4">
        &copy; {new Date().getFullYear()} PT. PIT Travelmate Indonesia. All rights reserved.
      </footer>
    </main>
  );
}