import { Container } from "./styles";
import { css } from "../../../stitches.config";
import { IoMdLogOut } from "react-icons/io";
import { Box } from "../Box";
import nookies from "nookies";
import Router, { useRouter } from "next/router";
import { Tooltip } from "antd";
import NextLink from "next/link";
import { useSidebar } from "../../contexts/Sidebar";

const logout = () => {
  nookies.destroy(null, "doceifancia.auth");
  Router.push("/");
};
export const Sidebar = () => {
  const ClientRouter = useRouter();
  const { collapsed } = useSidebar();

  const item = css({
    variants: {
      variant: {
        active: {
          color: "#FC8F46",
          display: "block",
          background: "$salmon",
          padding: "$4 0 $4 0",
        },
        notActive: {
          color: "#697a8d",
          display: "block",
          padding: "$4 0 $4 0",
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
      <ul className="menu">
        <li
          className={item({
            variant:
              ClientRouter.pathname === "/dashboards" ? "active" : "notActive",
          })}
        >
          <NextLink
            style={{ color: "#FC8F46" }}
            className="item"
            href="/dashboards"
          >
            {collapsed ? "Dash..." : "Dashboards"}
          </NextLink>
        </li>
        <li
          className={item({
            variant:
              ClientRouter.pathname === "/table" ? "active" : "notActive",
          })}
        >
          <NextLink style={{ color: "#FC8F46" }} className="item" href="/table">
            Tabela
          </NextLink>
        </li>
        <Box css={{ position: "absolute", left: 0, right: 0, bottom: 30 }}>
          <Tooltip placement="top" title="Sair">
            <IoMdLogOut onClick={logout} color="#ff4d4f" size="1.3rem" />
          </Tooltip>
        </Box>
      </ul>
    </Container>
  );
};
