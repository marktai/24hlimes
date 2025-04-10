'use client';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tOnF6UPDszh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import React, { useEffect, useState } from 'react';

type CarouselArcProps = {
  items: Array<React.JSX.Element>;
  clickFunctions: Array<() => void>;
  startingIndex?: number;
};

export default function CarouselArc({
  items,
  clickFunctions,
  startingIndex = 0,
}: CarouselArcProps) {
  // lg:min-h-[600px] sm:min-h-[400px] max-h-[100vw]
  const [index, setIndex] = useState(startingIndex + items.length);
  const [screenSizes, setScreenSizes] = useState(['sm', 'md', 'lg']);

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

  useEffect(() => {
    updateScreenSizes();
    window.addEventListener('resize', updateScreenSizes);
    return () => {
      window.removeEventListener('resize', updateScreenSizes);
    };
  });

  const targetLength = 6 * items.length;

  const duplicatedItems = items
    .concat(items)
    .concat(items)
    .concat(items)
    .concat(items)
    .concat(items)
    .map((item, i) => {
      let relativeIndex =
        (i - (index % targetLength) + targetLength) % targetLength;
      if (relativeIndex > targetLength / 2) {
        relativeIndex -= targetLength;
      }

      let degreesRotated = 0;
      // let middle item have more space
      if (screenSizes.includes('lg')) {
        degreesRotated = relativeIndex * 0.07 + Math.sign(relativeIndex) * 0.01;
      } else {
        degreesRotated =
          relativeIndex * 0.05 + Math.sign(relativeIndex) * 0.007;
      }

      let width = 0;
      if (screenSizes.includes('lg')) {
        width = relativeIndex === 0 ? 232 : 160;
      } else {
        width = relativeIndex === 0 ? 160 : 120;
      }

      const style = {
        left: `${Math.round(Math.sin(degreesRotated) * 3000 + 1)}px`,
        rotate: `${degreesRotated}rad`,
        top: `${Math.round((1 - Math.cos(Math.abs(degreesRotated))) * 3000 + 44)}px`,
        width: `${width}px`,
        zIndex: relativeIndex === 0 ? '5' : '0',
        opacity: Math.abs(relativeIndex) > 4 ? 0 : 100, // hides offscreen cards jumping from one side to the other
        boxShadow:
          relativeIndex === 0
            ? '0px 4px 10px 0px rgba(0, 0, 0, 0.50)'
            : '0px 2px 5px 0px rgba(0, 0, 0, 0.50)',
        borderRadius: 8,
      };

      if (relativeIndex === 0) {
        style.top = '0px';
      }

      const onClick = (i: number) => {
        if (i === index) {
          clickFunctions[i % items.length]();
        } else {
          updateIndex(i);
        }
      };

      return (
        <button
          onClick={() => onClick(i)}
          className='absolute transition-all -translate-x-1/2'
          style={style}
          key={i}
        >
          {item}
        </button>
      );
    });

  const updateIndex = (newIndex: number) => {
    if (newIndex >= duplicatedItems.length) {
      newIndex = newIndex % duplicatedItems.length;
    } else if (newIndex < 0) {
      newIndex =
        Math.ceil(newIndex / duplicatedItems.length) *
          -1 *
          duplicatedItems.length +
        newIndex;
    }
    setIndex(newIndex);
  };

  const indicators = items.map((_, i) => {
    const dedupeIndex = index % items.length;
    const selected = dedupeIndex === i;
    const onClick = () => {
      setIndex(index - dedupeIndex + i);
    };
    return (
      <button
        key={i}
        type='button'
        onClick={onClick}
        className={
          'w-3 h-3 rounded-full border-[#FEF4D8] border-[1px] ' +
          (selected ? 'bg-[#FEF4D8]' : '')
        }
      ></button>
    );
  });

  return (
    <div>
      <div className='min-h-[260px] lg:min-h-[360px] w-full'>
        <div className='w-[2px] mx-auto relative'>{duplicatedItems}</div>
      </div>
      <div className='w-full min-h-[40px]'>
        <div className='absolute z-10 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse left-1/2 '>
          {indicators}
        </div>
      </div>
    </div>
  );
}
