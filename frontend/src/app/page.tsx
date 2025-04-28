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
  faArrowLeft,
  faClipboard,
  faDice,
  faFishFins,
  faLaptopCode,
  faMusic,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import injectLinks from '@/lib/injectLinks';

import CarouselArc from '@/components/CarouselArc';
import Logo from '@/components/Logo';
import Modal from '@/components/Modal';

import {
  CardInterface,
  cards,
  charityCasinoNightDrinks,
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
    <section className='h-screen lg:min-h-[600px] sm:min-h-[400px] max-h-[100vw] bg-[url(/images/hero_bg.svg)] bg-cover bg-center flex items-center justify-center w-screen'>
      <div className='w-full m-auto text-center pt-8'>
        <span
          className={
            'font-bold text-[#FEF4D8] text-[2.6rem] sm:text-6xl md:text-[80px] lg:text-[120px] 2xl:text-[160px] ' +
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
  enableModal: (card: CardInterface) => void,
  screenSizes: string[],
) {
  const charityCasinoNightDrinkImages = charityCasinoNightDrinks.map(
    (card, i) => (
      <img key={i} src={card.link} alt={card.name + ' card'} width='100%' />
    ),
  );
  const charityCasinoNightDrinksClicks = charityCasinoNightDrinks.map(
    (card) => () => {
      enableModal(card);
    },
  );

  const speakeasyNightDrinkImages = speakeasyNightDrinks.map((card, i) => (
    <img key={i} src={card.link} alt={card.name + ' card'} width='100%' />
  ));
  const speakeasyNightDrinksClicks = speakeasyNightDrinks.map((card) => () => {
    enableModal(card);
  });

  const modifierImages = modifiers.map((card, i) => (
    <img key={i} src={card.link} alt={card.name + ' card'} width='100%' />
  ));
  const modifierClicks = modifiers.map((card) => () => {
    enableModal(card);
  });

  return (
    <div className='layout relative flex flex-col w-full max-w-full'>
      <section className='border-b-8 border-[#57EFFF] bg-[#00245B] rounded-b-[80px] lg:rounded-b-[160px] mb-[-80px] lg:mb-[-160px] w-screen px-10 pt-14 pb-4 lg:px-[120px] lg:pt-[80px] z-[1] overflow-clip'>
        <div className='w-full text-center px-8 pb-8 sm:pb-10 lg:pb-12'>
          <div
            className={
              'font-bold text-[#57EFFF] text-4xl sm:text-5xl md:text-7xl md:pb-4 lg:pb-8 ' +
              neatHandwrittenTitle.className
            }
          >
            Charity Casino Night
          </div>
          <div className='lg:w-[50%] mx-auto'>
            I threw a{' '}
            <a
              className='hover:underline text-[#57EFFF]'
              target='_blank'
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
        <div className='lg:pb-10'>
          <div className='w-full text-center px-8 pb-8 sm:pb-10 lg:pb-12'>
            <div
              className={
                'font-bold text-[#29FFA4] text-4xl sm:text-5xl md:text-7xl pb-4 md:pb-8 lg:pb-12 ' +
                serifTitle.className
              }
            >
              Speakeasy Night
            </div>
            <div className='lg:w-[50%] mx-auto'>
              My friends and I organized a night with puzzle solving as the
              entry ticket, and I debuted the first 24 Hour Limes menu
            </div>
          </div>
          <CarouselArc
            items={speakeasyNightDrinkImages}
            clickFunctions={speakeasyNightDrinksClicks}
            screenSizes={screenSizes}
          />
        </div>

        <div>
          <div className='w-full text-center px-8 pb-8 sm:pb-10 lg:pb-12'>
            <div
              className={
                'font-bold text-[#29FFA4] text-4xl sm:text-5xl md:text-7xl pb-4 md:pb-8 lg:pb-12 ' +
                serifTitle.className
              }
            >
              Modifiers
            </div>
            <div className='lg:w-[50%] mx-auto'>
              Guests could pick drinks, then add any modifier they wanted to
              customize their drinks
            </div>
          </div>
          <CarouselArc
            items={modifierImages}
            clickFunctions={modifierClicks}
            screenSizes={screenSizes}
          />
        </div>
      </section>
    </div>
  );
}

function CardModal() {
  const [modalEnabled, setModalEnabled] = React.useState(false);
  const [modalCard, setModalCard] = React.useState(cards.dummy);
  const [modalTab, setModalTab] = React.useState(0);
  const [lastModalCard, setLastModalCard] =
    React.useState<CardInterface | null>(null);
  const modalContentRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    modalContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const enableModal = (card: CardInterface) => {
    setModalCard(card);
    setModalEnabled(true);
    scrollToTop();
    setModalTab(0);
    window.history.pushState(card, '', `/#${card.name}`);
  };

  const disableModal = () => {
    setModalEnabled(false);
    scrollToTop();
    window.history.pushState(null, '', '/');
  };

  React.useEffect(() => {
    if (window.location.hash && !modalEnabled) {
      const foundCard = Object.values(cards).find(
        (c) => c.name === decodeURI(window.location.hash.slice(1)),
      );
      if (foundCard !== undefined) {
        enableModal(foundCard);
      }
    }
  });

  let modalDrink: DrinkType | null = null;

  if (modalCard.tags) {
    modalDrink = modalCard as DrinkType;
  }

  const tabSections = [modalDrink ? 'Recipe' : null, 'About'].filter((x) => x);

  const modalTabs = tabSections.map((tabName, i) => {
    const selected = i === modalTab;
    return (
      <button
        type='button'
        key={i}
        className={
          'transition border-[#800000] pb-1 ' +
          (selected ? 'border-b-[3px] mb-[-3px] ' : '') +
          defaultTitle.className
        }
        onClick={() => setModalTab(i)}
      >
        {tabName}
      </button>
    );
  });

  const modalRelated = modalCard.relatedDrinks.map((card, i) => {
    return (
      <button type='button' key={i} onClick={() => enableModal(card)}>
        <img
          className='transition-all duration-300 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.50)] hover:shadow-[0px_4px_10px_0px_rgba(128,0,0,0.50)]'
          src={card.link}
          alt={card.name + ' card'}
          width='100%'
          style={{
            rotate: `${(-1) ** i * -4}deg`,
            borderRadius: '3.4%/2.42%',
          }}
        />
      </button>
    );
  });

  if (modalCard !== lastModalCard) {
    setLastModalCard(modalCard);
    scrollToTop();
  }

  let titleFont = defaultTitle.className;
  if (modalCard.fontStyle === 'neatHandwritten') {
    titleFont = neatHandwrittenTitle.className;
  } else if (modalCard.fontStyle === 'funSerif') {
    titleFont = serifTitle.className;
  }

  const tagPills = modalCard.tags?.map((tag, i) => {
    return (
      <div
        className='px-[10px] sm:px-[12px] py-[8px] sm:py-[10px] mx-1 justify-center align-middle rounded-[100px] border-[#800000] border-[1px] uppercase'
        key={i}
      >
        {tag}
      </div>
    );
  });

  const details = (
    // TODO(mark): try to transition height of content
    <div className='text-[16px]'>
      <div
        className={`grid grid-cols-${tabSections.length} gap-10 border-[#800000] border-b-[1px] mb-10`}
      >
        {modalTabs}
      </div>

      <div className={tabSections[modalTab] === 'Recipe' ? '' : 'hidden'}>
        <div className='pb-5'>
          <div className='pb-1 text-2xl'>Flavors</div>
          <div>{modalDrink?.flavorBody}</div>
        </div>

        <div className='pb-5'>
          <div className='pb-1 text-2xl'>Ingredients</div>
          <div>
            {modalDrink?.ingredients.map((ingredient, i) => (
              <div key={i}>{ingredient}</div>
            ))}
          </div>
        </div>

        <div className=''>
          <div className='pb-1 text-2xl'>Preparation</div>
          <ol className='pl-6 list-decimal'>
            {modalDrink?.preparationList.map((t, i) => <li key={i}>{t}</li>)}
          </ol>
        </div>
      </div>

      <div className={tabSections[modalTab] === 'About' ? '' : 'hidden'}>
        <div className='pb-5'>
          {modalCard?.about.map((a, i) => (
            <div className='pb-4' key={i}>
              {injectLinks(a)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ret = (
    <Modal
      enabled={modalEnabled}
      disable={disableModal}
      scrollRef={modalContentRef}
    >
      <div className='text-[#800000] relative max-w-[1600px] mx-auto'>
        <button
          onClick={() => disableModal()}
          className={
            'text-[#800000] hover:text-[#CA0003] mb-4 md:mb-10 ' +
            defaultTitle.className
          }
        >
          <FontAwesomeIcon icon={faArrowLeft} className='h-4 pr-2' /> All drinks
        </button>
        <div className='grid content-start items-start grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-x-12 sm:gap-y-4 md:gap-x-12 md:gap-y-8 xl:gap-x-20 xl-gap-12'>
          <div className='order-2 sm:order-1 xl:h-full pb-4 flex'>
            <img
              src={modalCard.link}
              alt={modalCard.name + ' card'}
              width='100%'
              className='mx-auto mt-0 mb-auto transition-none'
              style={{
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.50)',
                borderRadius: '3.4%/2.42%',
              }}
            />
          </div>
          {/* TODO: top justify rather than center columns */}
          <div className='order-1 sm:order-2 xl:col-span-2 text-[#800000] sm:pb-4'>
            <div
              className={
                'mt-2 sm:mt-0 mb-3 flex text-[12px] sm:text-[11px] xl:text-[14px] uppercase ' +
                (tagPills ? '' : 'hidden')
              }
            >
              {tagPills}
            </div>
            <div className={'text-5xl sm:py-4 lg:py-6 2xl-py-8 ' + titleFont}>
              {modalCard.name}
            </div>
            <div className='hidden sm:block'>{details}</div>
          </div>
          <div className='order-3 xl:col-span-3 block sm:hidden'>{details}</div>
        </div>
        <div className='w-full h-[15px] my-[60px] bg-[url(/images/divider.svg)] bg-fill bg-center' />
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
            'font-bold text-3xl sm:text-4xl md:text-[40px] pb-4 md:pb-6 lg:pb-8 ' +
            defaultTitle.className
          }
        >
          Other fun things I do
        </div>
        <div
          className={
            'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-[12px] sm:text-[16px] max-w-[1100px] mx-auto ' +
            (screenSizes.includes('md')
              ? defaultTitle.className
              : neatHandwrittenText.className)
          }
          style={{ letterSpacing: screenSizes.includes('md') ? '0.1px' : '' }}
        >
          <a
            type='button'
            target='_blank'
            href='https://boardgames.marktai.com'
            className='border-[#800000] border-[1px]'
          >
            <div className='px-4 py-3 flex hover:rounded-[32px] hover:bg-[#800000] text-[#800000] hover:text-[#FEF4D8]'>
              <div className='w-6'>
                <FontAwesomeIcon icon={faDice} className='h-5' />
              </div>
              <div className='px-2 m-auto'>Board game designer</div>
            </div>
          </a>
          <a
            type='button'
            target='_blank'
            href='https://diving.marktai.com'
            className='border-[#800000] border-[1px] border-t-0 lg:border-t-[1px] lg:border-l-0'
          >
            <div className='px-4 py-3 flex hover:rounded-[32px] hover:bg-[#800000] text-[#800000] hover:text-[#FEF4D8]'>
              <div className='w-6'>
                <FontAwesomeIcon icon={faFishFins} className='h-5' />
              </div>
              <div className='px-2 m-auto'>Diving instructor</div>
            </div>
          </a>
          <a
            type='button'
            target='_blank'
            href='https://music.marktai.com'
            className='border-[#800000] border-[1px] border-t-0 lg:border-t-0 xl:border-t-[1px] xl:border-l-0'
          >
            <div className='px-4 py-3 flex hover:rounded-[32px] hover:bg-[#800000] text-[#800000] hover:text-[#FEF4D8]'>
              <div className='w-6'>
                <FontAwesomeIcon icon={faMusic} className='h-5' />
              </div>
              <div className='px-2 m-auto'>Jazz musician & arranger</div>
            </div>
          </a>
          <a
            type='button'
            target='_blank'
            href='https://casino.marktai.com'
            className='border-[#800000] border-[1px] border-t-0 lg:border-l-0 lg:border-t-0 xl:border-l-[1px]'
          >
            <div className='px-4 py-3 flex hover:rounded-[32px] hover:bg-[#800000] text-[#800000] hover:text-[#FEF4D8]'>
              <div className='w-6'>
                <FontAwesomeIcon icon={faPeopleGroup} className='h-5' />
              </div>
              <div className='px-2 m-auto'>Party planner</div>
            </div>
          </a>
          <a
            type='button'
            target='_blank'
            href='https://resume.marktai.com'
            className='border-[#800000] border-[1px] border-t-0 lg:border-t-0 xl:border-l-0'
          >
            <div className='px-4 py-3 flex hover:rounded-[32px] hover:bg-[#800000] text-[#800000] hover:text-[#FEF4D8]'>
              <div className='w-6'>
                <FontAwesomeIcon icon={faLaptopCode} className='h-5' />
              </div>
              <div className='px-2 m-auto'>Senior software engineer</div>
            </div>
          </a>
          <a
            type='button'
            target='_blank'
            href='https://interviewing.marktai.com'
            className='border-[#800000] border-[1px] border-t-0 lg:border-l-0 lg:border-t-0'
          >
            <div className='px-4 py-3 flex hover:rounded-[32px] hover:bg-[#800000] text-[#800000] hover:text-[#FEF4D8]'>
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

  const { component: cardModal, enableModal } = CardModal();

  return (
    <main
      className={'bg-[#800000] text-[#FEF4D8] ' + neatHandwrittenText.className}
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
      {/* <div className='fixed left-[50%] z-50 border-l-[1px] py-32'></div> */}

      {cardModal}
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
