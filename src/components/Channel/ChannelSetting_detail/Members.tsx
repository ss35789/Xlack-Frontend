import styled from "styled-components";
import React from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Avatar } from "@material-ui/core";

const Members = () => {
  const currentWorkspace = useSelector(
    (state: RootState) => state.getMyWorkSpace.ClickedWorkSpace
  );
  return (
    <>
      <SearchBar>
        <div className="group">
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input placeholder="Find members" type="search" className="input" />
        </div>
      </SearchBar>
      <div className="mt-1 mx-auto text-lg overflow-y-scroll max-h">
        <User>
          <GroupAddIcon
            style={{
              fontSize: 30,
              marginRight: 10,
            }}
          />
          <h1>Add People</h1>
        </User>
        {currentWorkspace &&
          currentWorkspace.members.map((member, i) => {
            return (
              <User key={i}>
                <HeaderAvatar src={member.profile_image} />
                <h1>{member.username}</h1>
              </User>
            );
          })}
      </div>
    </>
  );
};
const HeaderAvatar = styled(Avatar)`
  margin-right: 10px;
`;

const User = styled.span`
  align-items: center;
  width: 100%;
  display: flex;
  padding: 0.5rem;

  :hover {
    cursor: pointer;
    opacity: 0.6;
    background-color: #9ca3af;
  }
`;
const SearchBar = styled.div`
  .group {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
  }

  .input {
    width: 100%;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    transition: 0.3s ease;
  }

  .input::placeholder {
    color: #9e9ea7;
  }

  .input:focus,
  input:hover {
    outline: none;
    border-color: rgba(234, 76, 137, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }

  .icon {
    position: absolute;
    left: 1rem;
    fill: #9e9ea7;
    width: 1rem;
    height: 1rem;
  }
`;
export default Members;
