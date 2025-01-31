import TitleBar from "./TitleBar";
import styled from "styled-components";
import Head from "next/head";

const Main = styled.main`
  display: grid;
  padding-top: 6rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tourio</title>
      </Head>
      <TitleBar />
      <Main>{children}</Main>
    </>
  );
}
