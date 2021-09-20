import * as React from "react";
import { Container } from "@mui/material";

import Paper from "../../components/PaperBox/PaperBox";

export default function Home() {
  return (
    <Container>
      <Paper title={"Home"} subTitle={"Welcome!"} />
    </Container>
  );
}
