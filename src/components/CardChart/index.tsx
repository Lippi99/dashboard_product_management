import { ReactElement } from "react";
import { styled } from "../../../stitches.config";

interface CardChartProps {
  cardTitle: string;
  children: ReactElement;
}

export const CardChart = ({ cardTitle, children }: CardChartProps) => {
  const CardContainer = styled("div", {
    variants: {
      variant: {
        size: {
          maxWidth: "80rem",
          position: "relative",
          width: "100%",
          background: "White",
          padding: "1rem",
          borderRadius: "15px",
          boxShadow: "rgb(161 172 184 / 12%) 0px 0.125rem 0.375rem 0px",
          ".card-title": {
            fontFamily: "$general",
            fontSize: "0.7rem",
            marginTop: "$2",
            marginLeft: "$6",
            marginBottom: "$4",
          },

          ".card-body": {
            height: "400px",
          },
        },
      },
    },
  });

  return (
    <CardContainer variant="size">
      <header className="card-title">
        <h1>{cardTitle}</h1>
      </header>
      <div className="card-body">{children}</div>
    </CardContainer>
  );
};
