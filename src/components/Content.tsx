'use client';

import Link from 'next/link';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Search } from './Search';
import { Button } from '@/components/ui/button';
// import { DatePickerWithRange } from './Datepicker';
import { DatePickerWithRange } from './DatePickerWithRange';
import { Flightcard } from './Flightcard';

const Content = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <Link href='home'>Home</Link>
        <span></span>
        <span>Flight Booking</span>
      </div>
      <h1 className='text-[40px]'>Flight Booking at Low-cost</h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <span className='text-[20px]'>➡️One Way</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className='text-[20px]'>🔄Round Trip</span>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className='flex flex-row gap-5 justify-center items-center'>
        <Search />
        <span className=''>🔄</span>
        <Search />
        <DatePickerWithRange />
        <button className='bg-black p-3'>Search Flight</button>
      </div>
      <div className='flex flex-row gap-5 p-10 justify-center items-center'>
        <Flightcard />
        <Flightcard />
        <Flightcard />
        <Flightcard />
      </div>
    </div>
  );
};

export default Content;
