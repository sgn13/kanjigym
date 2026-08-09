import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';

import { jlptLevel, kanjiData } from '@/constants/kanji';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

export const KanjiTabHome = () => {
  return (

    <Section>

      <div className="flex w-full justify-center py-8">
        <Tabs.Root
          defaultValue="n5"
          className="w-full "
        >
          <div className="pb-8 text-center text-5xl font-bold tracking-tight ">
            Kanji
          </div>
          <Tabs.List className="flex justify-center gap-2 rounded-lg  p-1">
            {
              jlptLevel?.map((list) => {
                return (
                  <Tabs.Trigger
                    key={list.id}
                    value={list.level}
                    className="rounded-md px-5 py-2 text-sm font-medium capitalize text-gray-600 transition hover:bg-white data-[state=active]:bg-purple-500 data-[state=active]:text-white data-[state=active]:shadow"
                  >
                    {list.level}
                  </Tabs.Trigger>
                );
              },
              )
            }
          </Tabs.List>

          <div className="mt-6 text-center">

            {
              jlptLevel?.map((list) => {
                const levelData = kanjiData[list.level as keyof typeof kanjiData] || [];

                return (
                  <Tabs.Content value={list.level} key={list.id}>
                    {['n2', 'n1']?.includes(list.level)
                      ? (
                          <p className="text-sm text-gray-600">
                            Coming Soon...
                          </p>
                        )
                      : (
                          <div className="pt-4 text-lg text-muted-foreground">
                            <div className="grid grid-cols-4  gap-8 py-8 text-left md:grid-cols-6 lg:grid-cols-8">
                              {levelData?.slice(0, 16)?.map((levelList) => {
                                return (
                                  <Link key={levelList.id} href={`/jlpt/${list.level}/kanji/${levelList.kanji}`}>
                                    <FeatureCard title="" icon={levelList.kanji}>
                                    </FeatureCard>
                                  </Link>
                                );
                              })}

                            </div>
                            <Link href={`/jlpt/${list.level}/kanji`}>

                              See more
                            </Link>
                          </div>
                        )}
                  </Tabs.Content>
                );
              },
              )
            }
          </div>

        </Tabs.Root>
      </div>
    </Section>

  );
};
