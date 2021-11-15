export namespace LOGO {
  export enum VARIANT {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
  }
}
export interface LogoProps {
  alt: string;
  variant?: LOGO.VARIANT;
  url?: string;
  customClass?: string;
}
