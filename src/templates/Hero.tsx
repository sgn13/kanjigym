import { ArrowRightIcon, GitHubLogoIcon, LockClosedIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { badgeVariants } from '@/components/ui/badgeVariants';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';
import { Chibi } from './Chibi';
import Link from 'next/link';
import { CTABanner } from '@/features/landing/CTABanner';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-32">
      <CenteredHero
        // banner={(
        //   <a
        //     className={badgeVariants()}
        //     href="https://twitter.com/ixartz"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     <TwitterLogoIcon className="mr-1 size-5" />
        //     {' '}
        //     {t('follow_twitter')}
        //   </a>
        // )}
        title={<div><span className='text-[#898E97]'>Kanji Gym
        </span>
          {/* &nbsp; <Chibi className="w-4 h-4 shrink-0"/>  &nbsp; real conversations. */}
        </div>}
        description={'Perfect for beginners, JLPT learners, and daily life in Japan.'}
        buttons={(
          <>
            {/* <a
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href="https://github.com/ixartz/SaaS-Boilerplate"
            >
              <GitHubLogoIcon className="mr-2 size-5" />
              {t('secondary_button')}
            </a>

            <a
              className={buttonVariants({ size: 'lg' })}
              href="https://nextjs-boilerplate.com/nextjs-multi-tenant-saas-boilerplate"
            >
              {t('primary_button')}
              <ArrowRightIcon className="ml-1 size-5" />
            </a> */}
          </>
        )}
      />
      <div className='sm:w-4/5 md:w-2/3 lg:w-2/3 mx-auto'>

        <CTABanner
          title={'Try it out?'}
          description={'Select your level'}
          buttons={(
            <a
              className={buttonVariants({ size: 'lg' })}
              href="https://nextjs-boilerplate.com/nextjs-multi-tenant-saas-boilerplate"
            >
              {t('button_text')}
              <ArrowRightIcon className="ml-1 size-5" />
            </a>
          )}
          children={
            <div>


              <div className='mt-4 sm:w-4/5 md:w-2/3 lg:w-1/2 mx-auto flex gap-2 flex-col'>

                {[{
                  id: 1,
                  level: "N5",
                  rate: "Begineer",
                  active: true,
                },
                {
                  id: 2,
                  level: "N4",
                  rate: "Hard",
                  active: false,

                },
                {
                  id: 3,
                  level: "N3",
                  rate: "Intermediate",
                  active: false,

                },
                {
                  id: 4,
                  level: "N2",
                  rate: "Advance",
                  active: false,

                },
                {
                  id: 5,
                  level: "N1",
                  rate: "Native",
                  active: false,

                },]?.map((list, index) => {


                  return (
                    <div key={index}
                      className={`rounded-xl border border-border p-4 transition ${list.active
                          ? "bg-card cursor-pointer hover:border-primary hover:shadow-md"
                          : "bg-muted/50 opacity-90 cursor-not-allowed"
                        }`}>
                      {list.active ? (
                        <Link href={`/gym?level=${list.level}`}>
                          <div className="flex items-center gap-4">
                            <div className="relative inline-block"></div>

                            <div>
                              JLPT {list.level} ({list.rate})
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="relative inline-block"></div>

                          <div>
                            JLPT {list.level} ({list.rate})
                          </div>

                          <LockClosedIcon className="ml-auto h-5 w-5" />
                        </div>
                      )}
                    </div>
                  )
                })}


              </div>
            </div>}
        />
      </div>
    </Section>
  );
};
