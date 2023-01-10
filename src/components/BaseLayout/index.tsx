import { ReactNode } from "react";
import { Box } from "../Box";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Container } from "./styles";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Container>
      <Sidebar />
      <Header />
      <Box css={{ m: "$7" }}>{children}</Box>
    </Container>
  );
};
