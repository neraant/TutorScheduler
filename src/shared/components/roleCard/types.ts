import type { ElementType } from 'react';

import type { UserRoles } from '@/entities/user';

export interface RoleCardProps {
  title: string;
  description: string;
  role: UserRoles;
  isSelected: boolean;
  icon: ElementType;
  onSelect: (selectedRole: UserRoles) => void;
}
