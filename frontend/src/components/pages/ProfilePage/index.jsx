// Author: Christin Saji

import React, { useState } from 'react';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';
import ProfileTemplate from '../../templates/Profile';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <ProfileTemplate isEditing={isEditing} setIsEditing={setIsEditing} />
    </div>
  );
};

export default withAppBarFooter(ProfilePage);
