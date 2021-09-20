import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

interface PaperBoxProps {
  title?: string;
  subTitle?: string;
}

export default function PaperBox(props: PaperBoxProps) {
  return (
    <Container>
      <Box maxWidth={500} sx={{ mx: "auto" }}>
        <Paper elevation={3} sx={{ mt: 10, mx: "auto", p: 5, height: 500}}>
          <Typography variant="h3" gutterBottom>{props.title}</Typography>
          <Typography variant="subtitle1" gutterBottom>
            {props.subTitle}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
