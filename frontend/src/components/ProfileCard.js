import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { StyledProfileCard } from 'styledElements/Card';

const ProfileCard = () => {
    const user = useSelector(state => state.user)
    return(

<StyledProfileCard>
<div>Profile card</div>
</StyledProfileCard>
    )
}

export default ProfileCard