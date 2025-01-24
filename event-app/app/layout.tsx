// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Poppins } from "next/font/google";
// import { ClerkProvider } from '@clerk/nextjs';
// import "./globals.css";

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-poppins',
// })

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Evently",
//   description: "an Event management app",
//   icons: {
//     icon: '/assets/images/logo.svg'
//   }
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//     <html lang="en">
//       <body
//         className={`${poppins.variable} ${poppins.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//     </ClerkProvider>
//   );
// }

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import NavItems from '@/components/shared/NavItems'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
          </SignedOut>
          <SignedIn> 
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

// import type { Metadata } from 'next'
// import { Poppins } from 'next/font/google'
// import { ClerkProvider } from '@clerk/nextjs'

// import './globals.css'

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-poppins',
// })

// export const metadata: Metadata = {
//   title: 'Evently',
//   description: 'Evently is a platform for event management.',
//   icons: {
//     icon: '/assets/images/logo.svg'
//   }
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={poppins.variable}>{children}</body>
//       </html>
//     </ClerkProvider>
//   )
// }