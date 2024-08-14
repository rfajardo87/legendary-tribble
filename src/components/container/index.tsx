import { PropsWithChildren } from "react";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  extraClass?: string | string[];
}

const Container = ({ children, extraClass }: Props) => {
  return (
    <div className={clsx(["uk-container", extraClass])}>
      {children}
    </div>
  );
};

export { Container };
