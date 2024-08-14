import Head from "next/head";

export type MetaDataSliceProps = {
  title?: string;
  ogTitle?: string;
  ogDescription?: string;
};

export const MetaDataSlice = ({
  title,
  ogTitle,
  ogDescription,
}: MetaDataSliceProps) => {
  const currentOgTitle = ogTitle ?? title;

  return (
    <Head>
      {title && <title>{title}</title>}
      {currentOgTitle && <meta property="og:title" content={currentOgTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
    </Head>
  );
};
