import { ReactNode, useState } from "react";
import { Box } from "../Box";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Layout, Menu, MenuProps } from "antd";
import NextImage from "next/image";
import { css } from "../../../stitches.config";
import { useSidebar } from "../../contexts/Sidebar";

interface BaseLayoutProps {
  children: ReactNode;
}
const { Header: Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const { collapsed, setCollapsed } = useSidebar();

  return (
    <Layout hasSider>
      <Sider
        style={{
          height: "100%",
          position: "fixed",
          zIndex: 100,
          overflow: "hidden",
          left: 0,
          top: 0,
          bottom: 0,
          background: "#fff",
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Box
          css={{
            padding: "5px",
            textAlign: "center",
            position: "relative",
            zIndex: "100",
          }}
        >
          <NextImage
            className="logo"
            width={150}
            height={80}
            alt="logo"
            src="/icons/logo.svg"
          />
        </Box>

        <Menu
          style={{ background: "#fff" }}
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <Sidebar />
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header />
        <Content>
          <Box css={{ ml: "11rem", mt: "6rem" }}>{children}</Box>
        </Content>
      </Layout>
    </Layout>
  );
};
