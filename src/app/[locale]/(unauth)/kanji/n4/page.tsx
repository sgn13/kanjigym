import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { N4Kanji } from '@/features/kanji/N4Kanji';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const IndexPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      {/* <DemoBanner /> */}
      <Navbar />

      <N4Kanji />
      <Footer />
    </>
  );
};

export default IndexPage;
