import clsx from "clsx";
import { Icon } from "../icon";

const EmptyState = () => {
  return (
    <div className={clsx(["uk-alert", "uk-alert-primary"])}>
      <Icon icon="circle-info" extraClass={clsx(["uk-margin-right"])} />
      No Data Found
    </div>
  );
};

export { EmptyState };
