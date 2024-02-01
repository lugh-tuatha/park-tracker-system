import React from 'react'

import { ThemeProvider } from "@/components/theme-provider"

// components
import Header from './_components/header';
import Footer from './_components/footer';

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header/>
            <main className='container py-4'>
                {children}
            </main>
        <Footer />
    </ThemeProvider>
  )
}

export default Layout