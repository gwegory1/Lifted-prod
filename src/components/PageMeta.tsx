const SITE = "https://lifted.hu";

// React 19 hoists <title>/<meta>/<link> into <head>, so no helmet library is needed.
const PageMeta = ({ title, description, path }: { title: string; description: string; path: string }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={SITE + path} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={SITE + path} />
  </>
);

export default PageMeta;
