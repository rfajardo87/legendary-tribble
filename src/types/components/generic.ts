import { PropsWithChildren } from "react";

interface GenericType {
  [key: string]: unknown;
}

interface ExtraClass {
  extraClass?: string;
}

interface ExtraClassWithChildren extends ExtraClass, PropsWithChildren {}

export type { GenericType, ExtraClass, ExtraClassWithChildren };
