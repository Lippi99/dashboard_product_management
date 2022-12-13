import { Container } from "../../../styles/pages/dashboards";
import { Card } from "../../components/Card";
import { Sidebar } from "../../components/Sidebar";
import { Flex } from "../../components/Flex";
import { BiCaretUpCircle, BiCaretDownCircle } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Header } from "../../components/Header";

export default function Dashboards() {
  return (
    <Container>
      <Sidebar />
      <Header />
      <Flex
        wrap="wrap"
        css={{
          mt: "$6",
          ml: "$6",
          "@bp8": {
            justifyContent: "center",
          },
          "@bp4": {
            justifyContent: "normal",
          },
        }}
        gap="7"
      >
        <Card
          title="Earning"
          value="$2.598"
          percentage={10}
          sinceWhen="Since last week"
          image={<BiCaretUpCircle size="30px" color="#1cbb8c" />}
        />
        <Card
          title="Loss"
          value="$2.598"
          percentage={-5.4}
          sinceWhen="Since last week"
          image={<BiCaretDownCircle size="30px" color="#dc3545" />}
        />
        <Card
          title="Sales"
          value="$2.598"
          percentage={-5.4}
          sinceWhen="Since last week"
          image={
            <AiOutlineDollarCircle size="30px" color="rgb(105, 122, 141)" />
          }
        />
      </Flex>
    </Container>
  );
}
