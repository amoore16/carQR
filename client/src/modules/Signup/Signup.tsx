import { Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";

import Paper from "../../components/PaperBox/PaperBox";

export default function Signup() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({ data });
  };

  return (
    <Paper title="Signup" subTitle="Create an account">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="userName"
          label="User Name"
          name="userName"
          autoComplete="userName"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          autoComplete="password"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          autoComplete="confirmPassword"
          autoFocus
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 10 }}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
}
