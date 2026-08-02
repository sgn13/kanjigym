import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { FeatureCard } from '@/features/landing/FeatureCard';
import { Chibi } from '@/templates/Chibi';
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

      <div className="px-3 py-16">

        <div className="mx-auto grid max-w-screen-lg gap-8 sm:w-4/5 md:w-2/3">
          <div className="mt-1 text-center text-5xl ">
            <div className=" flex items-end justify-center gap-4 text-[#131D2E]">
              <Chibi />
              <span>
                {' '}
                About Kanji Gym
              </span>
            </div>
            {' '}
            <br />
            <div className=" text-lg text-muted-foreground">
              Kanji Gym is a fun and interactive platform designed to help
              learners improve their Japanese vocabulary, kanji, and reading
              skills through daily practice.
              <br />
              Learning Japanese can feel difficult, especially when trying to
              remember hundreds of kanji and words.
              {' '}
              <br />
              {' '}
              We built Japanese
              Gym to make practice simple, engaging, and consistent — like
              going to a gym, but for your Japanese skills.
            </div>
          </div>

          <div className="mt-1 text-center text-5xl ">
            <span className="text-[#131D2E]"> Our Mission</span>
            {' '}
            <br />
            <div className="pt-4 text-lg text-muted-foreground">
              Our mission is to help Japanese learners build strong language
              foundations through small daily challenges. Instead of
              memorizing lists of words, Kanji Gym helps you actively
              practice by answering quizzes, reviewing kanji, and improving
              your recognition speed. Consistency creates progress. A few
              minutes of practice every day can make a big difference.
            </div>
          </div>

          <div className="mt-1 text-center text-5xl ">
            <span className="text-[#131D2E]">
              {' '}
              What You Can Practice
            </span>
            {' '}
            <br />
            <div className="pt-4 text-lg text-muted-foreground">
              <div className="grid grid-cols-1 gap-x-16 gap-y-8 text-left md:grid-cols-3">
                <FeatureCard title="Kanji Training">
                  <span className="">
                    Practice Japanese kanji with quizzes designed for
                    different JLPT levels.
                  </span>
                </FeatureCard>
                <FeatureCard title="Vocabulary Building">
                  <span className="">
                    Learn and review essential Japanese words through
                    interactive exercises.
                  </span>
                </FeatureCard>
                <FeatureCard title=" JLPT Preparation">
                  <span className="">
                    Prepare for JLPT levels such as N5, N4, N3, and beyond
                    with focused practice.
                  </span>
                </FeatureCard>
                <FeatureCard title=" Daily Challenges">
                  <span className="">
                    Keep your learning habit alive with short and engaging
                    practice sessions.
                  </span>
                </FeatureCard>
              </div>
            </div>
          </div>

          <div className="mt-1 text-center text-5xl ">
            <span className="text-[#131D2E]">
              {' '}
              Why "Kanji Gym"?
            </span>
            {' '}
            <br />
            <div className="pt-4 text-lg text-muted-foreground">
              Just like physical training, language learning requires regular
              practice. You don't become fluent by studying once a month. You
              improve by showing up every day, practicing, and building your
              skills step by step. Kanji Gym is your training space for
              becoming stronger in Japanese.
            </div>
          </div>

          <div className="mt-1 text-center text-5xl ">
            <span className="text-[#131D2E]">
              {' '}
              Built for Japanese Learners
            </span>
            {' '}
            <br />
            <div className="pt-4 text-lg text-muted-foreground">
              Whether you are: A beginner learning your first kanji Preparing
              for the JLPT exam Living in Japan and improving your daily
              Japanese Looking for a simple way to practice Kanji Gym is
              here to support your learning journey.
            </div>
          </div>

          <div className="mt-1 text-center text-5xl ">
            <span className="text-[#131D2E]">
              {' '}
              Keep Training. Keep Improving.
            </span>
            {' '}
            <br />
            <div className="pt-4 text-lg text-muted-foreground">
              Start your Japanese training today and make progress one word,
              one kanji, and one quiz at a time.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
