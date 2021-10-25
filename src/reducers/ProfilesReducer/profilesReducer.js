import {
  ADD_PROFILE,
  FETCH_PROFILES,
  REMOVE_PROFILE,
  UPDATE_PROFILE,
  SELECT_PROFILE,
  SIGN_OUT,
} from './profilesReducerTypes';

const getCurrentProfile = (state) => {
  const selectedProfile = localStorage.getItem('currentProfile');
  const parsedProfile = selectedProfile && JSON.parse(selectedProfile);

  if (parsedProfile !== null) {
    return parsedProfile;
  }

  const defaultProfile = state.profiles.find((_, idx) => idx === 0);

  return defaultProfile;
};

export const profilesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PROFILES:
      return {
        ...state,
        profiles: payload,
        profilesAreLoading: false,
        maxProfileLength: 5,
        currentProfile: getCurrentProfile(state),
      };

    case ADD_PROFILE:
      const newProfiles = [...state.profiles, payload];

      return { ...state, profiles: newProfiles };

    case UPDATE_PROFILE:
      const updatedProfiles = state.profiles.map((user) =>
        String(user.id) === String(payload.id) ? payload : user
      );

      if (payload?.id === state.currentProfile?.id) {
        return { ...state, profiles: updatedProfiles, currentProfile: payload };
      }
      return { ...state, profiles: updatedProfiles };

    case REMOVE_PROFILE:
      const filteredProfiles = state.profiles.filter(
        (user) => String(user.id) !== String(payload.id)
      );

      if (payload?.id === state.currentProfile?.id) {
        return { ...state, profiles: filteredProfiles, currentProfile: null };
      }

      return { ...state, profiles: filteredProfiles };

    case SELECT_PROFILE:
      const newSelectedState = { ...state, currentProfile: payload };
      localStorage.setItem('profiles', JSON.stringify(newSelectedState));
      return newSelectedState;

    case SIGN_OUT:
      return { ...state, currentProfile: null };

    default:
      return state;
  }
};
