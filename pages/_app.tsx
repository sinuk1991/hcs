import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>
      <title>Loading..</title>
    </Head>
      <Component {...pageProps} />
    <style jsx global>{`
      html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;user-select:none}
      #__next {
        width:100%;
        height:100%;
      }
      .root{width:100%;height:100%;overflow:auto !important}
      .hcs-app-logo{width:60px;height:auto;margin-bottom:10px;margin-left:-10px}
      .hcs-app-header{margin-bottom:20px}
      .hcs-app-title{margin:0;padding:0;}
      .hcs-app-subtitle{margin:0;padding:0}
      .hcs-app-infoicon{margin-right:5px}
      .hcs-app-infotip{margin-left:25px;}
      `}</style>
  </>
  ) //<Component {...pageProps} />
}

export default App