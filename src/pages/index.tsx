import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const ColorPicker = dynamic(() => import("@/components/ColorPicker"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-16 flex justify-center items-start min-h-screen px-4">
        <ColorPicker />
      </main>
      <Footer />
    </div>
  );
}
