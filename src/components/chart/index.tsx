import ChartJS, { ChartTypeRegistry } from "chart.js/auto";
import { useEffect } from "react";

interface Props {
  type: keyof ChartTypeRegistry;
  data: any;
}

let chrt: ChartJS;
const Chart = ({ type, data }: Props) => {
  const chartCtx = "chartCtx";

  useEffect(() => {
    if (chrt) {
      chrt.clear();
      chrt.destroy();
    }
    chrt = new ChartJS(chartCtx, {
      type,
      data,
      options: {
        responsive: true,
      },
    });
  });

  return <canvas id={chartCtx}></canvas>;
};

export { Chart };
