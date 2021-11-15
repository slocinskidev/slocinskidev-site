import { ReactNode } from 'react';

export interface ButtonProps {
  className?: string;
  children?: ReactNode;
  handler?:
    | (() => void)
    | ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void);
  type?: 'button' | 'submit';
  ariaLabel?: string;
}
