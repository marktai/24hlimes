'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tOnF6UPDszh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';

import Button from '@/components/buttons/Button';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import ButtonLink from './links/ButtonLink';
import React, { useState, useEffect, useRef } from "react";
import useWindowDimensions from '@/lib/useWindowDimensions';


type CarouselArcProps = {
  items: Array<React.JSX.Element>;
  clickFunctions: Array<Function>;
  startingIndex?: number;
}

export default function CarouselArc({
    items,
    clickFunctions,
    startingIndex = 0,
}: CarouselArcProps) {
  // lg:min-h-[600px] sm:min-h-[400px] max-h-[100vw]
  const [index, setIndex] = useState(startingIndex + items.length);
  const targetLength = 6 * items.length;

  const duplicatedItems = items.concat(items).concat(items).concat(items).concat(items).concat(items).map((item, i) => {
    let relativeIndex = ((i - index % targetLength) + targetLength) % targetLength;
    if (relativeIndex > targetLength / 2){
        relativeIndex -= targetLength;
    }
    const style = {
        left:`${(relativeIndex * Math.sin(0.07)) * 3000}px`, 
        rotate:`${relativeIndex * 0.07}rad`,
        top:`${(1 - Math.cos(Math.abs(relativeIndex) * 0.07)) * 3000}px`,
        width: relativeIndex == 0 ? '240px' : '160px',
        'z-index': relativeIndex == 0 ? '5' : '0',
    }

    const onClick = (i: number) => {
        if (relativeIndex === 0) {
            clickFunctions[i % items.length]();
        } else {
            setIndex(i);
        }
    }

    return <button onClick={() => {onClick(i)}} className={'absolute transition-all ' + (Math.abs(relativeIndex) > targetLength / 3 ? 'opacity-0' : 'opacity-100')} style={style} key={i}>{item}</button>;
  });

  const updateIndex = (newIndex: number) => {
    if (newIndex >= duplicatedItems.length) {
        newIndex = newIndex % duplicatedItems.length;
    } else if (newIndex < 0) {
        newIndex = Math.ceil(newIndex / duplicatedItems.length) * -1 * duplicatedItems.length + newIndex;
    }
    setIndex(newIndex);
  }

    
  return (
    <div>
        <div className='h-[300px]'>
            <div className='m-auto w-40 relative'>
                {duplicatedItems}
            </div>
        </div>
        <div>
            {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10' onClick={() => updateIndex(index - 1)}>Move Left</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10' onClick={() => updateIndex(index + 1)}>Move Right</button> */}
        </div>
    </div>
  );
}
