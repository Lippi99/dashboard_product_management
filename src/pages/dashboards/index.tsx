import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { BaseLayout } from "../../components/BaseLayout";
import { CardChart } from "../../components/CardChart";
import { BarChart } from "../../components/Charts/BarChart";
import { ChartContainer } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { mostProductsSold } from "../../services/dashboards";
import { Box } from "../../components/Box";
import { DatePicker, DatePickerProps, Empty } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const initialDate = dayjs().startOf("month").format("YYYY-MM-DD");
const endDate = dayjs().endOf("month").format("YYYY-MM-DD");
const currentMonth = dayjs().month();

export default function Dashboards() {
  const [dateStart, setDateStart] = useState<string>(initialDate);
  const [dateEnd, setDateEnd] = useState<string>(endDate);
  const [dateMonth, setDateMonth] = useState<number>(currentMonth);

  const { data: products } = useQuery({
    queryKey: ["most-products-sold", dateStart, dateEnd],
    queryFn: () => mostProductsSold(dateStart, dateEnd),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  const handleChangeData: DatePickerProps["onChange"] = (date, dateString) => {
    const dateYear = dayjs(dateString).year();
    const dateMonth = dayjs(dateString).month() + 1;

    const dateStart = `${dateYear}-${dateMonth}-01`;
    const dateEnd = `${dateYear}-${dateMonth}-31`;

    setDateStart(dateStart);
    setDateEnd(dateEnd);
    setDateMonth(date?.month()!);
  };

  const months: { [key: number]: string } = {
    0: "Janeiro",
    1: "Fevereiro",
    2: "Março",
    3: "Abril",
    4: "Maio",
    5: "Junho",
    6: "Julho",
    7: "Agosto",
    8: "Setembro",
    9: "Outubro",
    10: "Novembro",
    11: "Dezembro",
  };

  return (
    <>
      <Head>
        <title>Dashboards</title>
        <link rel="shortcut icon" href="/logo.ico" />
        <meta property="og:title" content="dashboards chart" key="feltro" />
      </Head>

      <BaseLayout>
        <Box css={{ mb: "$5" }}>
          <DatePicker
            placeholder="Selecione o mês"
            onChange={handleChangeData}
            defaultValue={dayjs()}
            picker="month"
            allowClear={false}
          />
        </Box>
        <ChartContainer>
          <CardChart cardTitle={`Maiores vendas de ${months[dateMonth!]}`}>
            {products?.length == 0 ? (
              <Box
                css={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Empty description="Não encontrado" />
              </Box>
            ) : (
              <BarChart data={products!} />
            )}
          </CardChart>
        </ChartContainer>
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
