import React, { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";

const MailVerification = () => {
  const { token } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isFailed, setIsFailed] = useState(false);
  // TODO: GET request on mount
  useEffect(() => {
    // console.log(token);
    // async function to send GET request
    const verificationHandler = async () => {
      try {
        // wait for response
        const res = await axios.get(`/api/auth/emailVerify/${token}`);
        console.log(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.response.data);
        setIsLoading(false);
        setIsFailed(true);
      }
    };
    verificationHandler();
  }, [token]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100vh"
      alignItems="center"
    >
      <Stack direction="column">
        <Box
          display={isLoading ? "flex" : "none"}
          flexDirection="column"
          alignItems="center"
        >
          <Typography>Waiting for verification</Typography>
          <CircularProgress color="hOrange" sx={{ fontSize: "3em" }} />
        </Box>
        <Box
          display={!isLoading && isFailed ? "flex" : "none"}
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h1" fontSize="2em">
            Email verification token not found!
          </Typography>
          <CancelIcon color="hOrange" sx={{ fontSize: "3em" }} />
        </Box>
        <Box
          display={!isLoading && isFailed ? "none" : "flex"}
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h1" fontSize="2em">Verification success</Typography>
          <CheckCircleIcon color="hOrange" sx={{ fontSize: "3em" }} />
        </Box>
        <Button to="/" LinkComponent={RouterLink} color="hOrange">
          Return to homepage
        </Button>
      </Stack>
    </Box>
  );
};

export default MailVerification;
