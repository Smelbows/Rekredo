import React from 'react';

import Cart from '../../Checkout/Components/Cart';
import { H4 } from '../../../styledElements/Texts';
import { AccountPageContainer } from 'styledElements/Card';
const BusinessProfile = () => {
  return (
    <>
      <H4 shadow="0 2px 2px black" backGroundColor="var(--wintergreen)">
        Cart
      </H4>

      <AccountPageContainer>
        <Cart />
      </AccountPageContainer>
    </>
  );
};

export default BusinessProfile;
