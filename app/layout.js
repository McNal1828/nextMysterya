import './globals.css';
import localFont from 'next/font/local';
import { Nanum_Gothic } from 'next/font/google';
import { StoreProviders } from '@/util/mysterya/provider';
import { McSessionProviders } from '@/util/prisma/provider';

export const metadata = {
  title: 'McNal 제작소',
  description: 'McNal이 필요한거 만들고 서비스하는곳',
};
const nanum_Gothic = Nanum_Gothic({ subsets: ['latin'], weight: ['400'] });

// const youth = localFont({ src: '../public/fonts/Youth.ttf' });
export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <head>
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body className={nanum_Gothic.className}>
        <McSessionProviders>
          <StoreProviders>{children}</StoreProviders>
        </McSessionProviders>
      </body>
      {/* <body>{children}</body> */}
    </html>
  );
}
