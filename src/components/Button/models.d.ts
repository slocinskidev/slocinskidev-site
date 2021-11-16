import { ButtonBaseProps } from 'common/ButtonBase/models.d';

export namespace BUTTON {
  export enum VARIANT {
    LINK = 'link',
    CONTAINED = 'contained',
    OUTLINE = 'outline',
  }
}

export interface ButtonProps extends ButtonBaseProps {
  variant?: BUTTON.VARIANT;
  icon?: boolean;
  link?: string;
  customClass?: string;
}
