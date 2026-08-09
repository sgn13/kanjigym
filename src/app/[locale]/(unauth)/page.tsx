import { Analytics } from '@vercel/analytics/next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { KanjiTabHome } from '@/templates/KanjiTabHome';
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
      <Navbar />
      <Hero />
      <KanjiTabHome />
      <Footer />
      <Analytics />
    </>
  );
};

export default IndexPage;
