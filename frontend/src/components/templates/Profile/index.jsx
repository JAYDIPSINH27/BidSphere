// Author: Christin Saji

/* eslint-disable react/prop-types */
import React from 'react';
import ProfileForm from '../../organisms/ProfileForm';

const ProfileTemplate = ({ isEditing, setIsEditing }) => (
  <section className="min-h-0 pt-8 pb-0">
    <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-wrap items-center justify-center">
      <div className="w-full md:w-8/12 lg:ms-6 lg:w-7/12 py-8 px-10 bg-bslightgreen rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-bsnavyblue">
          Profile Information
        </h2>
        <ProfileForm isEditing={isEditing} setIsEditing={setIsEditing} />
      </div>
    </div>
  </section>
);

export default ProfileTemplate;
