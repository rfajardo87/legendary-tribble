import { GenericType } from "../types/components/generic";

const convertToDataTable = (data: unknown[]): GenericType[] => {
  return data as unknown as GenericType[];
};

export { convertToDataTable };
