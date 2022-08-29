import {ProfileType} from './types';
import styled from 'styled-components';

function UserProfile(userProfile: ProfileType) {
    return (
        <UserContainer>
            {userProfile.user.first_name} {userProfile.user.last_name} <br></br>
            {userProfile.user.email}
        </UserContainer>
    );
}

export default UserProfile;

const UserContainer = styled.div`
    color: white;
    display: flex;
    padding: 3px;
    border-bottom: 1px solid #49274b;
`;
