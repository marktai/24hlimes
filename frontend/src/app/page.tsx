'use client'
import {
  faFaceSmileBeam,
  faHourglassHalf,
} from '@fortawesome/free-regular-svg-icons';
import { Abril_Fatface, Caveat, Comfortaa, Dela_Gothic_One } from 'next/font/google';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

const dela_gothic_one = Dela_Gothic_One({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

const caveat = Caveat({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

const abril_fatface = Abril_Fatface({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

const comfortaa = Comfortaa({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

import Header from '@/components/Header';
import Logo from '@/components/Logo';
import ButtonLink from '@/components/links/ButtonLink';
import CarouselArc from '@/components/CarouselArc';
import Modal from '@/components/Modal';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */


export default function HomePage() {
  const [modalEnabled, setModalEnabled] = React.useState(false);
  const disableModal = () => {
    setModalEnabled(false);
  };
  const enableModal = () => {
    setModalEnabled(true);
  };
  const charityCasinoNightDrinks = [
    <img src='/images/Mootropolis Milk Munch.svg'/>,
    <img src='/images/lime_bg.png'/>,
    <img src='/images/process_medium.png'/>,
  ];
  const charityCasinoNightDrinksClicks = [
    enableModal,
    enableModal,
    enableModal,
  ];
  return (
    <main className='bg-background'>
      <Head>
        <title>24hlimes</title>
      </Head>
      {/* <Header /> */}
      <Logo />
      <Modal enabled={modalEnabled} disable={disableModal}><div className='text-[#800000]'>
        <button onClick={() => disableModal()} className={'text-[#800000] ' + dela_gothic_one.className}>← All drinks</button>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <img className='order-2 md:order-1 row-span-2' src='/images/Mootropolis Milk Munch.svg'/>
          <div className={'order-1 md:order-2 text-[#800000] '}>
            <div className='flex'>
                <div className='p-3 mx-1 justify-center align-middle rounded-[100px] border-[#800000] border-[1px]'>Sweet</div>
                <div className='p-3 mx-1 justify-center align-middle rounded-[100px] border-[#800000] border-[1px]'>Tart</div>
                <div className='p-3 mx-1 justify-center align-middle rounded-[100px] border-[#800000] border-[1px]'>Spicy</div>
            </div>
            <div className={'text-5xl ' + caveat.className}>Mootropolis Milk Munch</div>
          </div>
          <div className='order-3'>
            <div>Recipe | About</div>

            <div className={'text-2xl ' + comfortaa.className}>Flavors</div>
            <div>Milk with a kick, rich oak notes with a bit of citrus</div>

            <div className={'text-2xl ' + comfortaa.className}>Ingredients</div>
            <div>
              1 oz water
              1 oz alc
            </div>


            <div className={'text-2xl ' + comfortaa.className}>Preparation</div>
            <ol>
              <li>Milk the cow</li>
              <li>Rummage for rum</li>
              <li>Milk the cow</li>
              <li>Milk the cow</li>
              <li>Milk the cow</li>
              <li>Milk the cow</li>
            </ol>

          </div>

        </div>

        <div className='w-full h-[13px] bg-[url(/images/divider.svg)] bg-fill bg-center'></div>
        <div className={'text-2xl text-center ' + dela_gothic_one.className}>More drinks</div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
          <img className='rotate-[-4deg]' src='/images/Mootropolis Milk Munch.svg'/>
          <img className='rotate-[4deg]' src='/images/Mootropolis Milk Munch.svg'/>
          <img className='rotate-[-4deg]' src='/images/Mootropolis Milk Munch.svg'/>
          <img className='rotate-[4deg]' src='/images/Mootropolis Milk Munch.svg'/>
        </div>

      </div></Modal>
      <section>
        <div className='layout relative flex flex-col w-full max-w-full'>
          <div className='h-screen lg:min-h-[600px] sm:min-h-[400px] max-h-[100vw] bg-[url(/images/hero_bg.png)] bg-cover bg-center flex items-center justify-center w-screen'>
            <div className='w-full m-auto text-center pt-8'>
              <span className={'font-bold text-[#FEF4D8] text-4xl sm:text-6xl ' + dela_gothic_one.className}>
                24 Hour Limes
              </span>
            </div>
          </div>

          <div className='w-screen h-[70px] bg-[url(/images/lime_bg.png)] bg-contain bg-repeat-x'></div>

          <div className='border-b-8 border-[#57EFFF] bg-[#00245B] rounded-b-[80px] lg:rounded-b-[160px] mb-[-80px] lg:mb-[-160px] w-screen px-10 py-20 lg:p-[120px] z-[1] overflow-clip'>
            <div className='w-full text-center px-8 pb-4 sm:pb-10'>
              <span className={'font-bold text-[#57EFFF] text-7xl sm:text-5xl ' + caveat.className}>
                Charity Casino Night
              </span>
            </div>
            <div className='w-full text-center'>
              <CarouselArc items={charityCasinoNightDrinks} clickFunctions={charityCasinoNightDrinksClicks}/>
            </div>
          </div>

          <div className='border-b-8 border-[#C7FF57] bg-[#254924] rounded-b-[80px] lg:rounded-b-[160px] mb-[-80px] lg:mb-[-160px] pt-[200px] lg:pt-[280px] w-screen px-10 py-20 lg:p-[120px] z-0 overflow-clip'>
            <div className='w-full text-center px-8 pb-4 sm:pb-10'>
              <span className={'font-bold text-[#C7FF57] text-7xl sm:text-5xl ' + abril_fatface.className}>
                Speakeasy Night
              </span>
              <CarouselArc items={charityCasinoNightDrinks} clickFunctions={charityCasinoNightDrinksClicks}></CarouselArc>

              <span className={'font-bold text-[#C7FF57] text-7xl sm:text-5xl ' + abril_fatface.className}>
                Modifiers
              </span>
              <CarouselArc items={charityCasinoNightDrinks} clickFunctions={charityCasinoNightDrinksClicks}></CarouselArc>
            </div>
          </div>

          <div className='w-screen h-[70px] bg-[url(/images/lime_bg.png)] bg-contain bg-repeat-x'></div>
        </div>
      </section>
    </main>
  );
}
