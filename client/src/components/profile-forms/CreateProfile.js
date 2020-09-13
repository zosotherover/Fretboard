import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = (props) => {
  const [formData, setFormData] = useState({
    location: '',
    website: '',
    bio: '',
    genres: '',
    gear: '',
    youtube: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    location,
    website,
    bio,
    genres,
    gear,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = formData;

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Enter some information about yourself
      </p>
      <small>* = required field</small>
      <form className='form'>
        <div className='form-group'>
          <input type='text' placeholder='* Location' name='location' />
          <small className='form-text'>
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className='form-group'>
          <input type='text' placeholder='Website' name='website' />
          <small className='form-text'>
            Could be your own or your group/band's website
          </small>
        </div>

        <div className='form-group'>
          <input type='text' placeholder='Music Genres' name='genres' />
          <small className='form-text'>
            Please use comma separated values (eg. Jazz, Coutnry, Rock, Metal)
          </small>
        </div>
        <div className='form-group'>
          <input type='text' placeholder='Your Gear' name='gear' />
          <small className='form-text'>Please use comma separated values</small>
        </div>

        <div className='form-group'>
          <textarea placeholder='A short bio' name='bio'></textarea>
          <small className='form-text'>Tell us a little about yourself</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input type='text' placeholder='Twitter URL' name='twitter' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input type='text' placeholder='Facebook URL' name='facebook' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input type='text' placeholder='YouTube URL' name='youtube' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input type='text' placeholder='Linkedin URL' name='linkedin' />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input type='text' placeholder='Instagram URL' name='instagram' />
            </div>
            <input type='submit' className='btn btn-primary my-1' />
          </Fragment>
        )}

        <a className='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;