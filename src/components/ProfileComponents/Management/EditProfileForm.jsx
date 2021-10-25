import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// context/reducer
import {
  ProfilesDispatchContext,
  ProfilesStateContext,
} from '../../../context/profiles/profilesContext';
import { UPDATE_PROFILE } from '../../../reducers/ProfilesReducer/profilesReducerTypes';

// utils
import { languages } from '../../../utils/generalUtils';
import { makeArrayFromString } from '../../../utils/makeArrayFromString';
import { ROUTES } from '../../../utils/navigation';

export default function EditProfileForm({ stateProps }) {
  const { profiles } = useContext(ProfilesStateContext);
  const dispatch = useContext(ProfilesDispatchContext);
  const navigate = useNavigate();

  const {
    profileFormData,
    setProfileFormData,
    handleChange,
    profile,
    isDropdownShowing,
    setIsDropdownShowing,
    setManageMode,
  } = stateProps;

  const listItemLanguages = makeArrayFromString(languages, 'matchOnlyLetters');

  const toggleDropdown = () => {
    setIsDropdownShowing(isDropdownShowing ? false : true);
  };

  const onSave = async (e) => {
    e.preventDefault();

    const updatedProfile = {
      ...profile,
      ...profileFormData,
    };

    await dispatch({
      type: UPDATE_PROFILE,
      payload: updatedProfile,
    });

    navigate(ROUTES.SELECT_PROFILE);
  };

  return (
    <form className="manageProfile__actionsContainer" onSubmit={onSave}>
      <h1>Edit Profile</h1>

      <div className="manageProfile__metaData entry">
        <div className="profile__avatar">
          <div className="avatar__box">
            <img
              src={profileFormData?.imgUrl}
              alt={profileFormData?.name}
              className="avatar__img"
            />
          </div>
        </div>

        <div className="manageProfile__edit--parent">
          <div className="manageProfile__edit--inputs">
            <label htmlFor="name">Profile Name</label>
            <input
              name="name"
              required
              value={profileFormData?.name || ''}
              onChange={handleChange}
            />
          </div>

          <div className="manageProfile__edit--dropdowns">
            <div className="manageProfile__edit--dropdown">
              <h2 className="manageProfile__dropdown--label">Language:</h2>

              <div cols={2} className="manageProfile__dropdown--nfDropDown">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownShowing}
                  className="manageProfile__dropdown--header"
                >
                  {profileFormData?.language}

                  <span className="manageProfile__dropdown--arrow" />
                </div>

                <div className="manageProfile__dropdown--submenu">
                  <ul>
                    {listItemLanguages.map((text, idx) => (
                      <li
                        name="language"
                        key={idx}
                        onClick={() => {
                          setProfileFormData((prevState) => ({
                            ...prevState,
                            language: text,
                          }));
                          setIsDropdownShowing(false);
                        }}
                      >
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="buttons__container">
        <button className="profile__button" type="submit">
          SAVE
        </button>
        <button
          className="profile__button"
          onClick={() => navigate(ROUTES.SELECT_PROFILE)}
        >
          CANCEL
        </button>
        {profiles.length > 1 && (
          <button
            className="profile__button"
            onClick={() => setManageMode('delete')}
          >
            DELETE PROFILE
          </button>
        )}
      </div>
    </form>
  );
}
