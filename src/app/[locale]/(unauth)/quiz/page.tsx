import { ArrowRightIcon, LockClosedIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';
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
      <Navbar />
      <Section>
        <CenteredHero
          title={(
            <div className=" flex items-end justify-center gap-4 text-[#131D2E]">
              <Chibi />
              <span>
                {' '}
                Kanji Gym
              </span>
            </div>
          )}
          description="Perfect for beginners, JLPT learners, and daily life in Japan."
        />
        <div className="mx-auto sm:w-4/5 md:w-2/3 lg:w-2/3">
          <CTABanner
            title="Try it out?"
            description="Select your level"
            buttons={(
              <a
                className={buttonVariants({ size: 'lg' })}
                href="https://nextjs-boilerplate.com/nextjs-multi-tenant-saas-boilerplate"
              >
                <ArrowRightIcon className="ml-1 size-5" />
              </a>
            )}

          >
            <div>
              <div className="mx-auto mt-4 flex flex-col gap-2 sm:w-4/5 md:w-2/3 lg:w-1/2">
                {[
                  {
                    id: 1,
                    level: 'n5',
                    rate: 'Beginner',
                    active: true,
                  },
                  {
                    id: 2,
                    level: 'n4',
                    rate: 'Elementary',
                    active: true,
                  },
                  {
                    id: 3,
                    level: 'n3',
                    rate: 'Intermediate',
                    active: false,
                  },
                  {
                    id: 4,
                    level: 'n2',
                    rate: 'Advanced',
                    active: false,
                  },
                  {
                    id: 5,
                    level: 'n1',
                    rate: 'Native',
                    active: false,
                  },
                ]?.map((list, index) => {
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
                            <Link href={`/kanji/${list.level}`}>
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
    </>
  );
};

export default IndexPage;
