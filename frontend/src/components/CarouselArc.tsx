'use client';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tOnF6UPDszh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import React, { useState } from 'react';

type CarouselArcProps = {
  items: Array<React.JSX.Element>;
  clickFunctions: Array<() => void>;
  startingIndex?: number;
  screenSizes: string[];
};

export default function CarouselArc({
  items,
  clickFunctions,
  startingIndex = 0,
  screenSizes,
}: CarouselArcProps) {
  // lg:min-h-[600px] sm:min-h-[400px] max-h-[100vw]
  const [index, setIndex] = useState(startingIndex + items.length);
  const [touchStart, setTouchStart] = useState<[number, number] | null>(null);
  const [touchEnd, setTouchEnd] = useState<[number, number] | null>(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const targetLength = 6 * items.length;

  // TODO(mark): reduce this to only 3 times repeated?
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

      let width = 0;
      if (screenSizes.includes('lg')) {
        width = relativeIndex === 0 ? 232 : 160;
      } else {
        width = relativeIndex === 0 ? 200 : 160;
      }

      const visibleOnEachSide = Math.min(2, Math.floor((items.length - 1) / 2));
      const visible = Math.abs(relativeIndex) <= visibleOnEachSide;

      let degreesRotated = 0;
      // let middle item have more space
      if (screenSizes.includes('lg')) {
        degreesRotated = relativeIndex * 0.07 + Math.sign(relativeIndex) * 0.01;
      } else {
        degreesRotated =
          relativeIndex * 0.06 + Math.sign(relativeIndex) * 0.007;
      }

      const style = {
        left: `${Math.round(Math.sin(degreesRotated) * 3000 + 1)}px`,
        rotate: `${degreesRotated}rad`,
        top: `${Math.round((1 - Math.cos(Math.abs(degreesRotated))) * 3000 + 44 + (relativeIndex === 0 ? 0 : -20))}px`,
        width: `${width}px`,
        zIndex: relativeIndex === 0 ? '5' : '0',
        opacity: visible ? 100 : 0, // hides offscreen cards jumping from one side to the other
        borderRadius: '3.4%/2.42%',
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

      // TODO: allow styles from parent
      return (
        <button
          className={
            'absolute transition-all duration-300 -translate-x-1/2 ' +
            (visible ? '' : 'cursor-default ') +
            (relativeIndex === 0
              ? 'shadow-[0px_4px_10px_0px_rgba(0,0,0,0.50)] hover:shadow-[0px_4px_10px_0px_rgba(255,255,255,0.50)]'
              : 'shadow-[0px_2px_5px_0px_rgba(0,0,0,0.50)] hover:shadow-[0px_2px_5px_0px_rgba(255,255,255,0.50)]')
          }
          type='button'
          style={style}
          key={i}
          onClick={() => (visible ? onClick(i) : null)}
        >
          {item}
        </button>
      );
    });

  const updateIndex = (newIndex: number) => {
    if (newIndex >= duplicatedItems.length) {
      newIndex = newIndex % duplicatedItems.length;
    } else if (newIndex < 0) {
      newIndex = newIndex + duplicatedItems.length;
    }
    setIndex(newIndex);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart([e.targetTouches[0].clientX, e.targetTouches[0].clientY]);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    setTouchEnd([e.targetTouches[0].clientX, e.targetTouches[0].clientY]);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distanceX = touchEnd[0] - touchStart[0];
    const distanceY = touchEnd[1] - touchStart[1];
    const isLeftSwipe =
      distanceX < -minSwipeDistance &&
      Math.abs(distanceX) > Math.abs(distanceY);
    const isRightSwipe =
      distanceX > minSwipeDistance && Math.abs(distanceX) > Math.abs(distanceY);

    if (isLeftSwipe) {
      updateIndex(index + 1);
    } else if (isRightSwipe) {
      updateIndex(index - 1);
    }
  };

  const indicators = items.map((_, i) => {
    const dedupeIndex = index % items.length;
    const selected = dedupeIndex === i;
    const onClick = () => {
      const target = index - (dedupeIndex - i);
      // smallest movement
      // if (i - dedupeIndex > items.length / 2){
      //   target -= items.length;
      // } else if (i - dedupeIndex < -items.length / 2){
      //   target += items.length;
      // }

      updateIndex(target);
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
    <div
      onTouchStart={(e) => {
        onTouchStart(e);
      }}
      onTouchMove={(e) => {
        onTouchMove(e);
      }}
      onTouchEnd={() => {
        onTouchEnd();
      }}
    >
      <div className='min-h-[310px] lg:min-h-[360px] w-full'>
        <div className='w-[2px] mx-auto relative'>{duplicatedItems}</div>
      </div>
      <div className='w-full min-h-[40px] lg:min-h-[60px]'>
        <div className='absolute z-10 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse left-1/2 '>
          {indicators}
        </div>
      </div>
    </div>
  );
}
