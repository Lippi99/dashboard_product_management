import { Container } from "../../../styles/pages/dashboards";
import { Card } from "../../components/Card";
import { Sidebar } from "../../components/Sidebar";
import { Flex } from "../../components/Flex";
import { BiCaretUpCircle, BiCaretDownCircle } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { Table, Button } from "antd";

import { Box } from "../../components/Box";
import Head from "next/head";
import { AlertDialog } from "../../components/AlertDialog";
import { EditDialog } from "../../components/EditDialog";
import { useForm } from "react-hook-form";

export default function Dashboards() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({});

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const columns: any = [
    {
      title: "Produto",
      dataIndex: "title",
      key: "title",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Valor (Unitário)",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Total",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Data",
      dataIndex: "",
      key: "",
    },
    {
      title: "Ação",
      render: (t: any) => {
        return (
          <Flex gap="1">
            <EditDialog
              register={register}
              title="Bonequinho tal tal tal"
              action={() => console.log(t)}
            />
            <AlertDialog
              title="Atenção, você tem certeza?"
              description="Essa ação não pode ser desfeita. Isso vai fazer ser permanentemente deletado de sua conta."
              action={() => console.log(t)}
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
              title="Entradas"
              value="$2.598"
              percentage={10}
              sinceWhen="Since last week"
              image={<BiCaretUpCircle size="30px" color="#1cbb8c" />}
            />
            <Card
              title="Saídas"
              value="$2.598"
              percentage={-5.4}
              sinceWhen="Since last week"
              image={<BiCaretDownCircle size="30px" color="#dc3545" />}
            />
            <Card
              title="Total"
              value="$2.598"
              percentage={-5.4}
              sinceWhen="Since last week"
              image={
                <AiOutlineDollarCircle size="30px" color="rgb(105, 122, 141)" />
              }
            />
          </Flex>
          <Box
            css={{
              mt: "$8",
            }}
          >
            <Table
              columns={columns}
              dataSource={posts}
              pagination={{ current: 1, pageSize: 10 }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}
