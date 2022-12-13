import { Container, ContainerHeader } from "./styles";
import NextImage from "next/image";
import { css } from "../../../stitches.config";
import { useState } from "react";

export const Sidebar = () => {
  const [navigate, setNavigate] = useState("dashboards");

  const item = css({
    variants: {
      variant: {
        active: {
          color: "#FC8F46",
          display: "block",
          background: "$salmon",
          padding: "$2 0 $2 0",
        },
        notActive: {
          color: "#697a8d",
          display: "block",
          padding: "$2 0 $2 0",
          transition: "200ms",
          "&:hover": {
            background: "rgba(67,89,113,.04)",
          },
        },
      },
    },
  });

  return (
    <Container>
      <ContainerHeader>
        <NextImage
          className="logo"
          width={150}
          height={80}
          alt="logo"
          src="/icons/logo.svg"
        />
      </ContainerHeader>
      <ul className="menu">
        <li className="item">
          <a
            onClick={() => setNavigate("dashboards")}
            className={item({
              variant: navigate === "dashboards" ? "active" : "notActive",
            })}
            href="#"
          >
            Dashboards
          </a>
        </li>
        <li className="item">
          <a
            onClick={() => setNavigate("table")}
            className={item({
              variant: navigate === "table" ? "active" : "notActive",
            })}
            href="#"
          >
            Tabela
          </a>
        </li>
        <li className="item">
          <a
            onClick={() => setNavigate("account")}
            className={item({
              variant: navigate === "account" ? "active" : "notActive",
            })}
            href="#"
          >
            Conta
          </a>
        </li>
      </ul>
    </Container>
  );
};
