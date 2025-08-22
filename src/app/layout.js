'use client';

import { Provider } from 'react-redux';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

import store from '@/redux/store';

import Header from '@/components/header';
import Footer from '@/components/footer';
import YandexMetrika from '@/components/yandexMetrika';

import App from './App';

import '@/css/reset.css';
import '@/css/variables.css';
import '@/css/helveticaNeueCyr.css';
import '@/css/fa.css';
import '@/css/index.css';
import '@/css/buttons.css';
import '@/css/ymaps.css';
import '@/css/faStyles.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/arrow-up.svg" type="image/svg+xml" />
      </head>
      <body>
        <Provider store={store}>
          <App />

          {!pathname?.includes('/case') && <Header />}

          <main>{children}</main>

          {!pathname?.includes('/case') && <Footer />}
        </Provider>

        <YandexMetrika />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
