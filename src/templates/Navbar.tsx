'use client';

import { EnterIcon } from '@radix-ui/react-icons';
import type { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';
import { createClient } from '@/libs/supabase/client';

import { Logo } from './Logo';

const supabase = createClient();

export const Navbar = () => {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUserData(user);
    }
    getUser();
  }, []);

  // const [highScore, setHighScore] = useState('0');

  // useEffect(() => {
  //   setHighScore(localStorage.getItem('highscore') || '0');
  // }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Logout failed:', error.message);
      return;
    }

    window.location.href = '/login';
  };

  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={(
          <>
            {/* PRO: Dark mode toggle button */}
            <li data-fade>
              <LocaleSwitcher />
            </li>
            <li className="ml-1 mr-2.5" data-fade>
              <Link href="/sign-in">{t('sign_in')}</Link>
            </li>
            <li>
              <Link className={buttonVariants()} href="/sign-up">
                {t('sign_up')}
              </Link>
            </li>
          </>
        )}
      >
        <li>
          <Link
            href="/"
            className={`${pathname === '/' ? `font-bold text-[#ca15d7]` : ''}`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className={`${pathname === '/about' ? `font-bold text-[#ca15d7]` : ''}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/kanji"
            className={`${pathname === '/kanji' ? `font-bold text-[#ca15d7]` : ''}`}
          >
            Kanji
          </Link>
        </li>
        <li>
          <Link
            href="/quiz"
            className={`${pathname === '/quiz' ? `font-bold text-[#ca15d7]` : ''}`}
          >
            Gym
          </Link>
        </li>
        {
          userData
            ? (
                <li>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full text-left"
                  >

                    <EnterIcon width="20px" height="20px" />

                  </button>
                </li>
              )
            : (
                <li>
                  <Link
                    href="/login"
                    className={`${pathname === '/quiz' ? `font-bold text-[#ca15d7]` : ''}`}
                  >
                    Login/Register
                  </Link>
                </li>
              )
        }

        {/* <li>
          <Link href="/phrases" className={`${pathname=='/phrases'? `text-[#ca15d7] font-bold`:''}`}>Phrases</Link>
        </li>

        <li>
          <Link href="/vocabulary" className={`${pathname=='/vocabulary'? `text-[#ca15d7] font-bold`:''}`}>Vocabulary</Link>
        </li>

        <li>
          <Link href="/grammar" className={`${pathname=='/grammar'? `text-[#ca15d7] font-bold`:''}`}>Grammar</Link>
        </li> */}
        {/* <li>
          High Score:
          {highScore || '0'}
        </li> */}
      </CenteredMenu>
    </Section>
  );
};
