import Head from "next/head";
import {
  Container,
  FormContainer,
  Redirect,
} from "../../../styles/pages/signup";
import NextImage from "next/image";
import { InputControlled } from "../../components/InputControlled";
import { ISignup, signUp } from "../../services/signup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useRouter } from "next/router";
import { message } from "antd";
import NextLink from "next/link";
import axios from "axios";

const schema = Yup.object({
  name: Yup.string().required("Insira seu nome"),
  email: Yup.string().required("Insira seu E-mail"),
  password: Yup.string().required("Insira sua senha"),
});

export default function Signup() {
  const [messageApi, messageResponse] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({
    resolver: yupResolver(schema),
  });

  const handleSignUp = async (data: ISignup) => {
    setIsLoading(true);
    try {
      await signUp(data);
      setIsLoading(false);
      messageApi.open({
        type: "success",
        content: "Usuário cadastrado com sucesso!",
      });
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      if (error && axios.isAxiosError(error)) {
        setIsLoading(false);
        messageApi.open({
          type: "error",
          content: "Usuário já cadastrado",
        });
      } else {
        messageApi.open({
          type: "error",
          content: "Houve um erro ao cadastrar o usuário",
        });
      }
    }
  };

  return (
    <>
      <Head>
        <title>Cadastrar</title>
        <link rel="shortcut icon" href="/logo.ico" />
        <meta property="og:title" content="Sign up" key="Sign up" />
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
          <form onSubmit={handleSubmit(handleSignUp)}>
            <fieldset className="fieldSet">
              <InputControlled
                autoComplete="given-name"
                label="Nome"
                placeholder="Nome"
                type="text"
                register={{ ...register("name") }}
                errorMessage={errors.name?.message}
              />
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
              <button className="loading">Cadastrando...</button>
            ) : (
              <button type="submit" className="signIn">
                Cadastrar
              </button>
            )}
          </form>
          <Redirect>
            <span>
              Já tem uma conta?{" "}
              <NextLink className="text" href="/">
                voltar para o login
              </NextLink>
            </span>
          </Redirect>
        </FormContainer>
      </Container>
      {messageResponse}
    </>
  );
}
