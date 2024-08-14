import { useState } from "react";
import { View, type Props } from "./view";
import {
  CompareBaseCtxProvider,
  CompareVsCtxProvider,
} from "../../stores/components/compare";

const Compare = ({ children, options }: Props) => {
  const [base, setBase] = useState<unknown>(undefined);
  const [vs, setVs] = useState<unknown>(undefined);
  return (
    <CompareBaseCtxProvider value={{ value: base, setValue: setBase }}>
      <CompareVsCtxProvider value={{ value: vs, setValue: setVs }}>
        <View options={options} />
        {children}
      </CompareVsCtxProvider>
    </CompareBaseCtxProvider>
  );
};

export { Compare };
