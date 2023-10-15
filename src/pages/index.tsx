import { Inter } from "next/font/google";
import Header from "../components/Header";
import Content from "../components/Content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-white ${inter.className}`}
    >
      <Header />
      <Content />
    </main>
  );
}
