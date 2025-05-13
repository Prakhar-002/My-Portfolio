/*
 ? https://github.com/Prakhar-002
 ? @copyright Prakhar-002
*/

import '../styles/globals.css';

// Components
import Layout from '../components/Layout.js';
import Transition from '../components/Transition.js';

// Router
import { useRouter } from 'next/router.js';

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Next.js Head
import Head from 'next/head';

const routeMeta = {
  '/': {
    title: 'Home | Prakhar Katiyar',
    description: 'Welcome to the portfolio of Prakhar Katiyar.',
  },
  '/about': {
    title: 'About | Prakhar Katiyar',
    description: 'Learn more about Prakhar Katiyar, a passionate developer.',
  },
  '/contact': {
    title: 'Contact | Prakhar Katiyar',
    description: 'Get in touch with Prakhar Katiyar.',
  },
  '/services': {
    title: 'Services | Prakhar Katiyar',
    description: 'Explore the services offered by Prakhar Katiyar.',
  },
  '/testimonials': {
    title: 'Testimonials | Prakhar Katiyar',
    description: 'Hear what clients say about Prakhar Katiyar.',
  },
  '/work': {
    title: 'Work | Prakhar Katiyar',
    description: 'Showcase of past work and projects.',
  },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = useRouter();
  const meta = routeMeta[pathname] || {
    title: 'Prakhar Katiyar',
    description: 'Portfolio and work of Prakhar Katiyar.',
    icon: '/avatar.png',
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href={'/avatar.png'} />
      </Head>

      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
