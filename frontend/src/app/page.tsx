'use client';

import {
  Abril_Fatface,
  Comfortaa,
  Dela_Gothic_One,
  Handlee,
} from 'next/font/google';
import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

const defaultTitle = Dela_Gothic_One({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

const neatHandwrittenTitle = Handlee({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

const neatHandwrittenText = Comfortaa({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

const serifTitle = Abril_Fatface({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

import {
  faClipboard,
  faDice,
  faFishFins,
  faLaptopCode,
  faMusic,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CarouselArc from '@/components/CarouselArc';
import Logo from '@/components/Logo';
import Modal from '@/components/Modal';

import {
  charityCasinoNightDrinks,
  drinks,
  DrinkType,
  speakeasyNightDrinks,
} from '@/constant/drinks';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

function DrinkModal(
  modalEnabled: boolean,
  enableModal: (arg0: DrinkType) => void,
  focusDrink: DrinkType,
  setFocusDrink: (arg0: DrinkType) => void,
  modalTab: number,
  setModalTab: (arg0: number) => void,
  disableModal: () => void,
) {
  // Create a ref and initialize it with null
  const [justEnabled, setJustEnabled] = React.useState(false);

  const modalButtons = ['Recipe', 'About'].map((tabName, i) => {
    const selected = i === modalTab;
    return (
      <button
        type='button'
        key={i}
        className={
          'transition border-[#800000] ' +
          (selected ? 'border-b-[3px] mb-[-3px] ' : '') +
          defaultTitle.className
        }
        onClick={() => setModalTab(i)}
      >
        {tabName}
      </button>
    );
  });

  const modalRelated = focusDrink.relatedDrinks.map((drink, i) => {
    return (
      <button
        type='button'
        key={i}
        onClick={() => {
          enableModal(drink);
          setJustEnabled(true);
        }}
      >
        <img
          src={drink.link}
          alt={drink.name + ' card'}
          width='100%'
          style={{ rotate: `${(-1) ** i * -4}deg` }}
        />
      </button>
    );
  });

  const myRef = React.useRef<HTMLDivElement>(null);

  if (justEnabled) {
    setJustEnabled(false);
    myRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const ret = (
    <Modal enabled={modalEnabled} disable={disableModal} scrollRef={myRef}>
      <div className='text-[#800000]'>
        <button
          onClick={() => disableModal()}
          className={'text-[#800000] m-2 md:m-4 ' + defaultTitle.className}
        >
          ← All drinks
        </button>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-8'>
          <div className='order-2 sm:order-1 row-span-2 lg:h-full flex'>
            <img
              src={focusDrink.link}
              alt={focusDrink.name + ' card'}
              width='100%'
              className='m-auto transition-none'
            />
          </div>
          <div className='order-1 sm:order-2 lg:col-span-2 text-[#800000] text-[12px] uppercase'>
            <div className='my-6 flex'>
              <div className='px-3 py-2 mx-1 justify-center align-middle rounded-[100px] border-[#800000] border-[1px]'>
                Sweet
              </div>
              <div className='px-3 py-2 mx-1 justify-center align-middle rounded-[100px] border-[#800000] border-[1px]'>
                Tart
              </div>
              <div className='px-3 py-2 mx-1 justify-center align-middle rounded-[100px] border-[#800000] border-[1px]'>
                Spicy
              </div>
            </div>
            <div className={'text-5xl ' + neatHandwrittenTitle.className}>
              {focusDrink.name}
            </div>
          </div>
          <div className='order-3 lg:col-span-2'>
            <div className='grid grid-cols-2 gap-10 border-[#800000] border-b-[1px] mb-10'>
              {modalButtons}
            </div>

            <div className='pb-5'>
              <div className={'text-2xl ' + neatHandwrittenText.className}>
                Flavors
              </div>
              <div>Milk with a kick, rich oak notes with a bit of citrus</div>
            </div>

            <div className='pb-5'>
              <div className={'text-2xl ' + neatHandwrittenText.className}>
                Ingredients
              </div>
              <div>1 oz water 1 oz alc</div>
            </div>

            <div className=''>
              <div className={'text-2xl ' + neatHandwrittenText.className}>
                Preparation
              </div>
              <ol className='pl-6 list-decimal'>
                <li>Milk the cow</li>
                <li>Rummage for rum</li>
                <li>Milk the cow</li>
                <li>Milk the cow</li>
                <li>Milk the cow</li>
                <li>Milk the cow</li>
              </ol>
            </div>
          </div>
        </div>

        <div className='w-full h-[13px] my-[60px] bg-[url(/images/divider.svg)] bg-fill bg-center' />
        <div>
          <div
            className={'text-2xl pb-10 text-center ' + defaultTitle.className}
          >
            More drinks
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-x-[120px] gap-y-[80px]'>
            {modalRelated}
          </div>
        </div>
      </div>
    </Modal>
  );

  return ret;
}

export default function HomePage() {
  const [modalEnabled, setModalEnabled] = React.useState(false);
  const [focusDrink, setFocusDrink] = React.useState(
    drinks.mootropolisMilkMunch,
  );
  const [modalTab, setModalTab] = React.useState(0);
  const disableModal = () => {
    setModalEnabled(false);
  };
  const enableModal = (drink: DrinkType) => {
    setFocusDrink(drink);
    setModalEnabled(true);
    setModalTab(0);
  };
  const charityCasinoNightDrinkImages = charityCasinoNightDrinks.map(
    (drink, i) => (
      <img key={i} src={drink.link} alt={drink.name + ' card'} width='100%' />
    ),
  );
  const charityCasinoNightDrinksClicks = charityCasinoNightDrinks.map(
    (drink) => () => {
      enableModal(drink);
    },
  );

  const speakeasyNightDrinkImages = speakeasyNightDrinks.map((drink, i) => (
    <img key={i} src={drink.link} alt={drink.name + ' card'} width='100%' />
  ));
  const speakeasyNightDrinksClicks = speakeasyNightDrinks.map((drink) => () => {
    enableModal(drink);
  });

  return (
    <main
      className={'bg-[#800000] text-[#FEF4D8]' + neatHandwrittenText.className}
    >
      <Head>
        <title>24hlimes</title>
      </Head>
      {/* <Header /> */}

      <Logo />

      {DrinkModal(
        modalEnabled,
        enableModal,
        focusDrink,
        setFocusDrink,
        modalTab,
        setModalTab,
        disableModal,
      )}
      <div className='text-[#FEF4D8]'>
        <div className='layout relative flex flex-col w-full max-w-full'>
          <section className='h-screen lg:min-h-[600px] sm:min-h-[400px] max-h-[100vw] bg-[url(/images/hero_bg.png)] bg-cover bg-center flex items-center justify-center w-screen'>
            <div className='w-full m-auto text-center pt-8'>
              <span
                className={
                  'font-bold text-[#FEF4D8] text-4xl sm:text-6xl ' +
                  defaultTitle.className
                }
              >
                24 Hour Limes
              </span>
            </div>
          </section>

          <div className='w-screen h-[70px] bg-[url(/images/lime_bg.png)] bg-contain bg-repeat-x'></div>

          <section className='border-b-8 border-[#57EFFF] bg-[#00245B] rounded-b-[80px] lg:rounded-b-[160px] mb-[-80px] lg:mb-[-160px] w-screen px-10 pt-20 pb-10 lg:px-[120px] lg:pt-[80px] z-[1] overflow-clip'>
            <div className='w-full text-center px-8 pb-8 sm:pb-10'>
              <div
                className={
                  'font-bold text-[#57EFFF] text-7xl sm:text-5xl ' +
                  neatHandwrittenTitle.className
                }
              >
                Charity Casino Night
              </div>
              <div>
                Powder pie shortbread gingerbread cotton candy toffee.
                Strawberry mango puree with cheese foam and chocolate.
              </div>
            </div>
            <div className='w-full text-center'>
              <CarouselArc
                items={charityCasinoNightDrinkImages}
                clickFunctions={charityCasinoNightDrinksClicks}
              />
            </div>
          </section>

          <section className='border-b-8 border-[#29FFA4] bg-[#0F3022] rounded-b-[80px] lg:rounded-b-[160px] pt-[200px] lg:pt-[280px] w-screen px-10 pb-10 lg:px-[120px] z-0 overflow-clip'>
            <div className='w-full text-center px-8 pb-8 sm:pb-10'>
              <div
                className={
                  'font-bold text-[#29FFA4] text-7xl sm:text-5xl pb-4 ' +
                  serifTitle.className
                }
              >
                Speakeasy Night
              </div>
              <div>
                Powder pie shortbread gingerbread cotton candy toffee.
                Strawberry mango puree with cheese foam and chocolate.
              </div>
            </div>
            <CarouselArc
              items={speakeasyNightDrinkImages}
              clickFunctions={speakeasyNightDrinksClicks}
            />

            <div className='w-full text-center px-8 pb-8 sm:pb-10'>
              <div
                className={
                  'font-bold text-[#29FFA4] text-7xl sm:text-5xl pb-4 ' +
                  serifTitle.className
                }
              >
                Modifiers
              </div>
              <div>
                Powder pie shortbread gingerbread cotton candy toffee.
                Strawberry mango puree with cheese foam and chocolate.
              </div>
            </div>
            <CarouselArc
              items={charityCasinoNightDrinkImages}
              clickFunctions={charityCasinoNightDrinksClicks}
            />
          </section>

          <section
            className={
              'border-t-8 border-[#D0CCA9] bg-[#FEF4D8] rounded-t-[80px] lg:rounded-t-[160px] w-screen px-10 py-20 lg:px-[120px] z-0 text-[#800000] ' +
              defaultTitle.className
            }
          >
            <div className='w-full text-center px-8'>
              <div className='font-bold text-7xl sm:text-5xl pb-4 '>
                Other fun things I do
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 '>
                <a
                  type='button'
                  href='https://boardgames.marktai.com'
                  className='border-[#800000] border-[1px]'
                >
                  <div className='px-8 py-5 flex hover:rounded-[32px] hover:bg-[#800000] hover:text-[#FEF4D8]'>
                    <div className='w-6'>
                      <FontAwesomeIcon icon={faDice} className='h-5' />
                    </div>
                    <div className='mx-auto'>Board game designer</div>
                  </div>
                </a>
                <a
                  type='button'
                  href='https://diving.marktai.com'
                  className='border-[#800000] border-[1px] border-t-0 lg:border-t-[1px] lg:border-l-0'
                >
                  <div className='px-8 py-5 flex hover:rounded-[32px] hover:bg-[#800000] hover:text-[#FEF4D8]'>
                    <div className='w-6'>
                      <FontAwesomeIcon icon={faFishFins} className='h-5' />
                    </div>
                    <div className='mx-auto'>Diving instructor</div>
                  </div>
                </a>
                <a
                  type='button'
                  href='https://music.marktai.com'
                  className='border-[#800000] border-[1px] border-t-0 lg:border-t-0 xl:border-t-[1px] xl:border-l-0'
                >
                  <div className='px-8 py-5 flex hover:rounded-[32px] hover:bg-[#800000] hover:text-[#FEF4D8]'>
                    <div className='w-6'>
                      <FontAwesomeIcon icon={faMusic} className='h-5' />
                    </div>
                    <div className='mx-auto'>Jazz musician & arranger</div>
                  </div>
                </a>
                <a
                  type='button'
                  href='https://casino.marktai.com'
                  className='border-[#800000] border-[1px] border-t-0 lg:border-l-0 lg:border-t-0 xl:border-l-[1px]'
                >
                  <div className='px-8 py-5 flex hover:rounded-[32px] hover:bg-[#800000] hover:text-[#FEF4D8]'>
                    <div className='w-6'>
                      <FontAwesomeIcon icon={faPeopleGroup} className='h-5' />
                    </div>
                    <div className='mx-auto'>Party planner</div>
                  </div>
                </a>
                <a
                  type='button'
                  href='https://resume.marktai.com'
                  className='border-[#800000] border-[1px] border-t-0 lg:border-t-0 xl:border-l-0'
                >
                  <div className='px-8 py-5 flex hover:rounded-[32px] hover:bg-[#800000] hover:text-[#FEF4D8]'>
                    <div className='w-6'>
                      <FontAwesomeIcon icon={faLaptopCode} className='h-5' />
                    </div>
                    <div className='mx-auto'>Senior software engineer</div>
                  </div>
                </a>
                <a
                  type='button'
                  href='https://interviewing.marktai.com'
                  className='border-[#800000] border-[1px] border-t-0 lg:border-l-0 lg:border-t-0'
                >
                  <div className='px-8 py-5 flex hover:rounded-[32px] hover:bg-[#800000] hover:text-[#FEF4D8]'>
                    <div className='w-6'>
                      <FontAwesomeIcon icon={faClipboard} className='h-5' />
                    </div>
                    <div className='mx-auto'>Technical interviewing coach</div>
                  </div>
                </a>
              </div>
            </div>
          </section>

          <div className='w-screen h-[70px] bg-[url(/images/lime_bg.png)] bg-contain bg-repeat-x'></div>
        </div>
      </div>
    </main>
  );
}
