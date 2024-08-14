import { PropsWithChildren } from "react";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  index: number;
}

const Row = ({ children, index }: Props) => {
  return (
    <div className={clsx(["alert", `alert-${index % 2 ? "light" : "dark"}`])}>
      {children}
    </div>
  );
};

export { Row };
