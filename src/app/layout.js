import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Mulish } from 'next/font/google'

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Portfolio',
  description: `Welcome to Soumajyoti Sarkar's portfolio website.I am a skilled web developer and programmer, passionate about crafting elegant solutions.With my expertise in coding and problem- solving, I create impactful websites and applications to bring ideas to life.Explore my projects and skills in web development, UI / UX design, and more.Contact me for collaborations and opportunities.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mulish.className} max-w-[100vw] overflow-x-hidden`}>
      <body className={mulish.className}>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
