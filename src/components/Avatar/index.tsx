import * as AvatarAccount from "@radix-ui/react-avatar";

import { Container } from "./styles";
import "./styles.ts";

interface AvatarProps {
  user: {
    image: string;
    name: string;
  };
}

export const Avatar = ({ user }: AvatarProps) => {
  return (
    <Container>
      <AvatarAccount.Root className="AvatarRoot"></AvatarAccount.Root>
    </Container>
  );
};
