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
  modifiers,
  speakeasyNightDrinks,
} from '@/constant/drinks';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

function Hero() {
  return (
    <section className='h-screen lg:min-h-[600px] sm:min-h-[400px] max-h-[100vw] bg-[url(/images/hero_bg.png)] bg-cover bg-center flex items-center justify-center w-screen'>
      <div className='w-full m-auto text-center pt-8'>
        <span
          className={
            'font-bold text-[#FEF4D8] text-4xl sm:text-6xl lg:text-[120px]  ' +
            defaultTitle.className
          }
        >
          24 Hour Limes
        </span>
      </div>
    </section>
  );
}

function LogoDivider() {
  return (
    <div className='w-screen h-[50px] md:h-[70px] bg-[url(/images/lime_bg.png)] bg-contain bg-repeat-x'></div>
  );
}
function CardDisplays(
  enableModal: (drink: DrinkType) => void,
  screenSizes: string[],
) {
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

  const modifierImages = modifiers.map((drink, i) => (
    <img key={i} src={drink.link} alt={drink.name + ' card'} width='100%' />
  ));
  const modifierClicks = modifiers.map((drink) => () => {
    enableModal(drink);
  });

  return (
    <div className='layout relative flex flex-col w-full max-w-full'>
      <section className='border-b-8 border-[#57EFFF] bg-[#00245B] rounded-b-[80px] lg:rounded-b-[160px] mb-[-80px] lg:mb-[-160px] w-screen px-10 pt-14 pb-4 lg:px-[120px] lg:pt-[80px] z-[1] overflow-clip'>
        <div className='w-full text-center px-8 pb-8 sm:pb-10'>
          <div
            className={
              'font-bold text-[#57EFFF] text-4xl sm:text-5xl md:text-7xl ' +
              neatHandwrittenTitle.className
            }
          >
            Charity Casino Night
          </div>
          <div>
            I threw a{' '}
            <a
              className='text-[#57EFFF] hover:underline'
              href='https://casino.marktai.com'
            >
              party where we raised $23,000 for Gaza victims
            </a>{' '}
            and also prepared a great cocktail menu!
          </div>
        </div>
        <div className='w-full text-center'>
          <CarouselArc
            items={charityCasinoNightDrinkImages}
            clickFunctions={charityCasinoNightDrinksClicks}
            screenSizes={screenSizes}
          />
        </div>
      </section>

      <section className='border-b-8 border-[#29FFA4] bg-[#0F3022] rounded-b-[80px] lg:rounded-b-[160px] pt-[136px] lg:pt-[280px] w-screen px-10 pb-4 lg:px-[120px] z-0 overflow-clip'>
        <div className='w-full text-center px-8 pb-8 sm:pb-10'>
          <div
            className={
              'font-bold text-[#29FFA4] text-4xl sm:text-5xl md:text-7xl pb-4 ' +
              serifTitle.className
            }
          >
            Speakeasy Night
          </div>
          <div>
            My friends and I organized a night with puzzle solving as the entry
            ticket, and I debuted the first 24 Hour Limes menu
          </div>
        </div>
        <CarouselArc
          items={speakeasyNightDrinkImages}
          clickFunctions={speakeasyNightDrinksClicks}
          screenSizes={screenSizes}
        />

        <div className='w-full text-center px-8 pb-8 sm:pb-10'>
          <div
            className={
              'font-bold text-[#29FFA4] text-4xl sm:text-5xl md:text-7xl  pb-4 ' +
              serifTitle.className
            }
          >
            Modifiers
          </div>
          <div>
            Guests could pick drinks, then add any modifier they wanted to
            customize their drinks
          </div>
        </div>
        <CarouselArc
          items={modifierImages}
          clickFunctions={modifierClicks}
          screenSizes={screenSizes}
        />
      </section>
    </div>
  );
}

