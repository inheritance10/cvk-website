import {Button, Typography} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import {Container} from "@mui/material";

export default function Home() {
  return (
      <div>
          <Head>
              <title>CVK SOFT</title>
              <meta name="description" content="CVK SOFT Anasayfa"/>
              <link rel="icon" href="/favicon.ico"/>
          </Head>

          <main>
              <Container maxWidth="md">
                  <Typography variant="h3" component="h1" gutterBottom>
                      Hoş Geldiniz, CVK SOFT!
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                      CVK SOFT, size özel çözümler sunar.
                  </Typography>
                  <Button variant="contained" color="primary">
                      Daha Fazlası
                  </Button>
              </Container>
          </main>
      </div>
  );
}
