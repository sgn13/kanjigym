import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Navbar } from '@/templates/Navbar';
import { GymZone } from '@/features/gym/GymZone';

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

    <GymZone/>
    </>
  );
};

export default IndexPage;
