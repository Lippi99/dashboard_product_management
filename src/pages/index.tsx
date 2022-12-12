import { Container, FormContainer } from "../../styles/pages/home";
import NextImage from "next/image";
import Head from "next/head";
import { InputControlled } from "../components/InputControlled";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface SigninProps {
  email: string;
  password: string;
}

const schema = Yup.object({
  email: Yup.string().required("Insira seu E-mail"),
  password: Yup.string().required("Insira sua senha"),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninProps>({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: SigninProps) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="shortcut icon" href="/logo.ico" />
        <meta property="og:title" content="Login" key="feltro" />
      </Head>
      <Container>
        <NextImage
          className="birdImage"
          width={500}
          height={500}
          alt="bird"
          src="/images/bird.svg"
        />
        <div className="birdBluredContainer">
          <NextImage
            fill
            sizes="100vh"
            className="birdBluredImage"
            alt="bird"
            src="/images/birdBlured.svg"
            priority
          />
        </div>

        <FormContainer>
          <NextImage
            className="logo"
            alt="logo"
            width={200}
            height={100}
            src="/icons/logo.svg"
          />
          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldSet">
              <InputControlled
                label="Email"
                placeholder="loremipsum@gmail.com"
                type="text"
                register={{ ...register("email") }}
                errorMessage={errors.email?.message}
              />

              <InputControlled
                label="Senha"
                placeholder="Senha"
                type="password"
                register={{ ...register("password") }}
                errorMessage={errors.password?.message}
              />
            </fieldset>
            <button className="signIn">Entrar</button>
          </form>
        </FormContainer>
      </Container>
    </>
  );
}
