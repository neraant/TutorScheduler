import { cn } from '@/shared/lib/utils';

import type { RoleCardProps } from './types';

export const RoleCard = ({
  title,
  description,
  role,
  isSelected,
  icon: Icon,
  onSelect,
}: RoleCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(role)}
      className={cn(
        'flex h-full flex-1 cursor-pointer flex-col items-start justify-start gap-1 rounded-lg p-4 outline transition-all',
        isSelected ? 'outline-primary bg-primary/5 outline-3' : 'outline-border'
      )}
    >
      <div
        className={cn(
          'mb-1 rounded-full p-2 transition-colors',
          isSelected ? 'bg-primary/10' : 'bg-muted'
        )}
      >
        <Icon
          className={cn(
            'h-5 w-5 transition-colors',
            isSelected ? 'text-primary' : 'text-muted-foreground'
          )}
        />
      </div>
      <h4 className="text-md text-left font-semibold">{title}</h4>
      <p className="text-left text-sm text-black/50">{description}</p>
    </button>
  );
};
