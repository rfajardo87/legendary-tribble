import clsx from "clsx";
import { PropsWithChildren, useContext } from "react";
import { Button, SIZE, STYLE } from "../button";
import { CompareBaseCtx, CompareVsCtx } from "../../stores/components/compare";
import { ICONSIZE } from "../icon";

interface Props extends PropsWithChildren {
  options: unknown[];
}

enum GROUP {
  BASE = "Base",
  REF = "Referencia",
}

const View = ({ options }: Props) => {
  const { value: base, setValue: setBase } = useContext(CompareBaseCtx);
  const { value: vs, setValue: setVs } = useContext(CompareVsCtx);

  const isSelected = (option: unknown, group: GROUP) => {
    const current = group === GROUP.BASE ? base : vs;
    return option === current ? "circle-dot" : undefined;
  };

  const disableOpposite = (option: unknown, group: GROUP) => {
    const currentOpposite = group === GROUP.BASE ? vs : base;
    return option === currentOpposite;
  };

  return (
    <>
      <div className={clsx(["uk-flex", "uk-flex-column"])}>
        <span>Comparar</span>
        <div className={clsx(["uk-flex", "uk-flex-column", "uk-flex-around"])}>
          <div>
            <Button
              text="Todos"
              onClick={() => {
                setBase(undefined);
                setVs(undefined);
              }}
              size={SIZE.SMALL}
            />
          </div>
          <span>{GROUP.BASE}</span>
          <div className={clsx(["uk-button-group"])}>
            {options.map((button) => (
              <Button
                size={SIZE.SMALL}
                key={`${button}`}
                text={`${button}`}
                onClick={() => setBase(button)}
                icon={isSelected(button, GROUP.BASE)}
                disabled={disableOpposite(button, GROUP.BASE)}
                iconSize={ICONSIZE.XS}
              />
            ))}
          </div>
          <span>{GROUP.REF}</span>
          <div className={clsx(["uk-button-group"])}>
            {options.map((button) => (
              <Button
                size={SIZE.SMALL}
                key={`${button}`}
                text={`${button}`}
                onClick={() => setVs(button)}
                icon={isSelected(button, GROUP.REF)}
                disabled={disableOpposite(button, GROUP.REF)}
                iconSize={ICONSIZE.XS}
                style={STYLE.DEFAULT}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { View, type Props };
