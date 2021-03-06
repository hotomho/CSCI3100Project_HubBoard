// Verification email sent page
import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {Box, Button, Stack, Typography} from "@mui/material";

const MailSuccess = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100vh"
      alignItems="center"
    >
      <Stack direction="column">
        <Typography textAlign="center" variant="h1" fontSize="2em">
          Verification email has been sent, please check your email
        </Typography>
        <Button to="/" LinkComponent={RouterLink} color="hOrange">Return to homepage</Button>
      </Stack>
    </Box>
  );
};

export default MailSuccess;
