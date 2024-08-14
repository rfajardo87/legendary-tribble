import clsx from "clsx";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  text?: string;
}

const Head = ({ text, children }: Props) => {
  return (
    <h1 className={clsx(["uk-heading-small", "uk-margin-small-top"])}>
      {children ?? text}
    </h1>
  );
};

export { Head };
