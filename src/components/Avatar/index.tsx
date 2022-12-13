import * as AvatarAccount from "@radix-ui/react-avatar";
import { Container } from "./styles";
import "./styles.ts";

export const Avatar = () => {
  return (
    <Container>
      <AvatarAccount.Root className="AvatarRoot">
        <AvatarAccount.Image
          className="AvatarImage"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <AvatarAccount.Fallback className="AvatarFallback" delayMs={600}>
          CT
        </AvatarAccount.Fallback>
      </AvatarAccount.Root>
    </Container>
  );
};