function DrinkModal() {
  const [modalEnabled, setModalEnabled] = React.useState(false);
  const [focusDrink, setFocusDrink] = React.useState(
    drinks.mootropolisMilkMunch,
  );
  const [modalTab, setModalTab] = React.useState(0);
  const [lastFocusDrink, setLastFocusDrink] = React.useState<DrinkType | null>(
    null,
  );
  const modalContentRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    modalContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const enableModal = (drink: DrinkType) => {
    setFocusDrink(drink);
    setModalEnabled(true);
    scrollToTop();
    setModalTab(0);
  };

  const disableModal = () => {
    setModalEnabled(false);
    scrollToTop();
  };

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
      <button type='button' key={i} onClick={() => enableModal(drink)}>
        <img
          src={drink.link}
          alt={drink.name + ' card'}
          width='100%'
          style={{
            rotate: `${(-1) ** i * -4}deg`,
            boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.50)',
            borderRadius: '3.4%/2.42%',
          }}
        />
      </button>
    );
  });

  if (focusDrink !== lastFocusDrink) {
    setLastFocusDrink(focusDrink);
    scrollToTop();
  }

  let titleFont = defaultTitle.className;
  if (focusDrink.fontStyle === 'neatHandwritten') {
    titleFont = neatHandwrittenTitle.className;
  } else if (focusDrink.fontStyle === 'funSerif') {
    titleFont = serifTitle.className;
  }

  const ret = (
    <Modal
      enabled={modalEnabled}
      disable={disableModal}
      scrollRef={modalContentRef}
    >
      <div className='text-[#800000] relative'>
        <button
          onClick={() => disableModal()}
          className={'text-[#800000] m-2 md:m-4 ' + defaultTitle.className}
        >
          ← All drinks
        </button>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-8'>
          <div className='order-2 sm:order-1 row-span-2 lg:h-full pb-4 flex'>
            <img
              src={focusDrink.link}
              alt={focusDrink.name + ' card'}
              width='100%'
              className='m-auto transition-none'
              style={{
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.50)',
                borderRadius: '3.4%/2.42%',
              }}
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
            <div className={'text-5xl ' + titleFont}>{focusDrink.name}</div>
          </div>
          <div className='order-3 lg:col-span-2'>
            <div className='grid grid-cols-2 gap-10 border-[#800000] border-b-[1px] mb-10'>
              {modalButtons}
            </div>

            <div>
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
                  <li>Catch the cognac</li>
                  <li>Zest ze lemon</li>
                  <li>Pick some pandan</li>
                  <li>Drink</li>
                </ol>
              </div>
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
          <div className='grid grid-cols-2 md:grid-cols-4 gap-[40px] sm:gap-[80px] md:gap-[40px] lg:gap-[80px] xl:gap-x-[120px]'>
            {modalRelated}
          </div>
        </div>

        <button
          type='button'
          onClick={() => scrollToTop()}
          className='fixed right-4 bottom-20 md:hidden'
        >
          <img
            src='/images/scroll_button.svg'
            alt='Scroll to top'
            width='60px'
          />
        </button>
      </div>
    </Modal>
  );

  return { component: ret, enableModal: enableModal };
}

