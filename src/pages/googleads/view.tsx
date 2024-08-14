import { useContext } from "react";
import clsx from "clsx";
import { EmptyState } from "../../components/empty";
import { Spin } from "../../components/spin";
import { Table } from "../../components/table";
import { Props } from "../../types/api";
import { GenericType } from "../../types/components/generic";
import { BarChart } from "./chart/bar";
import { GoogleAdsCtx } from "../../stores/google/ads";
import { ErrorFetch } from "../../components/error";
import { Card } from "../../components/card";

const View = ({ isLoading, error }: Props<never>) => {
  const { campanas } = useContext(GoogleAdsCtx);

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <ErrorFetch error={(error as Error).message} />;
  }

  if (campanas.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <Card extraClass={clsx(["uk-margin-small", "uk-margin-small-top"])}>
        <Table
          headers={["Nombre", "Impresiones", "clicks", "Conversiones", "Costo"]}
          data={campanas as unknown as GenericType[]}
        />
      </Card>
      <Card>
        <BarChart />
      </Card>
    </>
  );
};

export { View };
