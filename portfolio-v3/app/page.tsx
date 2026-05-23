import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/navbar/Navbar";
import Main from "@/components/main/Main";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />
      <Header />
      <Main />
    </>
  );
}
