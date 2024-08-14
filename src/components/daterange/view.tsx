import { PropsWithChildren } from "react";
import { format, toDate } from "date-fns";
import clsx from "clsx";
import { useDateRange } from "../../stores/components/daterange";
import { Button } from "../button";
import style from "./view.module.scss";
import { ErrorFetch } from "../error";

interface Props extends PropsWithChildren {
  filter: (min: Date | string, max: Date | string) => void;
  badRange: boolean;
  setBadRange: (value: boolean) => void;
}

const View = ({ children, filter, badRange, setBadRange }: Props) => {
  const { min, max, setMin, setMax } = useDateRange((state) => state);
  const formatString = "yyyy-MM-dd";
  return (
    <>
      <div
        className={clsx([
          "uk-flex",
          "uk-flex-row@m",
          "uk-flex-column",
          style.gridControl,
        ])}
      >
        <input
          type="date"
          value={format(min, formatString)}
          onChange={(e) => setMin(toDate(e.currentTarget.value))}
          className={clsx(["uk-input"])}
        />
        <input
          type="date"
          value={format(max, formatString)}
          onChange={(e) => setMax(toDate(e.currentTarget.value))}
          className={clsx(["uk-input"])}
        />
        <Button onClick={() => filter(min, max)} icon="filter" />
      </div>
      {children}
      {badRange && (
        <ErrorFetch
          error="Fecha inicial debe ser antes que la final"
          cb={() => setBadRange(false)}
        />
      )}
    </>
  );
};

export { View };
