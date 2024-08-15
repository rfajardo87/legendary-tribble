import { PropsWithChildren } from "react";
import { format, toDate } from "date-fns";
import clsx from "clsx";
import { maxMin, useDateRange } from "../../stores/components/daterange";
import style from "./view.module.scss";
import { ErrorFetch } from "../error";

interface Props extends PropsWithChildren {
  badRange: boolean;
  setBadRange: (value: boolean) => void;
  compareDates: (max: maxMin, min: maxMin) => boolean;
}

const View = ({ children, badRange, setBadRange, compareDates }: Props) => {
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
          onChange={(e) => {
            const thisValue = toDate(e.currentTarget.value);
            if (compareDates(max, thisValue)) {
              setMin(toDate(e.currentTarget.value));
            }
          }}
          className={clsx(["uk-input"])}
        />
        <input
          type="date"
          value={format(max, formatString)}
          onChange={(e) => {
            const thisValue = e.currentTarget.value;
            if (compareDates(thisValue, min)) {
              setMax(toDate(e.currentTarget.value));
            }
          }}
          className={clsx(["uk-input"])}
        />
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
