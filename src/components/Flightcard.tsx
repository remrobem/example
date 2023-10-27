'use client';

import { CircleIcon } from '@radix-ui/react-icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export function Flightcard() {
  return (
    <Card>
      <CardHeader className='grid items-start gap-4 space-y-0'>
        <div className='space-y-1'>
          <CardTitle>Indigo offers</CardTitle>
          <CardDescription>
            Get upto 10% off on indigo app bookings
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex space-x-4 text-sm text-muted-foreground'>
          <div className='flex items-center'>
            <CircleIcon className='mr-1 h-3 w-3 fill-sky-400 text-sky-400' />
            Mobikwik
          </div>
          <div>Expires on 30/12/10</div>
        </div>
      </CardContent>
    </Card>
  );
}
