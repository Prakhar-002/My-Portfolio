/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/

// fonts
import { Sora } from '@next/font/google'

// font setting
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800',]
});

// Components
import Nav from '../components/Nav.js'
import Header from '../components/Header.js'
import TopLeftImg from '../components/TopLeftImg.js'


const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
