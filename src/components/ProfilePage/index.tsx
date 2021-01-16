import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
  Feed,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Update Profile</EditButton>
        <h1>Henrique Holtz</h1>
        <h2>@henrique_holtz</h2>
        <p>
          Developer by{' '}
          <a href="https://github.com/henriqueholtz" target="_blank">
            Henrique Holtz
          </a>{' '}
          with{' '}
          <a href="https://rocketseat.com.br" target="_blank">
            Rocketseat
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Parana, Brazil
          </li>
          <li>
            <CakeIcon />
            07 of October
          </li>
        </ul>

        <Followage>
          <span>
            following <strong>122</strong>
          </span>
          <span>
            <strong>914</strong> followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
