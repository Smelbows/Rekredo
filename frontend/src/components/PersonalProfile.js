import React from 'react';
import styled from 'styled-components';

import { UploadImage } from '../components/UploadImage';
import { UploadProduct } from 'components/UploadProduct';
// import { Card } from 'styledElements/Card';
import { H1 } from '../styledElements/Texts';
import { Card } from 'styledElements/Card';

const UploadedProducts = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  height: 300px;
  border: 1px solid black;
`;

const PersonalProfile = () => {
  return (
    <Card>
      <H1> UPLAOD A PROP FROM YOUR HOME</H1>
      <UploadedProducts></UploadedProducts>
      <UploadImage />
      <UploadProduct />
    </Card>
  );
};

export default PersonalProfile;
