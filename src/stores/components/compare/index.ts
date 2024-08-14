import { createContext } from "react";

const initValue = {
  value: undefined as unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setValue: (value: unknown) => {},
};

const CompareBaseCtx = createContext<typeof initValue>(initValue);
const CompareBaseCtxProvider = CompareBaseCtx.Provider;
const CompareVsCtx = createContext<typeof initValue>(initValue);
const CompareVsCtxProvider = CompareVsCtx.Provider;

export {
  CompareBaseCtx,
  CompareVsCtx,
  CompareBaseCtxProvider,
  CompareVsCtxProvider,
};
