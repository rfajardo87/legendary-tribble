import { useContext } from "react";
import { EmptyState } from "../../components/empty";
import { Spin } from "../../components/spin";
import { Table } from "../../components/table";
import { Props } from "../../types/api";
import { GenericType } from "../../types/components/generic";
import { BarChart } from "./chart/bar";
import { MetaAdsCtx } from "../../stores/meta/ads";
import { ErrorFetch } from "../../components/error";
import { Card } from "../../components/card";

const View = ({ isLoading, error }: Props<never>) => {
  const { anuncios } = useContext(MetaAdsCtx);

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <ErrorFetch error={(error as Error).message} />;
  }
  if (anuncios.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <Card>
        <Table
          headers={[
            "Nombre",
            "alcance",
            "participacion",
            "gasto",
            "conversiones",
          ]}
          data={anuncios as unknown as GenericType[]}
        />
      </Card>
      <Card>
        <BarChart />
      </Card>
    </>
  );
};

export { View };
