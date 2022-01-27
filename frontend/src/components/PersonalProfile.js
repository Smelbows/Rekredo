import React from 'react';

import { UploadImage } from '../components/UploadImage';
import { UploadProduct } from 'components/UploadProduct';
// import { Card } from 'styledElements/Card';
import {H1} from '../styledElements/Texts';

const PersonalProfile = () => {
  return (
    <>
    <H1>Personal</H1>
      <UploadImage />
      <UploadProduct />
    </>
  );
};

export default PersonalProfile;
