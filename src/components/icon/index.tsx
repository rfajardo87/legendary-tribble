import clsx from "clsx";

enum ICONSIZE {
  XS2 = "2xs",
  XS = "xs",
  SM = "sm",
  LG = "lg",
  XL = "xl",
  XL2 = "2xl",
}

interface Props {
  icon: string;
  brand?: boolean;
  extraClass?: string;
  size?: ICONSIZE;
}

const Icon = ({ icon, extraClass, brand, size }: Props) => {
  return (
    <i
      className={clsx([
        `fa-${brand ? "brands" : "solid"}`,
        `fa-${icon}`,
        size && `fa-${size}`,
        extraClass,
      ])}
    ></i>
  );
};

export { Icon, ICONSIZE };
