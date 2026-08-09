import {
  LockClosedIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

import { jlptLevel } from '@/constants/kanji';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';
import { Chibi } from '@/templates/Chibi';
import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Section>
        <CenteredHero
          title={(
            <div className=" flex items-end justify-center gap-4 text-[#131D2E]">
              <Chibi />
              <span>
                {' '}
                Learn Kanji
              </span>
            </div>
          )}
          description="Study kanji by JLPT level (N5–N1) with meanings, readings, vocabulary, and interactive quizzes to boost your Japanese."
        />
        <div className="mx-auto sm:w-4/5 md:w-2/3 lg:w-2/3">
          <CTABanner
            title="Let's try it out."
            description="Select your level"

          >
            <div>
              <div className="mx-auto mt-4 flex flex-col gap-2 sm:w-4/5 md:w-2/3 lg:w-1/2">
                {jlptLevel?.map((list, index) => {
                  return (
                    <div
                      key={index}
                      className={`rounded-xl border border-border p-4 transition ${
                        list.active
                          ? 'cursor-pointer bg-card hover:border-primary hover:shadow-md'
                          : 'cursor-not-allowed bg-muted/50 opacity-90'
                      }`}
                    >
                      {list.active
                        ? (
                            <Link href={`/jlpt/${list.level}/kanji`}>
                              <div className="flex items-center gap-4">
                                <div className="relative inline-block"></div>

                                <div>
                                  JLPT
                                  {' '}
                                  <span className="capitalize">
                                    {list.level}
                                  </span>
                                  {' '}
                                  (
                                  {list.rate}
                                  )
                                </div>
                              </div>
                            </Link>
                          )
                        : (
                            <div className="flex items-center gap-4">
                              <div className="relative inline-block"></div>

                              <div>
                                JLPT
                                {' '}
                                <span className="capitalize">
                                  {list.level}
                                </span>
                                {' '}
                                {' '}
                                (
                                {list.rate}
                                )
                              </div>

                              <LockClosedIcon className="ml-auto size-5" />
                            </div>
                          )}
                    </div>
                  );
                })}
              </div>
            </div>
          </CTABanner>
        </div>
      </Section>
      <Footer />

    </>

  );
};

export default IndexPage;
