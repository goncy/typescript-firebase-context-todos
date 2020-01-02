import React from "react";
import styled from "styled-components";

const Container = styled.button`
  padding: 12px;
  border: none;
  background: transparent;
  color: var(--foreground);
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Container {...props}>{children}</Container>
);

export default Button;
