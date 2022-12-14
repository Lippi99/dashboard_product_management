import { ReactNode } from "react";
import { styled } from "../../../stitches.config";
import { Flex } from "../Flex";
import { Container } from "./styles";

interface CardProps {
  title: string;
  value: string | number;
  image: ReactNode;
  percentage: number;
  sinceWhen: string;
}

export const Card = ({
  title,
  value,
  image,
  percentage,
  sinceWhen,
}: CardProps) => {
  const PercentageStyle = styled("span", {
    variants: {
      color: {
        earn: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "3rem",
          textAlign: "center",
          color: "#1cbb8c",
          fontWeight: 600,
          fontSize: "0.7rem",
          background: "rgba(28,187,140,.15)",
          marginRight: "$2",
          fontFamily: "$price",
        },
        loss: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "3rem",
          textAlign: "center",
          color: "#dc3545",
          fontWeight: 600,
          fontSize: "0.7rem",
          background: "rgba(220,53,69,.15)",
          marginRight: "$2",
          fontFamily: "$price",
        },
      },
    },
  });

  return (
    <Container>
      <Flex justify="between">
        <h2 className="title">{title}</h2>
        <div>{image}</div>
      </Flex>
      <h1 className="price">{value}</h1>
      {/* <Flex css={{ mt: "$4" }}>
        <PercentageStyle color={percentage > 0 ? "earn" : "loss"}>
          {percentage}%
        </PercentageStyle>
        <p className="sinceWhen">{sinceWhen}</p>
      </Flex> */}
    </Container>
  );
};
