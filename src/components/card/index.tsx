import clsx from "clsx";
import { ExtraClassWithChildren } from "../../types/components/generic";

const Card = ({ children, extraClass }: ExtraClassWithChildren) => {
  return (
    <div
      className={clsx([
        "uk-card",
        "uk-card-body",
        "uk-card-default",
        "uk-padding-small",
        "uk-margin-small",
        "uk-margin-small-top",
        extraClass,
      ])}
    >
      {children}
    </div>
  );
};

export { Card };
