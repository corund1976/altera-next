import { usePathname } from 'next/navigation';

import tags from './tags';

const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

function HeadTags() {
  const pathname = usePathname();

  return (
    NODE_ENV === 'production' && (
      <>
        <title>{tags[pathname]?.title || tags['/'].title}</title>
        <meta
          name="description"
          content={tags[pathname]?.description || tags['/'].description}
        />
        <meta
          name="keywords"
          content={tags[pathname]?.keywords || tags['/'].keywords}
        />
        <link rel="canonical" href={`${APP_URL}${pathname}`} />
      </>
    )
  );
}

export default HeadTags;
