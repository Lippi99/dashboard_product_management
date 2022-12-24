import { useAuth } from "../../contexts/AuthContext";
import { Avatar } from "../Avatar";
import { Flex } from "../Flex";
import { Container } from "./styles";

export const Header = () => {
  const { user } = useAuth();
  return (
    <Container>
      <Flex
        css={{ marginLeft: "15rem", padding: "0 $8" }}
        justify="between"
        align="end"
      >
        <h1 className="personTitle">Olá, {user?.name}</h1>

        {user && <Avatar user={user} />}
      </Flex>
    </Container>
  );
};
