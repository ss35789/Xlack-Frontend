import React from "react";
import { CustomUserType } from "../../types/types";
import styled from "styled-components";

function MyState(props: CustomUserType) {
  return (
    <UserContainer>
      {props?.display_name}
      <br />
      {props?.email}
    </UserContainer>
  );
}

export default MyState;

const UserContainer = styled.div`
  color: black;
  display: flex;
  padding: 3px;
  border-bottom: 1px solid #49274b;
`;
