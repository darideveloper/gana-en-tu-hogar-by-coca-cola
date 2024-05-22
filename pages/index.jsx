import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <form action="">
        <input type="text" name="name" id="name" placeholder="nombre" />
        <input type="email" name="email" id="email" placeholder="email" />
        <input type="tel" name="phone" id="phone" placeholder="teléfono" />
      </form>
    </main>
  )
}
