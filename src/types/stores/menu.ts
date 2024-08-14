export enum EMenu {
  MAIN,
  GOOGLE,
  GOOGLEADS,
  METAADS,
  CRM,
  ERROR
}

export interface IMenuStore {
  current: EMenu;
  navigate: (current: EMenu) => void;
}
