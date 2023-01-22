//components
import { Labor, Text } from "../../../styles/pages/table";
import { Flex } from "../../components/Flex";
import { useState } from "react";
import { Table, Spin, DatePicker, DatePickerProps } from "antd";
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
import { dateFormat } from "../../utils/date";
import { BaseLayout } from "../../components/BaseLayout";
import { Widget } from "../../components/Widget";
import dayjs from "dayjs";
import { Box } from "../../components/Box";

interface ProductProps {
  id: string;
  quantity: number;
  productName: string;
  price: number;
  materialPrice: number;
  commission: number;
  labor: number;
}

interface TableProduct {
  title: string;
  dataIndex?: string;
  key: string;
  render: (value: any) => JSX.Element;
}

const initialDate = dayjs().startOf("month").format("YYYY-MM-DD");

const endDate = dayjs().endOf("month").format("YYYY-MM-DD");

export default function Dashboards() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dateStart, setDateStart] = useState<string>(initialDate);
  const [dateEnd, setDateEnd] = useState<string>(endDate);

  const queryClient = useQueryClient();

  const {
    data: products,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["getProductList", page, pageSize, dateStart, dateEnd],
    queryFn: () => getAllProducts(page, pageSize, dateStart, dateEnd),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
  });

  const {
    data: widget,
    isLoading: isWidgetLoading,
    isFetching: isWidgeFetching,
  } = useQuery({
    queryKey: ["productWidget", dateStart, endDate],
    queryFn: () => getWidgetProduct(dateStart, dateEnd),
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

  const handleChangeData: DatePickerProps["onChange"] = (date, dateString) => {
    const dateYear = dayjs(dateString).year();
    const dateMonth = dayjs(dateString).month() + 1;

    const dateStart = `${dateYear}-${dateMonth}-01`;
    const dateEnd = `${dateYear}-${dateMonth}-31`;

    setDateStart(dateStart);
    setDateEnd(dateEnd);
  };

  const columns: TableProduct[] = [
    {
      title: "Quantidade",
      dataIndex: "quantity",
      key: "quantity",
      render: (text: number) => <Text>{numberWithCommas(text, 0)}</Text>,
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
      render: (text: number) => <Text>R$ {numberWithCommas(text, 2)}</Text>,
    },
    {
      title: "Material",
      dataIndex: "materialPrice",
      key: "materialPrice",
      render: (text: number) => <Text>R$ {numberWithCommas(text, 2)}</Text>,
    },
    {
      title: "Comissão",
      dataIndex: "commission",
      key: "commission",
      render: (text: number) => <Text>R$ {numberWithCommas(text, 2)}</Text>,
    },
    {
      title: "Mão de obra",
      dataIndex: "labor",
      key: "labor",
      render: (text: number) => <Text>R$ {numberWithCommas(text, 2)}</Text>,
    },
    {
      title: "Data",
      dataIndex: "date",
      key: "date",
      render: (text: Date) => <Text> {dateFormat(text, "DD/MM/YYYY")}</Text>,
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
      render: (product: ProductProps) => {
        return (
          <Flex gap="1">
            <EditDialog data={product} title={product.productName} />
            <AlertDialog
              title="Atenção, você tem certeza?"
              description="Essa ação não pode ser desfeita. Isso vai fazer ser permanentemente deletado de sua conta."
              action={() => mutate(product.id)}
            />
          </Flex>
        );
      },

      key: "id",
    },
  ];

  return (
    <>
      <Head>
        <title>Tabela</title>
        <link rel="shortcut icon" href="/logo.ico" />
        <meta property="og:title" content="Table management" key="feltro" />
      </Head>
      <BaseLayout>
        <Spin spinning={isWidgetLoading || isWidgeFetching}>
          <Widget widget={widget!} />
        </Spin>

        <CreateDialog />

        <Box css={{ mb: "$5" }}>
          <DatePicker
            onChange={handleChangeData}
            defaultValue={dayjs()}
            placeholder="Selecione o mês"
            picker="month"
            allowClear={false}
          />
        </Box>

        <Spin
          tip="Carregando..."
          spinning={isLoading || isFetching || isDeletingLoading}
        >
          <Table
            rowKey="id"
            columns={columns}
            dataSource={products && products.data}
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
      </BaseLayout>
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
