import { EnterIcon } from '@radix-ui/react-icons';
import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';

import N4Json from '@/constants/n4.json';
import N5Json from '@/constants/n5.json';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { CTABanner } from '@/features/landing/CTABanner';
import { FeatureCard } from '@/features/landing/FeatureCard';
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
        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-6 lg:grid-cols-2">
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

      <div className="flex w-full justify-center py-32">
        <Tabs.Root
          defaultValue="n5"
          className="w-full "
        >
          <div className="pb-8 text-center text-5xl font-bold tracking-tight ">
            Kanji
          </div>
          <Tabs.List className="flex justify-center gap-2 rounded-lg  p-1">
            <Tabs.Trigger
              value="n5"
              className="rounded-md px-5 py-2 text-sm font-medium text-gray-600 transition hover:bg-white data-[state=active]:bg-white data-[state=active]:text-[#131D2E] data-[state=active]:shadow"
            >
              N5
            </Tabs.Trigger>

            <Tabs.Trigger
              value="n4"
              className="rounded-md px-5 py-2 text-sm font-medium text-gray-600 transition hover:bg-white data-[state=active]:bg-white data-[state=active]:text-[#131D2E] data-[state=active]:shadow"
            >
              N4
            </Tabs.Trigger>

            <Tabs.Trigger
              value="n3"
              className="rounded-md px-5 py-2 text-sm font-medium text-gray-600 transition hover:bg-white data-[state=active]:bg-white data-[state=active]:text-[#131D2E] data-[state=active]:shadow"
            >
              N3
            </Tabs.Trigger>
            <Tabs.Trigger
              value="n2"
              className="rounded-md px-5 py-2 text-sm font-medium text-gray-600 transition hover:bg-white data-[state=active]:bg-white data-[state=active]:text-[#131D2E] data-[state=active]:shadow"
            >
              N2
            </Tabs.Trigger>
            <Tabs.Trigger
              value="n1"
              className="rounded-md px-5 py-2 text-sm font-medium text-gray-600 transition hover:bg-white data-[state=active]:bg-white data-[state=active]:text-[#131D2E] data-[state=active]:shadow"
            >
              N1
            </Tabs.Trigger>
          </Tabs.List>

          <div className="mt-6 text-center">
            <Tabs.Content value="n5">
              <div className="pt-4 text-lg text-muted-foreground">
                <div className="grid grid-cols-4  gap-8 py-8 text-left md:grid-cols-6 lg:grid-cols-8">
                  {N5Json?.slice(0, 16)?.map((list) => {
                    return (
                      <Link key={list.id} href={`/jlpt/n5/kanji/${list.kanji}`}>
                        <FeatureCard title="" icon={list.kanji}>
                          <span className="">

                          </span>
                        </FeatureCard>
                      </Link>
                    );
                  })}

                </div>
                <Link href="/jlpt/n5/kanji">

                  See more
                </Link>
              </div>
            </Tabs.Content>

            <Tabs.Content value="n4">
              <p className="text-sm text-gray-600">
                <div className="pt-4 text-lg text-muted-foreground">
                  <div className="grid grid-cols-4  gap-8 py-8 text-left md:grid-cols-6 lg:grid-cols-8">
                    {N4Json?.slice(0, 16)?.map((list) => {
                      return (
                        <Link key={list.id} href={`/jlpt/n4/kanji/${list.kanji}`}>
                          <FeatureCard title="" icon={list.kanji}>
                            <span className="">

                            </span>
                          </FeatureCard>
                        </Link>
                      );
                    })}

                  </div>
                  <Link href="/jlpt/n4/kanji">
                    See more
                  </Link>
                </div>
              </p>
            </Tabs.Content>

            <Tabs.Content value="n3">
              <p className="text-sm text-gray-600">
                Coming Soon...
              </p>
            </Tabs.Content>
            <Tabs.Content value="n2">
              <p className="text-sm text-gray-600">
                Coming Soon...
              </p>
            </Tabs.Content>
            <Tabs.Content value="n1">
              <p className="text-sm text-gray-600">
                Coming Soon...
              </p>
            </Tabs.Content>
          </div>

        </Tabs.Root>
      </div>
    </Section>
  );
};
