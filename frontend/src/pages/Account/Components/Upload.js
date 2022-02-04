import React from 'react';
// import styled from 'styled-components';

import { UploadImage } from './UploadImage';
import { UploadProduct } from 'pages/Account/Components/UploadProduct';
// import { Card } from 'styledElements/Card';
import { H1 } from '../../../styledElements/Texts';
import { Card } from 'styledElements/Card';

// const UploadedProducts = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 500px;
//   height: 300px;
//   border: 1px solid black;
// `;

const Upload = () => {
  return (
    <Card>
      <H1> UPLAOD A PROP FROM YOUR HOME</H1>
      <UploadImage />
      <UploadProduct />
    </Card>
  );
};

export default Upload;
