import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    location,
    genres,
    gear,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='avatar' className='round-img' />
      <div>
        <h2>{name}</h2>
        <h2>{location}</h2>
        <p>Likes: {genres}</p>
        <p>Plays: {gear}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
