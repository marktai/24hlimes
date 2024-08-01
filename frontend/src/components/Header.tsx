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

export default function Component() {
  return (
    <div className='container mx-0 w-full max-w-full px-4 md:px-6 lg:px-8 sm:border-b-2'>
      <header className='flex h-20 w-full shrink-0 items-center px-4 md:px-6'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' className='sm:hidden'>
              <MenuIcon className='h-6 w-6' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <div className='font-bold absolute w-full ml-[-32px] text-center text-lg sm:hidden'>
            <text className='text-primary'>&#123;</text> Realistic Code{' '}
            <text className='text-primary'>&#125;</text>
          </div>
          <SheetContent side='left'>
            <Link href='#' prefetch={false}>
              <text className='font-bold'>
                <text className='text-primary'>&#123;</text> Realistic Code{' '}
                <text className='text-primary'>&#125;</text>
              </text>
            </Link>
            <div className='grid gap-4 py-6'>
              <Link
                href='https://venmo.com/?txn=pay&audience=friends&recipients=mark-tai&amount=5&note=Realistic%20Code'
                className='flex w-full items-center py-2 text-lg font-semibold'
                prefetch={false}
              >
                Pricing
              </Link>
              <Link
                href='https://www.marktai.com'
                className='flex w-full items-center py-2 text-lg font-semibold'
                prefetch={false}
              >
                Blog
              </Link>
              <ButtonLink href='https://schedule.marktai.com' variant='accent'>
                <text className='font-semibold'>Schedule demo</text>
              </ButtonLink>
            </div>
          </SheetContent>
        </Sheet>
        <Link href='#' className='mr-6 hidden sm:flex' prefetch={false}>
          <text className='font-bold'>
            <text className='text-primary'>&#123;</text> Realistic Code{' '}
            <text className='text-primary'>&#125;</text>
          </text>
        </Link>
        <NavigationMenu className='hidden sm:flex ml-auto'>
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href='https://venmo.com/?txn=pay&audience=friends&recipients=mark-tai&amount=5&note=Realistic%20Code'
                className='font-semibold'
                prefetch={false}
              >
                Pricing
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href='https://www.marktai.com'
                className='font-semibold'
                prefetch={false}
              >
                Blog
              </Link>
            </NavigationMenuLink>

            <ButtonLink href='https://schedule.marktai.com' variant='accent'>
              <text className='font-semibold'>Schedule demo</text>
            </ButtonLink>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </div>
  );
}

function MenuIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}