function OtherFunThings(screenSizes: string[]) {
  return (
    <section className='border-t-8 border-[#D0CCA9] bg-[#FEF4D8] rounded-t-[80px] lg:rounded-t-[160px] w-screen px-10 py-20 lg:px-[120px] z-0 text-[#800000]'>
      <div className='w-full text-center px-8'>
        <div
          className={
            'font-bold text-3xl sm:text-5xl lg:text-7xl pb-4 ' +
            defaultTitle.className
          }
        >
          Other fun things I do
        </div>
        <div
          className={
            'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-[12px] sm:text-[16px] ' +
            (screenSizes.includes('md')
              ? defaultTitle.className
              : neatHandwrittenText.className)
          }
        >
          <a
            type='button'
            href='https://boardgames.marktai.com'
            className='border-[#800000] border-[1px]'
          >
            <div className='px-4 py-3 flex hover:rounded-[32px] hover:bg-[#800000] hover:text-[#FEF4D8]'>
              <div className='w-6'>
                <FontAwesomeIcon icon={faDice} className='h-5' />
              </div>
              <div className='px-2 m-auto'>Board game designer</div>
            </div>
          </a>
          <a
            type='button'
            href='https://diving.marktai.com'
            className='border-[#800000] border-[1px] border-t-0 lg:border-t-[1px] lg:border-l-0'
          >
            <div className='px-4 py-3 flex hover:rounded-[32px] hover:bg-[#800000] hover:text-[#FEF4D8]'>
              <div className='w-6'>
                <FontAwesomeIcon icon={faFishFins} className='h-5' />
              </div>
              <div className='px-2 m-auto'>Diving instructor</div>
            </div>
          </a>
          <a
            type='button'
            href='https://music.marktai.com'
            className='border-[#800000] border-[1px] border-t-0 lg:border-t-0 xl:border-t-[1px] xl:border-l-0'
          >
            <div className='px-4 py-3 flex hover:rounded-[32px] hover:bg-[#800000] hover:text-[#FEF4D8]'>
              <div className='w-6'>
                <FontAwesomeIcon icon={faMusic} className='h-5' />
              </div>
              <div className='px-2 m-auto'>Jazz musician & arranger</div>
            </div>
          </a>
          <a
            type='button'
            href='https://casino.marktai.com'
            className='border-[#800000] border-[1px] border-t-0 lg:border-l-0 lg:border-t-0 xl:border-l-[1px]'
          >
            <div className='px-4 py-3 flex hover:rounded-[32px] hover:bg-[#800000] hover:text-[#FEF4D8]'>
              <div className='w-6'>
                <FontAwesomeIcon icon={faPeopleGroup} className='h-5' />
              </div>
              <div className='px-2 m-auto'>Party planner</div>
            </div>
          </a>
          <a
            type='button'
            href='https://resume.marktai.com'
            className='border-[#800000] border-[1px] border-t-0 lg:border-t-0 xl:border-l-0'
          >
            <div className='px-4 py-3 flex hover:rounded-[32px] hover:bg-[#800000] hover:text-[#FEF4D8]'>
              <div className='w-6'>
                <FontAwesomeIcon icon={faLaptopCode} className='h-5' />
              </div>
              <div className='px-2 m-auto'>Senior software engineer</div>
            </div>
          </a>
          <a
            type='button'
            href='https://interviewing.marktai.com'
            className='border-[#800000] border-[1px] border-t-0 lg:border-l-0 lg:border-t-0'
          >
            <div className='px-4 py-3 flex hover:rounded-[32px] hover:bg-[#800000] hover:text-[#FEF4D8]'>
              <div className='w-6'>
                <FontAwesomeIcon icon={faClipboard} className='h-5' />
              </div>
              <div className='px-2 m-auto'>Technical interview coach</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [screenSizes, setScreenSizes] = React.useState(['sm', 'md', 'lg']);

  function updateScreenSizes() {
    const width = window.innerWidth;
    const newScreenSizes: string[] = [];
    if (width > 640) {
      newScreenSizes.push('sm');
    }
    if (width > 768) {
      newScreenSizes.push('md');
    }
    if (width > 1024) {
      newScreenSizes.push('lg');
    }
    if (width > 1280) {
      newScreenSizes.push('xl');
    }
    if (width > 1536) {
      newScreenSizes.push('2xl');
    }
    if (screenSizes.length !== newScreenSizes.length) {
      setScreenSizes(newScreenSizes);
    }
  }

  React.useEffect(() => {
    updateScreenSizes();
    window.addEventListener('resize', updateScreenSizes);
    return () => {
      window.removeEventListener('resize', updateScreenSizes);
    };
  });

  const { component: drinkModal, enableModal } = DrinkModal();

  return (
    <main
      className={'bg-[#800000] text-[#FEF4D8]' + neatHandwrittenText.className}
    >
      <Head>
        <title>24hlimes</title>
      </Head>
      {/* <Header /> */}

      <Logo
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {drinkModal}
      <div className='text-[#FEF4D8]'>
        <div className='layout relative flex flex-col w-full max-w-full'>
          {Hero()}
          {LogoDivider()}
          {CardDisplays(enableModal, screenSizes)}
          {OtherFunThings(screenSizes)}
          {LogoDivider()}
        </div>
      </div>
    </main>
  );
}
