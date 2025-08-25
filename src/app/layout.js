import PropTypes from 'prop-types';

import AppInit from '@/components/appInit';
import Header from '@/components/header';
import Footer from '@/components/footer';
import YandexMetrika from '@/components/yandexMetrika';

import Providers from './providers';

import '@/css/reset.css';
import '@/css/variables.css';
import '@/css/helveticaNeueCyr.css';
import '@/css/fa.css';
import '@/css/index.css';
import '@/css/buttons.css';
import '@/css/ymaps.css';
import '@/css/faStyles.css';

export default function RootLayout({ children }) {

  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/arrow-up.svg" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AppInit />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>

        <YandexMetrika />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
