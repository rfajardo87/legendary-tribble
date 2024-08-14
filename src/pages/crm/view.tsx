import { useContext } from "react";
import { Container } from "../../components/container";
import { EmptyState } from "../../components/empty";
import { Spin } from "../../components/spin";
import { Table } from "../../components/table";
import { Props } from "../../types/api";
import { GenericType } from "../../types/components/generic";
import { BarChart } from "./chart/bar";
import { CrmDataCtx } from "../../stores/crm/data";
import { ErrorFetch } from "../../components/error";
import clsx from "clsx";
import { Icon } from "../../components/icon";
import { Card } from "../../components/card";
import { Head } from "../../components/head";

const View = ({ isLoading, error }: Props<never>) => {
  const { leads, tasaConversion } = useContext(CrmDataCtx);

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <ErrorFetch error={(error as Error).message} />;
  }

  if (leads.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <Head>
        <Icon icon="chalkboard-user" /> CRM
      </Head>
      <Card>
        <Container
          extraClass={clsx(["uk-margin-small", "uk-margin-small-top"])}
        >
          <div
            className={clsx(["uk-alert-primary", "uk-border-rounded"])}
            data-uk-alert
          >
            <h4>
              <Icon icon="circle-check" />
              Tasa de conversion: {tasaConversion}
            </h4>
          </div>
        </Container>
        <Table
          headers={["Nombre", "Costo adquisición", "Valor de vida"]}
          data={leads as unknown as GenericType[]}
        />
      </Card>
      <Card>
        <BarChart />
      </Card>
    </>
  );
};

export { View };
