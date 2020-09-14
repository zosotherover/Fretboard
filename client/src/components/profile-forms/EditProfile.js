// import React, { useEffect, useState, Fragment } from 'react';
// import { Link, withRouter, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createProfile, getCurrentProfile } from '../../actions/profile';

// const EditProfile = ({
//   createProfile,
//   getCurrentProfile,
//   profile: { profile, loading },
//   history,
// }) => {
//   const [formData, setFormData] = useState({
//     location: '',
//     website: '',
//     bio: '',
//     genres: '',
//     gear: '',
//     twitter: '',
//     facebook: '',
//     linkedin: '',
//     youtube: '',
//     instagram: '',
//   });
//   const [displaySocialInputs, toggleSocialInputs] = useState(false);
//   eslint-disable-next-line react-hooks/exhaustive-deps
//   useEffect(() => {
//     getCurrentProfile();

//     setFormData(
//       {
//         location: loading || !profile.location ? '' : profile.location,
//         website: loading || !profile.website ? '' : profile.website,
//         bio: loading || !profile.bio ? '' : profile.bio,
//         genres: loading || !profile.genres ? '' : profile.genres,
//         gear: loading || !profile.gear ? '' : profile.gear,
//         twitter: loading || !profile.social ? '' : profile.social.twitter,
//         facebook: loading || !profile.social ? '' : profile.social.facebook,
//         linkedin: loading || !profile.social ? '' : profile.social.linkedin,
//         youtube: loading || !profile.social ? '' : profile.social.youtube,
//         instagram: loading || !profile.social ? '' : profile.social.instagram,
//       }[(loading, getCurrentProfile)]
//     );
//   });

//   const {
//     location,
//     website,
//     bio,
//     genres,
//     gear,
//     twitter,
//     facebook,
//     linkedin,
//     youtube,
//     instagram,
//   } = formData;
//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   const onSubmit = (e) => {
//     e.preventDefault();
//     createProfile(formData, history, true);
//   };
//   useEffect(() => {
//     getCurrentProfile();
//     eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [getCurrentProfile]);
//   return loading && profile === null ? (
//     <Redirect to='/dashboard' />
//   ) : (
//     <Fragment>
//       <h1 className='large text-primary'>Create Your Profile</h1>
//       <p className='lead'>
//         <i className='fas fa-user' /> Let's get some information to make your
//         profile stand out
//       </p>
//       <small>* = required field</small>
//       <form className='form' onSubmit={(e) => onSubmit(e)}>
//         <div className='form-group'>
//           <input
//             type='text'
//             placeholder='Location'
//             name='location'
//             value={location}
//             onChange={(e) => onChange(e)}
//           />
//           <small className='form-text'>
//             City & state suggested (eg. Boston, MA)
//           </small>
//         </div>

//         <div className='form-group'>
//           <input
//             type='text'
//             placeholder='Website'
//             name='website'
//             value={website}
//             onChange={(e) => onChange(e)}
//           />
//           <small className='form-text'>Your group/band's website</small>
//         </div>

//         <div className='form-group'>
//           <textarea
//             placeholder='A short bio of yourself'
//             name='bio'
//             value={bio}
//             onChange={(e) => onChange(e)}
//           />
//           <small className='form-text'>Tell us a little about yourself</small>
//         </div>

//         <div className='form-group'>
//           <input
//             type='text'
//             placeholder='Favorite Genres'
//             name='genres'
//             value={genres}
//             onChange={(e) => onChange(e)}
//           />
//         </div>

//         <div className='form-group'>
//           <textarea
//             placeholder='Your guitar gear'
//             name='gear'
//             value={gear}
//             onChange={(e) => onChange(e)}
//           />
//           <small className='form-text'>Tell us what gear you play with</small>
//         </div>

//         <div className='my-2'>
//           <button
//             onClick={() => toggleSocialInputs(!displaySocialInputs)}
//             type='button'
//             className='btn btn-light'
//           >
//             Add Social Network Links
//           </button>
//           <span>Optional</span>
//         </div>
//         {displaySocialInputs && (
//           <Fragment>
//             <div className='form-group social-input'>
//               <i className='fab fa-twitter fa-2x' />
//               <input
//                 type='text'
//                 placeholder='Twitter URL'
//                 name='twitter'
//                 value={twitter}
//                 onChange={(e) => onChange(e)}
//               />
//             </div>

//             <div className='form-group social-input'>
//               <i className='fab fa-facebook fa-2x' />
//               <input
//                 type='text'
//                 placeholder='Facebook URL'
//                 name='facebook'
//                 value={facebook}
//                 onChange={(e) => onChange(e)}
//               />
//             </div>

//             <div className='form-group social-input'>
//               <i className='fab fa-youtube fa-2x' />
//               <input
//                 type='text'
//                 placeholder='YouTube URL'
//                 name='youtube'
//                 value={youtube}
//                 onChange={(e) => onChange(e)}
//               />
//             </div>

//             <div className='form-group social-input'>
//               <i className='fab fa-linkedin fa-2x' />
//               <input
//                 type='text'
//                 placeholder='Linkedin URL'
//                 name='linkedin'
//                 value={linkedin}
//                 onChange={(e) => onChange(e)}
//               />
//             </div>

//             <div className='form-group social-input'>
//               <i className='fab fa-instagram fa-2x' />
//               <input
//                 type='text'
//                 placeholder='Instagram URL'
//                 name='instagram'
//                 value={instagram}
//                 onChange={(e) => onChange(e)}
//               />
//             </div>
//           </Fragment>
//         )}

//         <input type='submit' className='btn btn-primary my-1' />
//         <Link className='btn btn-light my-1' to='/dashboard'>
//           Go Back
//         </Link>
//       </form>
//     </Fragment>
//   );
// };

// EditProfile.propTypes = {
//   createProfile: PropTypes.func.isRequired,
//   getCurrentProfile: PropTypes.func.isRequired,
//   profile: PropTypes.object.isRequired,
// };
// const mapStateToProps = (state) => ({
//   profile: state.profile,
// });
// export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
//   withRouter(EditProfile)
// );
