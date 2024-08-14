import clsx from "clsx";
import { Icon, ICONSIZE } from "../icon";

export enum SIZE {
  LARGE = "large",
  SMALL = "small",
}

export enum STYLE {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  TEXT = "text",
  LINK = "link",
}

interface Props {
  icon?: string;
  iconSize?: ICONSIZE;
  text?: string;
  size?: SIZE;
  style?: STYLE;
  disabled?: boolean;
  onClick: () => void;
}
const Button = ({
  icon,
  iconSize,
  text,
  size,
  style = STYLE.PRIMARY,
  disabled,
  onClick,
}: Props) => (
  <button
    disabled={disabled}
    type="button"
    onClick={onClick}
    className={clsx([
      "uk-button",
      `uk-button-${style}`,
      size && `uk-button-${size}`,
    ])}
  >
    {icon && (
      <Icon
        icon={icon}
        size={iconSize}
        extraClass={clsx(["uk-margin-right"])}
      />
    )}
    {text}
  </button>
);

export { Button };
