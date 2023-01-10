import { Container, FormContainer } from "../../styles/pages/login";
import NextImage from "next/image";
import Head from "next/head";
import { InputControlled } from "../components/InputControlled";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../contexts/AuthContext";

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

  const { signIn, errorMessageLogin, isLoading } = useAuth();

  const handleLogin = async (data: SigninProps) => {
    try {
      await signIn(data);
    } catch (error) {
      console.log("deu erro", error);
    }
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
                autoComplete="given-email"
                label="Email"
                placeholder="loremipsum@gmail.com"
                type="text"
                register={{ ...register("email") }}
                errorMessage={errors.email?.message}
              />

              <InputControlled
                label="Senha"
                autoComplete="given-password"
                placeholder="Senha"
                type="password"
                register={{ ...register("password") }}
                errorMessage={errors.password?.message}
              />
            </fieldset>
            {isLoading ? (
              <button className="loading">Carregando...</button>
            ) : (
              <button className="signIn">Entrar</button>
            )}
          </form>
        </FormContainer>
      </Container>
      {errorMessageLogin}
    </>
  );
}
