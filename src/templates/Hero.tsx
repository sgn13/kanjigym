import {
  ArrowRightIcon,
  LockClosedIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-24">
      <CenteredHero
        title={(
          <div>
            <span className="text-[#898E97]">Kanji Gym</span>
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
              {t('button_text')}
              <ArrowRightIcon className="ml-1 size-5" />
            </a>
          )}

        >
          <div>
            <div className="mx-auto mt-4 flex flex-col gap-2 sm:w-4/5 md:w-2/3 lg:w-1/2">
              {[
                {
                  id: 1,
                  level: 'N5',
                  rate: 'Begineer',
                  active: true,
                },
                {
                  id: 2,
                  level: 'N4',
                  rate: 'Hard',
                  active: false,
                },
                {
                  id: 3,
                  level: 'N3',
                  rate: 'Intermediate',
                  active: false,
                },
                {
                  id: 4,
                  level: 'N2',
                  rate: 'Advance',
                  active: false,
                },
                {
                  id: 5,
                  level: 'N1',
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
                          <Link href={`/gym?level=${list.level}`}>
                            <div className="flex items-center gap-4">
                              <div className="relative inline-block"></div>

                              <div>
                                JLPT
                                {' '}
                                {list.level}
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
                              {list.level}
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
  );
};
