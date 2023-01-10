import { AiOutlineDollarCircle } from "react-icons/ai";
import { numberWithCommas } from "../../utils/number";
import { Card } from "../Card";
import { Flex } from "../Flex";

interface ProductProps {
  quantity: number;
  productName: string;
  price: number;
  profit?: number;
  materialPrice: number;
  commission: number;
  labor: number;
}

interface WidgetProps {
  widget: ProductProps;
}

export const Widget = ({ widget }: WidgetProps) => {
  return (
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
        value={"R$" + numberWithCommas(widget?.price! || 0, 2)}
      />
      <Card
        title="Comissão total"
        value={"R$" + numberWithCommas(widget?.commission! || 0, 2)}
      />
      <Card
        title="Lucro"
        value={"R$" + numberWithCommas(widget?.profit! || 0, 2)}
        image={<AiOutlineDollarCircle size="30px" color="rgb(105, 122, 141)" />}
      />
    </Flex>
  );
};
