import Link from 'next/link';

import { Section } from '@/features/landing/Section';

import { Logo } from './Logo';

export const Footer = () => {
  return (
    <Section className="pb-8 pt-0">
      <footer className="">
        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            {/* Brand */}
            <div>
              <Link
                href="/"
                className="text-2xl font-bold"
              >
                <Logo />
              </Link>

              <p className="mt-3 text-sm ">
                Practice Kanji by JLPT level with quizzes,
                readings, and vocabulary.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="mb-4 font-semibold">
                Learn
              </h3>

              <ul className="space-y-2 text-sm ">
                <li>
                  <Link
                    href="/jlpt/n5/kanji"
                    className="hover:text-gray-700"
                  >
                    JLPT N5 Kanji
                  </Link>
                </li>

                <li>
                  <Link
                    href="/jlpt/n4/kanji"
                    className="hover:text-gray-700"
                  >
                    JLPT N4 Kanji
                  </Link>
                </li>

                <li>
                  <Link
                    href="/jlpt/n3/kanji"
                    className="hover:text-gray-700"
                  >
                    JLPT N3 Kanji
                  </Link>
                </li>

                <li>
                  <Link
                    href="/quiz"
                    className="hover:text-gray-700"
                  >
                    Kanji Quiz
                  </Link>
                </li>
              </ul>
            </div>

            {/* Other */}
            <div>
              <h3 className="mb-4 font-semibold">
                Resources
              </h3>

              <ul className="space-y-2 text-sm ">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-gray-700"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#"
                    className="hover:text-gray-700"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#"
                    className="hover:text-gray-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            Kanji Gym. All rights reserved.
          </div>

        </div>
      </footer>
    </Section>
  );
};
