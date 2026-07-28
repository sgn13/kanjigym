'use client';

import { ReloadIcon, StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import { useEffect, useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Modal, ModalContent } from '@/components/ui/modal';
import FlatN5Json from '@/constants/flatn5.json';

type Question = (typeof FlatN5Json)[number];

function generateOptions(
  current: Question,
  allWords: Question[],
): string[] {
  const wrongAnswers = allWords
    .filter(word => word.id !== current.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(word => word.answer);

  return [...wrongAnswers, current.answer].sort(() => Math.random() - 0.5);
}

export const GymZone = () => {
  // const a = N5Json.flatMap((item) => {
  //   const { examples, ...rest } = item;

  //   const parent = {
  //     ...rest,
  //     parent_id: null,
  //     type: "kanji",
  //   };

  //   const words = examples.map((example, index) => ({
  //     id: `${item.id}_word_${index + 1}`,
  //     parent_id: item.id,
  //     parent_kanji: item.kanji,
  //     type: "word",
  //     kanji: example.word,
  //     answer: example.answer,
  //     meaning: example.meaning,
  //     jlpt: item.jlpt,
  //     category: item.category,
  //   }));

  //   return [parent, ...words];
  // });

  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (lives <= 0) {
      setOpen(true);
    }
  }, [lives]);

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const shuffle = <T,>(array: T[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [questions, setQuestions] = useState<typeof FlatN5Json>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];

  const options = useMemo(() => {
    if (!currentQuestion) {
      return [];
    }
    return generateOptions(currentQuestion, FlatN5Json);
  }, [currentQuestion]);

  useEffect(() => {
    if (lives === 0 && score > Number(localStorage.getItem('highscore'))) {
      localStorage.setItem('highscore', score.toString());
    }
  }, [score, lives]);

  useEffect(() => {
    setQuestions(shuffle(FlatN5Json));
  }, []);

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const handleAnswer = (currentQuestion: Question, option: string) => {
    if (selectedAnswer) {
      return;
    } // Prevent multiple clicks

    setSelectedAnswer(option);

    const isCorrect = option === currentQuestion.answer;

    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      setLives(l => l - 1);
    }
  };

  return (
    <div className="px-3 py-16">

      <Modal open={open} onOpenChange={setOpen}>
        <ModalContent>
          <div className="flex flex-col items-center gap-8 text-center text-2xl font-semibold">
            <div className="text-center text-2xl font-semibold text-red-500">GAME OVER</div>
            <div className="text-center text-2xl font-semibold">
              {' '}
              Total Score :
              {score}
            </div>

            <div
              className="inline-block cursor-pointer underline"
              onClick={() => {
                setLives(3);
                setScore(0);
                setSelectedAnswer(null);
                setCurrentIndex(0);
                setOpen(false);
              }}
            >
              <ReloadIcon
                className="size-8 text-yellow-500"
                strokeWidth={3.5}
              />
            </div>
          </div>

        </ModalContent>
      </Modal>
      <div className="mx-auto mb-12 max-w-screen-md text-center">
        <div className="flex items-center justify-center gap-4">
          {[...Array(3)].map((_, index) =>
            index < lives
              ? (
                  <StarFilledIcon key={index} fill="red" color="red" />
                )
              : (
                  <StarIcon key={index} />
                ),
          )}
        </div>
        <div>
          {' '}
          Total Score :
          {score}
        </div>
        {lives <= 0
          ? (
              <div>
                <div className="text-2xl font-semibold text-red-500">GAME OVER</div>
                <div
                  className="inline-block cursor-pointer underline"
                  onClick={() => {
                    setLives(3);
                    setScore(0);
                    setSelectedAnswer(null);
                    setCurrentIndex(0);
                  }}
                >
                  <ReloadIcon
                    className="size-8 text-yellow-500"
                    strokeWidth={3.5}
                  />
                </div>
              </div>
            )
          : null}
      </div>
      <div className="mx-auto grid max-w-screen-lg gap-8 sm:w-4/5 md:w-2/3 lg:w-1/2">
        <div className="rounded-xl bg-muted bg-gradient-to-br from-blue-100 via-red-100 to-red-100 px-1 py-10 text-center">
          <div className="mx-auto w-4/5 md:w-2/3 lg:w-1/2">
            {/* {JSON.stringify(currentQuestion)} */}
            <div className="rounded-xl bg-muted bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 px-1 py-4 text-center">
              <div className="text-3xl font-bold text-primary-foreground">
                {currentQuestion?.kanji}
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              {options?.map((list, index) => {
                const isCorrect = list === currentQuestion?.answer;
                const isSelected = list === selectedAnswer;
                let bgColor = '';

                if (selectedAnswer) {
                  if (isCorrect) {
                    bgColor = 'bg-green-300 ';
                  } else if (isSelected) {
                    bgColor = 'bg-red-300 ';
                  }
                }

                return (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-xl border border-border bg-card p-4 ${bgColor}`}
                    onClick={() => {
                      if (!currentQuestion) {
                        return;
                      }
                      handleAnswer(currentQuestion, list);
                    }}
                  >
                    <div className="flex gap-4">
                      <div className="relative inline-block">
                        <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        {list}
                        {' '}
                        <br />
                      </div>
                    </div>
                  </div>
                );
              })}

              {lives <= 0
                ? null
                : (
                    <Button
                      disabled={!selectedAnswer}
                      onClick={() => {
                        setSelectedAnswer(null);
                        setCurrentIndex(i => i + 1);
                      }}
                      className="self-end p-2 focus-visible:ring-offset-0"
                      variant="default"
                      size="icon"
                      aria-label="lang-switcher"
                    >
                      Next
                    </Button>
                  )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
