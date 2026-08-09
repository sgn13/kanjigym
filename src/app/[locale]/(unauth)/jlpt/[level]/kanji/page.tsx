import Link from 'next/link';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { kanjiData } from '@/constants/kanji';
import { FeatureCard } from '@/features/landing/FeatureCard';
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

const IndexPage = async (props: { params: { locale: string; level: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  const { level } = await props.params;
  const levelData = kanjiData[level as keyof typeof kanjiData] || [];

  return (
    <>
      {/* <DemoBanner /> */}
      <Navbar />

      <div className="px-3 py-16">

        <div className="mx-auto grid max-w-screen-lg gap-8 sm:w-4/5 md:w-2/3">
          <div className="mt-1  text-4xl ">
            <span className="font-bold text-[#131D2E]">
              {' '}
              JLPT
              {' '}
              <span className="capitalize">{level}</span>
              {' '}
              Kanji List | Learn Japanese Kanji | KanjiGym
            </span>
            {' '}
            <br />
            <div className="pt-4 text-lg text-muted-foreground">
              Learn all JLPT
              {' '}
              <span className="capitalize">{level}</span>
              {' '}
              kanji with meanings, readings, example words, and quizzes. Practice beginner Japanese kanji and prepare for the JLPT
              {' '}
              <span className="capitalize">{level}</span>
              {' '}
              exam with KanjiGym.
            </div>
          </div>

          <div className="pt-4 text-lg text-muted-foreground">
            <div className="grid grid-cols-4 gap-8 text-left md:grid-cols-6 lg:grid-cols-8">
              {levelData?.map((list) => {
                return (
                  <Link key={list.id} href={`/jlpt/${level}/kanji/${list.kanji}`}>
                    <FeatureCard title="" icon={list.kanji}>
                      <span className="">

                      </span>
                    </FeatureCard>
                  </Link>
                );
              })}

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
