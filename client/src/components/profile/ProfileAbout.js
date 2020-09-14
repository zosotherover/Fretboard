import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    gear,
    user: { name },
  },
}) => (
  <div className='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 class='text-primary'>{name.trim().split(' ')[0]}'s Bio</h2>
        <p>{bio}</p>
      </Fragment>
    )}
    <div class='line'></div>
    {gear && (
      <Fragment>
        <h2 class='text-primary'>{name.trim().split(' ')[0]}'s Gear</h2>
        <p>{gear}</p>
      </Fragment>
    )}
  </div>
);
ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
