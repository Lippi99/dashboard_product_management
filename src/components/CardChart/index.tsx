import { ReactElement } from "react";
import { CardContainer } from "./styles";

interface CardChartProps {
  cardTitle: string;
  children: ReactElement;
}

export const CardChart = ({ cardTitle, children }: CardChartProps) => {
  return (
    <CardContainer>
      <header className="card-title">
        <h1>{cardTitle}</h1>
      </header>
      <div className="card-body">{children}</div>
    </CardContainer>
  );
};
