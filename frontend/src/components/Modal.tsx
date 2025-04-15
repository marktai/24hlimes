'use client';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tOnF6UPDszh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import React, { useEffect } from 'react';

type ModalProps = {
  enabled: boolean;
  disable: () => void;
  children?: React.JSX.Element | null;
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
};

export default function Modal({
  enabled,
  disable,
  children = null,
  scrollRef,
}: ModalProps) {
  useEffect(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) =>
      e.key === 'Escape' ? disable() : null,
    );
  });
  return (
    <div>
      <div
        onClick={() => {
          disable();
        }}
        className={
          'fixed x-0 y-0 h-screen w-screen transition-all duration-300 ' +
          (enabled ? 'bg-[rgba(0,0,0,0.9)] z-[49]' : 'bg-[rgba(0,0,0,0)] z-0')
        }
      >
        <div
          className={
            'relative transition-all duration-300 pb-10 md:pb-14 md:pl-14 md:pt-14 [@media(max-height:800px)]:md:pb-0 w-full h-full ' +
            (enabled
              ? 'top-0 md:right-0'
              : 'top-[-100vh] md:top-0 md:right-[-100vw]')
          }
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className='bg-[#FEF4D8] w-full max-h-full overflow-y-scroll md:rounded-l-[80px] rounded-b-[80px] md:rounded-r-none [@media(max-height:800px)]:md:rounded-b-none p-12 border-[#CA0003] border-b-8 md:border-b-0 md:border-l-8 '
            style={{ overscrollBehavior: 'contain' }}
            ref={scrollRef}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
