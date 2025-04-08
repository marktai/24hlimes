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


type ModalProps = {
    enabled: Boolean;
    disable: Function;
    children?: React.JSX.Element|null;
}

export default function Modal({
    enabled,
    disable, 
    children=null,
}: ModalProps) {
    
    return (
        <div>
            <div onClick={() => {disable()}} className={'fixed x-0 y-0 h-screen w-screen transition-all ' + (enabled ? 'bg-[rgba(0,0,0,0.9)] z-[49]' : 'bg-[rgba(0,0,0,0)] z-0')}>
                <div className={'relative transition-all p-20 w-full h-full ' + (enabled ? 'left-0' : 'left-[-100vw]')}>
                    <div onClick={(e) => {e.stopPropagation()}} className='bg-[#FEF4D8] w-full max-h-full overflow-y-scroll rounded-[80px] p-8 border-[#CA0003] border-l-8 '>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
