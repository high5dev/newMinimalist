import React from "react";
import { Paper } from "@mui/material";
import { Container } from "@mui/system";
import FormRegistration from "./components/steppers/FormRegistration";

function App() {
  return (
    <div>
      <Container maxWidth="xs" sx={{ p: 0 }}>
        <Paper sx={{ height: "100vh" }}>
          <FormRegistration />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
