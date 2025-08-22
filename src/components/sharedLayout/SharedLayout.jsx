import { usePathname } from 'next/navigation';
// import { Outlet } from 'react-router';

import Header from '@/components/header';
import Footer from '@/components/footer';
import HeadTags from '@/components/headTags';

function SharedLayout() {
  const pathname = usePathname();

  return (
    <>
      {!pathname?.includes('/case') && <Header />}
      <main>
        <HeadTags />
        {/* <Outlet /> */}
      </main>
      {!pathname?.includes('/case') && <Footer />}
    </>
  );
}

export default SharedLayout;
