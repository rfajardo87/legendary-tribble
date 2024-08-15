import { isAfter, isBefore, isEqual } from "date-fns";
import { maxMin } from "../stores/components/daterange";
import { GenericType } from "../types/components/generic";

const convertToDataTable = (data: unknown[]): GenericType[] => {
  return data as unknown as GenericType[];
};

const isBetween = (
  date: maxMin,
  min: maxMin,
  max: maxMin,
  inclusive = false
): boolean => {
  if (inclusive && (isEqual(date, min) || isEqual(date, max))) {
    return true;
  }
  return isAfter(date, min) && isBefore(date, max);
};

export { convertToDataTable, isBetween };
