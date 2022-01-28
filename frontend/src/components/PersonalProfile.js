import React from 'react';

import { UploadImage } from '../components/UploadImage';
import { UploadProduct } from 'components/UploadProduct';
// import { Card } from 'styledElements/Card';
import {H1} from '../styledElements/Texts';
import { Card } from 'styledElements/Card';

const PersonalProfile = () => {
  return (
    <Card>
      <UploadImage />
      <UploadProduct />
    </Card>
  );
};

export default PersonalProfile;
