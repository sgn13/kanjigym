import { EnterIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { CenteredHero } from '@/features/landing/CenteredHero';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';

import { Chibi } from './Chibi';

export const Hero = () => {
  return (
    <Section className="py-16">
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
      <div className="mx-auto ">
        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-2">
          {[
            {
              id: 1,
              type: 'quiz',
              title: 'Gym',
              description: 'Practice kanji at your JLPT level',
              link: '/quiz',
              active: true,
            },
            {
              id: 2,
              type: 'kanji',
              title: 'Kanji',
              description: 'Learn JLPT kanji by level',
              link: '/kanji',
              active: true,
            },

          ]?.map((list, index) => {
            return (
              <Link
                key={index}
                href={list.link}
              >
                <div>
                  <CTABanner
                    title={`${list.title}`}
                    description={`${list.description}`}

                  >
                    <div className="mx-auto mt-4 flex flex-col items-center gap-2 text-center sm:w-4/5 md:w-2/3 lg:w-1/2">
                      <EnterIcon className="text-white " width="24px" height="24px" />

                    </div>

                  </CTABanner>

                </div>
              </Link>

            );
          })}

        </div>
      </div>

    </Section>
  );
};
