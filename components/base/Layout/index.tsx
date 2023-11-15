import { Montserrat } from 'next/font/google';

import Header from '../Header';
import Footer from '../Footer';

type LayoutProps = {
  children: React.ReactNode;
}

const raleway = Montserrat({
  subsets: ["latin"], 
  weight: ["300", "400", "500",  "600", "700", "800"]
});

export default function Layout({children}:LayoutProps) {
  return (
    <main className={raleway.className}>
      <Header/>
      {children}
      <Footer/>
    </main>
  )
}
