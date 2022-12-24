import { ReactNode } from "react";
import { styled } from "../../../stitches.config";
import { Flex } from "../Flex";
import { Container } from "./styles";

interface CardProps {
  title: string;
  value: string | number;
  image?: ReactNode;
  percentage: number;
  sinceWhen: string;
}

export const Card = ({ title, value, image }: CardProps) => {
  return (
    <Container>
      <Flex css={{ height: "2rem" }} justify="between">
        <h2 className="title">{title}</h2>
        <div>{image}</div>
      </Flex>
      <h1 className="price">{value}</h1>
    </Container>
  );
};
