import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';
import { SponsorLogos } from '@/features/sponsors/SponsorLogos';

export const Sponsors = () => (
  <Section>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-3">

     <FeatureCard
               
                title={'Japanese'}
              >
                <span className='text-[#FF78DD]'>

               Phrases
                </span>
              </FeatureCard>
                <FeatureCard
               
                title={'Japanese'}
              >
                <span className='text-[#FFC32D]'>

               Vocabulary
                </span>

              </FeatureCard>
                <FeatureCard
               
                title={'Japanese'}
              >
                <span className='text-[#51DC90]'>

               Grammar
                </span>

              </FeatureCard>
              
    </div>
    {/* <SponsorLogos /> */}
  </Section>
);
