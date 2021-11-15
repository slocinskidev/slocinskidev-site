export interface LinkProps {
  url: string;
  ariaLabel?: string;
  activeClass?: string;
  customClass?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
