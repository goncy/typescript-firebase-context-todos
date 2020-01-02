import React from "react";
import styled from "styled-components";

import { Actions, Status } from "../types";
import Button from "../../ui/controls/Button";

interface Props {
  signIn: Actions["signIn"];
  status: Status;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const LoginPage = ({ signIn, status }: Props) => (
  <Container>
    {status === "init" && <span>Trying to restore session...</span>}
    {status === "restored" && <Button onClick={signIn}>Login with Google</Button>}
  </Container>
);

export default LoginPage;
