import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// reducer/context
import {
  ProfilesDispatchContext,
  ProfilesStateContext,
} from '../../../context/profiles/profilesContext';
import { REMOVE_PROFILE } from '../../../reducers/ProfilesReducer/profilesReducerTypes';

// utils
import { ROUTES } from '../../../utils/navigation';

export default function DeleteProfile({ stateProps }) {
  const { profileFormData, setManageMode, profile } = stateProps;

  const dispatch = useContext(ProfilesDispatchContext);
  const { profiles } = useContext(ProfilesStateContext);

  const navigate = useNavigate();

  const onDelete = async () => {
    dispatch({ type: REMOVE_PROFILE, payload: profile });
    navigate(ROUTES.SELECT_PROFILE);
  };

  return (
    <div className="manageProfile__actionsContainer">
      <h1>Delete Profile?</h1>
      <div className="manageProfile__metaData entry">
        <div className="profile__avatar">
          <div className="avatar__box">
            <img
              src={profileFormData.imgUrl}
              alt={profileFormData.name}
              className="avatar__img"
            />
          </div>

          <div className="profile__name">{profileFormData.name}</div>
        </div>

        <div className="profile__deleteWarning">
          This profile's history - including My List, ratings and activity -
          will be gone forever, and you won't be able to access it again.
        </div>
      </div>

      <div className="buttons__container">
        <button
          className="profile__button"
          onClick={() => setManageMode('edit')}
        >
          KEEP PROFILE
        </button>

        <button
          className="profile__button"
          onClick={onDelete}
          disabled={profiles.length <= 1}
        >
          {profiles.length <= 1
            ? 'cannot delete last and only profile'
            : ' DELETE PROFILE'}
        </button>
      </div>
    </div>
  );
}
