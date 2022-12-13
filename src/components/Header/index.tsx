import { Avatar } from "../Avatar";
import { Flex } from "../Flex";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Flex css={{ padding: "0 $8" }} justify="end" align="end">
        <Avatar />
      </Flex>
    </Container>
  );
};
