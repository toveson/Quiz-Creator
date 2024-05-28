import { Button, Stack, TextField, Typography } from "@mui/material";
import { MainContainer } from "../components/MainContainer";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";

export const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = () => {
    console.log(username, password);
  };
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <MainContainer
      content={
        <Stack direction="row">
          <Stack spacing={2}>
            <Typography>Welcome to Quiz Creator!</Typography>
            <Typography>
              Create a Quiz and share it with friends or make it public for
              anyone to take!
            </Typography>
            <Stack style={{ flexDirection: "row-reverse" }}>
              <Stack style={{ width: "50%" }}>
                <Stack spacing={2}>
                  <TextField
                    label="username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                    label="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Stack>
                    <Button variant="contained" onClick={handleLogin}>
                      Sign In
                    </Button>
                    <Typography align="center">OR</Typography>
                    <Button variant="contained" onClick={handleGoogleLogin}>
                      Sign in with <GoogleIcon />
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      }
    />
  );
};
