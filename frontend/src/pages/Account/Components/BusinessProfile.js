import React from 'react';

import Cart from '../../Checkout/Components/Cart';
import { H1, H4 } from '../../../styledElements/Texts';
import { AccountPageContainer } from 'styledElements/Card';
const BusinessProfile = () => {
  return (
    <>
      <H4 backGroundColor="var(--wintergreen)">Cart</H4>

      <AccountPageContainer>
        <Cart />
      </AccountPageContainer>
    </>
  );
};

export default BusinessProfile;
