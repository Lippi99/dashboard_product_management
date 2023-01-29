import {
  Bar,
  BarChart as RechartBar,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { numberWithCommas } from "../../../utils/number";
import { TooltipContainer } from "../BarChart/styles";

interface BarChartProps {
  data: Array<unknown>;
}

export const BarChartAllYear = ({ data }: BarChartProps) => {
  const barColors = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#FFFF00",
    "#FFC0CB",
    "#DDF1",
    "#F41",
    "#3801ff11",
    "#ff00c811",
    "#ff000011",
    "#009d86da",
    "#91836111",
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <TooltipContainer>
          <p className="intro">
            Lucro líquido: R$ {numberWithCommas(payload[0].value, 2)}
          </p>
        </TooltipContainer>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartBar
        data={data}
        width={800}
        height={400}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="month" tickFormatter={(label) => `${label}`} />
        <XAxis dataKey="_id.year" tickFormatter={(label) => `${label}`} />
        <YAxis
          tickFormatter={(value) => {
            return numberWithCommas(value, 1);
          }}
        />
        <Tooltip
          wrapperStyle={{
            boxShadow: "rgb(161 172 184 / 12%) 0px 0.125rem 0.375rem 0px",
            outlineColor: "transparent",
            color: "black",
            fontWeight: 600,
            fontFamily: "Raleway" || "sans-serif",
          }}
          content={<CustomTooltip />}
          cursor={{ fill: "transparent" }}
        />
        <Bar dataKey="total">
          {data &&
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
            ))}
        </Bar>
      </RechartBar>
    </ResponsiveContainer>
  );
};
