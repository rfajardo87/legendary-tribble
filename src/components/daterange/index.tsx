import { PropsWithChildren, useState } from "react";
import { View } from "./view";
import { isBefore } from "date-fns";

const DateRange = ({ children }: PropsWithChildren) => {
  const [badRange, setBadRange] = useState(false);

  const compareDates = (max: Date | string, min: Date | string): boolean => {
    if (isBefore(max, min)) {
      setBadRange(true);
      return false;
    }
    return true;
  };
  
  return (
    <View
      children={children}
      compareDates={compareDates}
      badRange={badRange}
      setBadRange={setBadRange}
    />
  );
};

export { DateRange };
