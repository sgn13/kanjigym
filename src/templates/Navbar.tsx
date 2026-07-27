'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navbar');
  const pathname = usePathname();

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

        {/* <li>
          <Link href="/phrases" className={`${pathname=='/phrases'? `text-[#ca15d7] font-bold`:''}`}>Phrases</Link>
        </li>

        <li>
          <Link href="/vocabulary" className={`${pathname=='/vocabulary'? `text-[#ca15d7] font-bold`:''}`}>Vocabulary</Link>
        </li>

        <li>
          <Link href="/grammar" className={`${pathname=='/grammar'? `text-[#ca15d7] font-bold`:''}`}>Grammar</Link>
        </li> */}
        <li>
          High Score:
          {localStorage.getItem('highscore') || '0'}
        </li>
      </CenteredMenu>
    </Section>
  );
};
