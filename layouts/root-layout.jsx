import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from "@/sections/header"
import Footer from "@/sections/footer"
import { metaData } from "@/libs/meta"


export default function RootLayout({ children, pageSubTitle = "", pageDescription = metaData.description, pageKeywords = metaData.keywords, pageAuthor = metaData.author}) {
  return (
    <>
      <Head>
        {
            pageSubTitle
            ?
            <title>{pageSubTitle} | {metaData.title}</title>
            :
            <title>{metaData.title}</title>
          }
          <meta name="description" content={pageDescription} />
          <meta name="author" content={pageAuthor} />
          <meta name="keywords" content={pageKeywords} />
      </Head>
      <Header />
      {children}
      <Footer />
      </>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageSubTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  pageKeywords: PropTypes.string,
  pageAuthor: PropTypes.string,
}