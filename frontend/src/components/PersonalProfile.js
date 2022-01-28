import React from 'react';

import { UploadImage } from '../components/UploadImage';
import { UploadProduct } from 'components/UploadProduct';
// import { Card } from 'styledElements/Card';
import { H1 } from '../styledElements/Texts';
import { Card } from 'styledElements/Card';

const PersonalProfile = () => {
  return (
    <Card>
      <H1> Im here</H1>
      <UploadImage />
      <UploadProduct />
    </Card>
  );
};

export default PersonalProfile;
