import  Head  from 'next/head'
import { FC } from 'react'
import { Navbar } from '../ui'



const origin = (typeof window==='undefined')
                        ? ""
                        : window.location.origin



export const Layout :FC<{title?:string}>= ({children,title}) => {


  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content='Nahuel Perugi' />
            <meta name='description' content='Pokemon deck' />
            <meta name='keywords' content='XXXX, pokemon' />

            <meta property="og:title" content={`Info sobre el Pokemon ${ title } `}/>
            <meta property="og:description" content={`esta pagina relata la informacion de  ${ title }`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />

                
        </Head>
        <Navbar/>
    <main style={{
        padding:'10px 20px'
    }}>
        {children}
    </main>
    </>
  )
}
