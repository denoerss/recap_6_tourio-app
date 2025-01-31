import { createGlobalStyle } from "styled-components";
import { Poppins } from "@next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500", "700"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --ff-poppins: ${poppins.style.fontFamily};
  }

  body {
    margin: 0;
    font-family: var(--ff-poppins);
    background-color: #0d0f14;
  }

  a {
    text-decoration: none;
  }
`;
