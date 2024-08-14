import clsx from "clsx";
import { EmptyState } from "../../components/empty";
import { Spin } from "../../components/spin";
import { Props } from "../../types/google/view";
import { Container } from "../../components/container";
import { Tabs } from "./enums/tabs";
import { Demography } from "./demography";
import { GoogleChart } from "./chart";
import { useContext } from "react";
import { GoogleDataCtx } from "../../stores/google/data";
import { ErrorFetch } from "../../components/error";
import { Table } from "../../components/table";
import { GenericType } from "../../types/components/generic";
import { convertToDataTable } from "../../helpers/fns";
import { Card } from "../../components/card";
import style from "./view.module.scss";
import { Head } from "../../components/head";
import { Icon } from "../../components/icon";
import { DateRange } from "../../components/daterange";

const View = ({
  isLoading,
  error,
  innerTabs,
  onClickAction,
  filter,
}: Props) => {
  const { current, data } = useContext(GoogleDataCtx);
  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <ErrorFetch error={(error as Error).message} />;
  }

  if (!data) {
    return <EmptyState />;
  }

  const currentData = () => {
    if (current === Tabs.Sessiones) {
      const sesiones = data.sesiones.map((sesion) => ({
        ...sesion,
        tasaRebote: `${sesion.tasaRebote * 100} %`,
      }));
      return (
        <DateRange filter={() => filter && filter()}>
          <Table
            headers={["Fecha", "Sesiones", "Tasa rebote"]}
            data={sesiones as unknown as GenericType[]}
          />
        </DateRange>
      );
    }

    if (current === Tabs.Demografia) {
      return <Demography />;
    }

    return (
      <DateRange filter={() => filter && filter()}>
        <Table
          headers={["Fecha", "Vistas"]}
          data={convertToDataTable(data.vistasPagina)}
        />
      </DateRange>
    );
  };

  return (
    <Container>
      <Head>
        <Icon icon="google" brand /> Google
      </Head>
      <Container extraClass={clsx(["uk-margin-small"])}>
        <ul className={clsx(["uk-tab"])} data-uk-tab>
          {innerTabs.map((tab) => (
            <li className={clsx(["nav-item"])} key={tab.type}>
              <a
                href="#"
                className={clsx([
                  "nav-link",
                  current === tab.type && ["active", style.activeTab],
                ])}
                onClick={(e) => {
                  onClickAction(e, tab.type);
                }}
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <Container extraClass={clsx(["uk-padding", "uk-padding-remove-top"])}>
        <Card
          extraClass={clsx([
            "uk-height-max-large",
            "uk-flex",
            "uk-flex-row",
            "uk-flex-center",
            "uk-margin-remove@m",
            "uk-margin-auto",
          ])}
        >
          <GoogleChart />
        </Card>
        <Card extraClass={clsx(["uk-margin-auto", "uk-margin-remove@m"])}>
          {currentData()}
        </Card>
      </Container>
    </Container>
  );
};

export { View };
