import { PropsWithChildren, useState } from "react";
import { View } from "./view";
import { isBefore } from "date-fns";

interface Props extends PropsWithChildren {
  filter: () => void;
}

const DateRange = ({ children, filter }: Props) => {
  const [badRange, setBadRange] = useState(false);

  const compareDates = (max: Date | string, min: Date | string) => {
    if (isBefore(min, max)) {
      setBadRange(true);
      return;
    }
    filter();
  };
  return (
    <View
      children={children}
      filter={compareDates}
      badRange={badRange}
      setBadRange={setBadRange}
    />
  );
};

export { DateRange };
