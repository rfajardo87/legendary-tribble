import { createContext } from "react";

const initValue = {
  value: undefined as unknown,
  setValue: (value: unknown) => {
    console.log(value);
  },
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
