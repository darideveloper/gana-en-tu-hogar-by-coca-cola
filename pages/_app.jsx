import "@/styles/globals.sass";
import Header from "@/sections/Header";

export default function App({ Component, pageProps }) {
  return  (
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
  )
}
