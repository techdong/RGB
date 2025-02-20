import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorPicker from "@/components/ColorPicker";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex justify-center items-center min-h-screen">
        <ColorPicker />
      </main>
      <Footer />
    </div>
  );
}
