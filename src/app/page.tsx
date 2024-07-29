import Head from 'next/head';
import Image from 'next/image';
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
    <main className='bg-[#F1F1F1]'>
      <Head>
        <title>Realistic Code</title>
      </Head>
      <Header />
      <section>
        <div className='layout relative flex flex-col pt-12'>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-16  border-b-2 py-20 sm:px-20 md:px-40'>
            <div className='items-center flex'>
              <div>
                <div className='w-full'>
                  <text className='font-bold text-6xl	'>
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
          <div className='border-b-2 py-20 sm:px-20 md:px-40'>
            <div className='w-full text-center'>
              <text className='font-bold text-3xl'>
                Why use Realistic Code?
              </text>
            </div>
            <div className='grid grid-cols-3 gap-6'>
              <div>
                <div className='w-12 h-12 bg-blue-600'></div>
                <div className='my-4'>
                  <text className='font-bold text-xl'>Save your team time</text>
                </div>
                <div className='my-4'>
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
              <div>
                <div className='w-12 h-12 bg-blue-600'></div>
                <div className='my-4'>
                  <text className='font-bold text-xl'>Engage candidates</text>
                </div>
                <div className='my-4'>
                  <text>Make candidates </text>
                  <text className='font-bold'>excited</text>
                  <text> about your company via your interview process</text>
                </div>
              </div>
              <div>
                <div className='w-12 h-12 bg-blue-600'></div>
                <div className='my-4'>
                  <text className='font-bold text-xl'>
                    Future proof your process
                  </text>
                </div>
                <div className='my-4'>
                  <text className='font-bold'>AI proof</text>
                  <text>
                    {' '}
                    your questions with discussion followups that require deep
                    understanding
                  </text>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center w-full'>
              <ButtonLink className='mx-4' href='/components' variant='dark'>
                Schedule demo
              </ButtonLink>
              <ButtonLink href='/components' variant='light'>
                Contact us
              </ButtonLink>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-16  border-b-2 py-20 sm:px-20 md:px-40'>
            <div className='h-96 w-full bg-orange-600'></div>
            <div className='items-center flex'>
              <div>
                <div className='w-full'>
                  <text className='font-bold text-xl'>Product</text>
                </div>
                <div className='w-full'>
                  <text className='font-bold text-4xl'>
                    We'll do the work for you
                  </text>
                </div>
                <div>
                  <text>
                    We screen a candidate and only impressive candidates proceed
                    to the onsite, based on your criteria priority and target
                    candidate pass rate
                  </text>
                </div>
                <ButtonLink href='/components' variant='dark'>
                  Schedule demo
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className='border-b-2 py-20 sm:px-20 md:px-40'>
            <div className='w-full bg-green-300 p-16 flex'>
              <div className='h-8 w-8 mr-8 bg-blue-300'>"</div>
              <div>
                <div>
                  <text className='font-bold text-4xl'>
                    Mark does pretty cool stuff
                  </text>
                </div>
                <div>
                  <text className='font-bold text-xl'>
                    — Carter, Staff Engineer @ LinkedIn
                  </text>
                </div>
              </div>
            </div>
          </div>
          <div className='py-20 sm:px-10 md:px-20'>
            <div className='flex w-full items-center justify-center mb-12'>
              <text className='font-bold text-4xl'>
                Brainstormed by engineers at top companies
              </text>
            </div>
            <div className='flex w-full items-center justify-center'>
              <Image
                src='/images/logos/airbnb.png'
                alt='Airbnb'
                height='40'
                width='127'
                className='mx-4'
              />
              <Image
                src='/images/logos/anthropic.png'
                alt='Anthropic'
                height='24'
                width='214'
                className='mx-4'
              />
              <Image
                src='/images/logos/blend.png'
                alt='Blend'
                height='40'
                width='97'
                className='mx-4'
              />
              <Image
                src='/images/logos/cloudkitchens.png'
                alt='CloudKitchens'
                height='24'
                width='212'
                className='mx-4'
              />
              <Image
                src='/images/logos/pave.png'
                alt='Pave'
                height='32'
                width='134'
                className='mx-4'
              />
              <Image
                src='/images/logos/uber.png'
                alt='Uber'
                height='32'
                width='92'
                className='mx-4'
              />
            </div>
          </div>
          <div className='p-0 bg-blue-500'>
            <div className="w-full bg-[url('https://www.marktai.com/download//RealisticCode/star_background.png')] bg-cover bg-center px-40 py-8 min-h-40 lg:min-h-80 text-center flex items-center justify-center ">
              <div>
                <div className='sm:mb-2 md:mb-4'>
                  <text className='font-bold sm:text-2xl md:text-4xl text-white'>
                    Hire better, effeciently
                  </text>
                </div>
                <div className='sm:mb-4 md:mb-10'>
                  <text className='sm:text-xl md:text-3xl text-white'>
                    Take your process to the next level
                  </text>
                </div>
                <div>
                  <ButtonLink href='/components' variant='dark'>
                    Schedule demo
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#00071A] w-full text-white sm:px-20 md:px-40 py-10'>
            <div className='md:w-60 float-left'>
              <div>
                <text>&#123; Realistic Code &#125;</text>
              </div>
              <div>
                <text>© 2024 marktai.com</text>
              </div>
            </div>
            <div className='flex float-right'>
              <div className='px-10'>Pricing</div>
              <div>Company</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
