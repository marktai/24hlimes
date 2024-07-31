import {
  faFaceSmileBeam,
  faHourglassHalf,
} from '@fortawesome/free-regular-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

import Header from '@/components/Header';
import ButtonLink from '@/components/links/ButtonLink';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <main className='bg-background'>
      <Head>
        <title>Realistic Code</title>
      </Head>
      <Header />
      <section>
        <div className='layout relative flex flex-col sm:pt-6 lg:pt-12 w-full max-w-full'>
          <div className='border-b-2 grid md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-16 pt-5 md:pt-20 py-8 sm:py-20 px-14 md:px-40'>
            <div className='items-center flex'>
              <div>
                <div className='w-full sm:pb-8'>
                  <text className='font-bold text-4xl sm:text-6xl	'>
                    Hire quality talent efficiently
                  </text>
                </div>

                <div>
                  <text>
                    Screen for the best candidates with engaging, flexible
                    questions to differentiate between excellent and simply good
                    candidates
                  </text>
                </div>
              </div>
            </div>
            <div className='h-96 w-full bg-blue-600'></div>
          </div>
          <div className='border-b-2 py-8 sm:py-20 px-14 md:px-40'>
            <div className='w-full text-center px-8 pb-4 sm:pb-8'>
              <text className='font-bold text-2xl sm:text-3xl'>
                Why use Realistic Code?
              </text>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-6'>
              <div className='sm:order-1'>
                <div className='w-full flex justify-center sm:justify-normal'>
                  <FontAwesomeIcon
                    icon={faHourglassHalf}
                    className='text-primary h-8 sm:h-12'
                  />
                </div>
                <div className='mt-4 sm:mb-2 w-full flex justify-center sm:justify-normal'>
                  <text className='font-bold text-lg sm:text-xl'>
                    Save your team time
                  </text>
                </div>
              </div>
              <div className='sm:order-4'>
                <div className='mb-4'>
                  <text>Need </text>
                  <text className='font-bold'>fewer onsites</text>
                  <text>
                    {' '}
                    because of high quality, broad signal to differentiate{' '}
                  </text>
                  <text className='font-bold'>excellent</text> from{' '}
                  <text className='font-bold'>good</text>
                </div>
              </div>
              <div className='sm:order-2'>
                <div className='w-full flex justify-center sm:justify-normal'>
                  <FontAwesomeIcon
                    icon={faFaceSmileBeam}
                    className='text-primary h-8 sm:h-12'
                  />
                </div>
                <div className='mt-4 sm:mb-2 w-full flex justify-center sm:justify-normal'>
                  <text className='font-bold text-lg sm:text-xl'>
                    Engage candidates
                  </text>
                </div>
              </div>
              <div className='sm:order-5'>
                <div className='mb-4'>
                  <text>Make candidates </text>
                  <text className='font-bold'>excited</text>
                  <text> about your company via your interview process</text>
                </div>
              </div>
              <div className='sm:order-3'>
                <div className='w-full flex justify-center sm:justify-normal'>
                  <FontAwesomeIcon
                    icon={faRobot}
                    className='text-primary h-8 sm:h-12'
                  />
                </div>
                <div className='mt-4 sm:mb-2 w-full flex justify-center sm:justify-normal'>
                  <text className='font-bold text-lg sm:text-xl'>
                    Future proof your process
                  </text>
                </div>
              </div>
              <div className='sm:order-6'>
                <div className='mb-4'>
                  <text className='font-bold'>AI proof</text>
                  <text>
                    {' '}
                    your questions with discussion followups that require deep
                    understanding
                  </text>
                </div>
              </div>
            </div>
            <div className='sm:flex items-center justify-center w-full'>
              <div className='flex w-full sm:w-auto items-center justify-center'>
                <ButtonLink
                  className='sm:mr-4 mb-4 sm:mb-0'
                  href='https://schedule.marktai.com'
                  variant='accent'
                >
                  <text className='font-semibold'>Schedule demo</text>
                </ButtonLink>
              </div>
              <div className='flex w-full sm:w-auto items-center justify-center'>
                <ButtonLink
                  href='https://www.marktai.com/#contact'
                  variant='light'
                >
                  <text className='font-semibold'>Contact us</text>
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-16  border-b-2 py-8 sm:py-20 px-14 md:px-40'>
            <div className='h-96 w-full bg-orange-600'></div>
            <div className='items-center flex'>
              <div>
                <div className='w-full'>
                  <text className='font-bold text-xl'>Product</text>
                </div>
                <div className='w-full'>
                  <text className='font-bold text-2xl sm:text-4xl'>
                    We'll do the work for you
                  </text>
                </div>
                <div className='sm:pb-4'>
                  <text>
                    We screen a candidate and only impressive candidates proceed
                    to the onsite, based on your criteria priority and target
                    candidate pass rate.
                  </text>
                </div>
                <ButtonLink
                  href='https://schedule.marktai.com'
                  variant='accent'
                >
                  <text className='font-semibold'>Schedule demo</text>
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className='border-b-2 py-8 sm:py-20 px-14 md:px-40' id='quotes'>
            <div className='w-full bg-accent p-8 sm:p-16 sm:flex'>
              <img
                src='/svg/quote.svg'
                alt=''
                height='55'
                width='45'
                className='mx-4 h-14'
              />
              <div>
                <div>
                  <text className='font-bold text-2xl sm:text-4xl'>
                    Mark does pretty cool stuff
                  </text>
                </div>
                <div>
                  <text className='font-bold text-lg sm:text-xl'>
                    — Carter, Staff Engineer @ LinkedIn
                  </text>
                </div>
              </div>
            </div>
          </div>
          <div className='py-8 sm:py-20 px-4 md:px-20'>
            <div className='flex w-full items-center justify-center mb-4 sm:mb-12 p-4 md:p-0'>
              <text className='font-bold text-xl sm:text-4xl text-center'>
                Brainstormed by engineers at top companies
              </text>
            </div>
            <div className='lg:flex w-full items-center justify-center text-center content-center'>
              <div className='flex py-4 items-center justify-center'>
                <div className='w-[63px] h-[20px] sm:w-[127px] sm:h-[40px] mx-4'>
                  <img
                    src='/images/logos/airbnb.png'
                    alt='Airbnb'
                    height='40'
                    width='127'
                  />
                </div>
                <div className='w-[107px] h-[12px] sm:w-[214px] sm:h-[24px] mx-4'>
                  <img
                    src='/images/logos/anthropic.png'
                    alt='Anthropic'
                    height='24'
                    width='214'
                  />
                </div>
                <div className='w-[48px] h-[20px] sm:w-[97px] sm:h-[40px] mx-4'>
                  <img
                    src='/images/logos/blend.png'
                    alt='Blend'
                    height='40'
                    width='97'
                  />
                </div>
              </div>
              <div className='flex py-4 items-center justify-center'>
                <div className='w-[106px] h-[12px] sm:w-[212px] sm:h-[24px] mx-4'>
                  <img
                    src='/images/logos/cloudkitchens.png'
                    alt='CloudKitchens'
                    height='24'
                    width='212'
                  />
                </div>
                <div className='w-[67px] h-[16px] sm:w-[134px] sm:h-[32px] mx-4'>
                  <img
                    src='/images/logos/pave.png'
                    alt='Pave'
                    height='32'
                    width='134'
                  />
                </div>
                <div className='w-[46px] h-[16px] sm:w-[92px] sm:h-[32px] mx-4'>
                  <img
                    src='/images/logos/uber.png'
                    alt='Uber'
                    height='32'
                    width='92'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='p-0 bg-blue-500'>
            <div className="w-full bg-[url('https://www.marktai.com/download//RealisticCode/star_background.png')] bg-cover bg-center px-14 md:px-40 py-8 min-h-40 lg:min-h-80 text-center flex items-center justify-center">
              <div className='w-full flex flex-col content-center items-center justify-center'>
                <div className='sm:mb-2 md:mb-4 max-w-[40vw]'>
                  <text className='font-bold sm:text-2xl md:text-4xl text-white'>
                    Hire effeciently
                  </text>
                </div>
                <div className='sm:mb-4 md:mb-8 max-w-[40vw]'>
                  <text className='sm:text-xl md:text-3xl text-white'>
                    Take your process to the next level
                  </text>
                </div>
                <div>
                  <ButtonLink
                    href='https://schedule.marktai.com'
                    variant='accent'
                  >
                    <text className='font-semibold'>Schedule demo</text>
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#00071A] w-full text-white px-14 md:px-40 py-10'>
            <div className='md:w-60 sm:float-left'>
              <div>
                <text className='font-bold'>
                  <text className='text-primary'>&#123;</text> Realistic Code{' '}
                  <text className='text-primary'>&#125;</text>
                </text>
              </div>
              <div>
                <text>© 2024 marktai.com</text>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:float-right'>
              <div className='pt-4 sm:pt-0 sm:px-10'>
                <Link
                  href='https://venmo.com/?txn=pay&audience=friends&recipients=mark-tai&amount=5&note=Realistic%20Code'
                  className='font-semibold'
                >
                  Pricing
                </Link>
              </div>
              <div>
                <Link
                  href='https://RealisticCode.com'
                  className='font-semibold'
                >
                  Company
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
