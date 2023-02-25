import React, { ReactElement, ReactPropTypes, useCallback, useEffect, useState } from "react";
import { UserDetailsType } from "../types";
import styled from "styled-components";
import axios from "axios";
import { at, backUrl } from "../../variable/cookie";
import Modal from "../Modal";
function User() {
  const [user, setUser] = useState<UserDetailsType>();
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const getMyUser = async (at: string) => {
    try {
      const UsersData = await axios.get(`${backUrl}accounts/user/`, {
        headers: {
          Authorization: `Bearer ${at}`,
        },
      });
      setUser(UsersData.data);
    } catch (err) {
      console.log(err);
    }
  };
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  useEffect(() => {
    getMyUser(at);
  }, [at]);

  return (
    <UserContainer onClick={onClickToggleModal}>
      {isOpenModal && <Modal onClickToggleModal={onClickToggleModal}></Modal>}
      {user?.first_name} {user?.last_name} <br></br>
      {user?.email}
    </UserContainer>
  );
}

export default User;

const UserContainer = styled.div`
  color: white;
  display: flex;
  padding: 3px;
  border-bottom: 1px solid #49274b;
`;
