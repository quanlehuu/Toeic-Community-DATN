import { Html, Head, Main, NextScript } from "next/document";

const host = process.env.HOST || "localhost";
export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.8/css/solid.css"
          integrity="sha384-v2Tw72dyUXeU3y4aM2Y0tBJQkGfplr39mxZqlTBDUZAb9BGoC40+rdFCG0m10lXk"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.8/css/fontawesome.css"
          integrity="sha384-q3jl8XQu1OpdLgGFvNRnPdj5VIlCvgsDQTQB6owSOHWlAurxul7f+JpUOVdAiJ5P"
          crossOrigin="anonymous"
        />

        <link
          rel="shortcut icon"
          href="/static/img/logo.png"
          type="image/x-icon"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.HOST = "${host}"
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <script src="/lib/jquery/jquery.min.js"></script>
        <script src="/lib/bootstrap/js/bootstrap.min.js"></script>
        <NextScript />
      </body>
    </Html>
  );
}
