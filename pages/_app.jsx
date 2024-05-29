import "@/styles/globals.sass"
import Header from "@/sections/header"
import Footer from "@/sections/footer"

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
