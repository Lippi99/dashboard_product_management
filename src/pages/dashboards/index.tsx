//components
import { Container, Labor, Text } from "../../../styles/pages/dashboards";
import { Card } from "../../components/Card";
import { Sidebar } from "../../components/Sidebar";
import { Flex } from "../../components/Flex";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Header } from "../../components/Header";
import { useState } from "react";
import { Table, Spin } from "antd";
import { Box } from "../../components/Box";
import Head from "next/head";
import { AlertDialog } from "../../components/AlertDialog";
import { EditDialog } from "../../components/EditDialog";
import { CreateDialog } from "../../components/CreateDialog";

import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteProduct,
  getAllProducts,
  getWidgetProduct,
} from "../../services/product";
import { numberWithCommas } from "../../utils/number";

interface ProductID extends ProductProps {
  id: string;
  data: ProductProps;
}

interface ProductProps {
  quantity: number;
  productName: string;
  price: number;
  materialPrice: number;
  commission: number;
  labor: number;
}

export default function Dashboards() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const queryClient = useQueryClient();

  const {
    data: products,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["getProductList", page, pageSize],
    queryFn: () => getAllProducts(page, pageSize),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
  });

  const {
    data: widget,
    isLoading: isWidgetLoading,
    isFetching: isWidgeFetching,
  } = useQuery({
    queryKey: ["productWidget"],
    queryFn: getWidgetProduct,
    refetchOnWindowFocus: false,
  });

  const { mutate, isLoading: isDeletingLoading } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getProductList"],
      }),
        queryClient.invalidateQueries({ queryKey: ["productWidget"] });
    },
  });

  const columns: any = [
    {
      title: "Quantidade",
      dataIndex: "quantity",
      key: "quantity",
      render: (text: string) => <Text>{text}</Text>,
    },
    {
      title: "Produto",
      dataIndex: "productName",
      key: "productName",
      render: (text: string) => <Text>{text}</Text>,
    },
    {
      title: "Valor do produto",
      dataIndex: "price",
      key: "price",
      render: (text: string) => <Text>R$ {text}</Text>,
    },
    {
      title: "Material",
      dataIndex: "materialPrice",
      key: "materialPrice",
      render: (text: string) => <Text>R$ {text}</Text>,
    },
    {
      title: "Comissão",
      dataIndex: "commission",
      key: "commission",
      render: (text: string) => <Text>R$ {text}</Text>,
    },
    {
      title: "Mão de obra",
      dataIndex: "labor",
      key: "labor",
      render: (text: string) => <Text>R$ {text}</Text>,
    },
    {
      title: "Lucro",
      dataIndex: "profit",
      key: "profit",
      render: (text: number) => (
        <Labor variant={`${text > 0 ? "green" : "danger"}`}>
          R$ {text.toFixed(2)}
        </Labor>
      ),
    },

    {
      title: "Ação",
      render: (product: ProductID) => {
        return (
          <Flex gap="1">
            <EditDialog data={product as any} title={product.productName} />
            <AlertDialog
              title="Atenção, você tem certeza?"
              description="Essa ação não pode ser desfeita. Isso vai fazer ser permanentemente deletado de sua conta."
              action={() => mutate(product.id)}
            />
          </Flex>
        );
      },

      key: "userId",
    },
  ];

  return (
    <>
      <Head>
        <title>Dashboards</title>
        <link rel="shortcut icon" href="/logo.ico" />
        <meta
          property="og:title"
          content="dashboards management"
          key="feltro"
        />
      </Head>
      <Container>
        <Sidebar />
        <Header />
        <Box css={{ m: "$7" }}>
          <Spin spinning={isWidgetLoading || isWidgeFetching}>
            <Flex
              css={{
                "@bp2": {
                  justifyContent: "space-between",
                },
                "@bp7": {
                  flexWrap: "wrap",
                  justifyContent: "center",
                },
              }}
              gap="7"
            >
              <Card
                title="Total de produtos"
                value={"R$" + numberWithCommas(widget?.price! || 0)}
                percentage={10}
                sinceWhen="Since last week"
              />
              <Card
                title="Comissão total"
                value={"R$" + numberWithCommas(widget?.commission! || 0)}
                percentage={-5.4}
                sinceWhen="Since last week"
              />
              <Card
                title="Lucro"
                value={"R$" + numberWithCommas(widget?.profit! || 0)}
                percentage={-5.4}
                sinceWhen="Since last week"
                image={
                  <AiOutlineDollarCircle
                    size="30px"
                    color="rgb(105, 122, 141)"
                  />
                }
              />
            </Flex>
          </Spin>
          <Box
            css={{
              mt: "$5",
              mb: "$5",
            }}
          >
            <CreateDialog />
          </Box>

          <Spin
            tip="Carregando..."
            spinning={isLoading || isFetching || isDeletingLoading}
          >
            <Table
              columns={columns}
              dataSource={products?.data}
              pagination={{
                total: products?.count,
                current: page,
                pageSize: pageSize,
                showSizeChanger: true,
                onChange: (page: number, pageSize: number) => {
                  setPage(page);
                  setPageSize(pageSize);
                },
              }}
            />
          </Spin>
        </Box>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "doceifancia.auth": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
