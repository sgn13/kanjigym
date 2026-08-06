import Link from 'next/link';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { kanjiData } from '@/constants/kanji';
import { FeatureCard } from '@/features/landing/FeatureCard';
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

const IndexPage = async (props: { params: { locale: string; level: string;kanji: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  const { level } = await props.params;
  const kanji = decodeURIComponent(props.params.kanji);

  const levelData = kanjiData[level as keyof typeof kanjiData] || [];

  const selectedKanji = levelData?.find(list => list.kanji === kanji);
  return (
    <>
      {/* <DemoBanner /> */}
      <Navbar />

      <div className="px-3 py-16">

        <div className="mx-auto grid max-w-screen-lg gap-8 sm:w-4/5 md:w-2/3">
          <div className="mt-1  text-2xl ">
            <span className="text-[#131D2E]">

              {selectedKanji?.kanji}
              {' '}
              Kanji Meaning, Reading & Vocabulary | JLPT
              {' '}
              <span className="capitalize">{level}</span>
              {' '}
              | KanjiGym
              {' '}
            </span>
            {' '}
            {/* <br /> */}
            {/* <div className="pt-4 text-lg text-muted-foreground">
              Learn all JLPT
              {' '}
              <span className="capitalize">{level}</span>
              {' '}
              kanji with meanings, readings, example words, and quizzes. Practice beginner Japanese kanji and prepare for the JLPT
              {' '}
              <span className="capitalize">{level}</span>
              {' '}
              exam with KanjiGym.
            </div> */}
          </div>
          <div className="cursor-pointer rounded-xl border border-border bg-card p-4">
            <div className="text-[36px] font-bold">
              {kanji}
            </div>

            <div className="py-4">
              Meaning  :
              {' '}
              {selectedKanji?.meaning || '-'}
            </div>

            <div>
              <div>

                Onyomi  :
                {' '}
                {selectedKanji?.onyomi?.join(',') || '-'}
              </div>
              <div>

                Kunyomi  :
                {' '}
                {selectedKanji?.onyomi?.join(',') || '-'}
              </div>
            </div>
            <div className="py-4">

              <div>
                Examples:
              </div>
              <div className="py-2">

                {selectedKanji?.examples?.map((exampleList, index) => {
                  return (
                    <div key={index}>
                      {exampleList?.word}
                      (
                      {exampleList?.answer}
                      )
                      {exampleList?.meaning}

                    </div>
                  );
                })}
              </div>
            </div>

            {/* <div className="my-3 w-8 border-t border-purple-400" /> */}

            {/* <div className="mt-4 text-[36px] text-lg">{props.children}</div> */}
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
    </>
  );
};

export default IndexPage;
