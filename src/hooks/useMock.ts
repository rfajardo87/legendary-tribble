import { DataHook } from "../types/hooks";

const useMock = <T>(data: DataHook, mock: unknown) => {
  if (import.meta.env.PROD) {
    const dataServer = data?.data as DataHook;
    return dataServer?.data as T;
  }

  return mock as T;
};

export { useMock };
