import { Container, ContainerHeader } from "./styles";
import NextImage from "next/image";
import { css } from "../../../stitches.config";
import { IoMdLogOut } from "react-icons/io";
import { Box } from "../Box";
import nookies from "nookies";
import Router, { useRouter } from "next/router";
import { Tooltip } from "antd";
import NextLink from "next/link";

const logout = () => {
  nookies.destroy(null, "doceifancia.auth");
  Router.push("/");
};
export const Sidebar = () => {
  const ClientRouter = useRouter();

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
          <NextLink
            // onClick={() => setNavigate("dashboards")}
            className={item({
              variant:
                ClientRouter.pathname === "/dashboards"
                  ? "active"
                  : "notActive",
            })}
            href="/dashboards"
          >
            Dashboards
          </NextLink>
        </li>
        <li className="item">
          <NextLink
            className={item({
              variant:
                ClientRouter.pathname === "/table" ? "active" : "notActive",
            })}
            href="/table"
          >
            Tabela
          </NextLink>
        </li>
      </ul>
      <Box
        css={{
          cursor: "pointer",
          position: "absolute",
          left: "45%",
          bottom: "15%",
          right: 0,
        }}
      >
        <Tooltip placement="top" title="Sair">
          <IoMdLogOut onClick={logout} color="#ff4d4f" size="1.3rem" />
        </Tooltip>
      </Box>
    </Container>
  );
};
