import { Clock } from 'lucide-react';

import { cn } from '@/shared/lib/utils';

import type { LogoProps } from './types';

export const Logo = ({
  containerClassName,
  iconClassName,
  iconContainerClassName,
  textClassName,
}: LogoProps) => {
  return (
    <div
      className={cn(
        'mt-8 ml-8 flex items-center gap-2 self-start',
        containerClassName
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-lg bg-white/20 p-2',
          iconContainerClassName
        )}
      >
        <Clock className={cn('text-white', iconClassName)} />
      </div>

      <h2
        className={cn(
          'text-center text-xl leading-normal font-bold text-white',
          textClassName
        )}
      >
        TutorSchedule
      </h2>
    </div>
  );
};
