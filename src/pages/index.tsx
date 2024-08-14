import { EMenu } from "../types/stores/menu";
import { useMenuStore } from "../stores/menu";
import { GooglePage } from "./google";
import { GoogleAds } from "./googleads";
import { MetaAds } from "./metaads";
import { CrmData } from "./crm";
import { Sample } from "./sample";

const Pages = () => {
  const current = useMenuStore((state) => state.current);

  if (current === EMenu.GOOGLEADS) {
    return <GoogleAds />;
  }

  if (current === EMenu.METAADS) {
    return <MetaAds />;
  }

  if (current === EMenu.CRM) {
    return <CrmData />;
  }
  if (current === EMenu.ERROR) {
    return <Sample />;
  }

  return <GooglePage />;
};

export { Pages };
