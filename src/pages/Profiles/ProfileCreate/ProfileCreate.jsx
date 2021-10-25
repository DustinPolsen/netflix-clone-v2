import { useContext, useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

// components
import Nav from '../../../components/shared/Layout/Navbar/Nav';

// context
import {
  ProfilesDispatchContext,
  ProfilesStateContext,
} from '../../../context/profiles/profilesContext';

// utils
import { getRandomId } from '../../../utils/generateId';
import { ROUTES } from '../../../utils/navigation';
import { IMAGES } from '../../../utils/generalUtils';

// icons
import CheckIcon from '@material-ui/icons/Check';

// styles
import { Wrapper } from './ProfileCreate.styles';
import { ADD_PROFILE } from '../../../reducers/ProfilesReducer/profilesReducerTypes';
import BootstrapTooltip from '../../../components/shared/Tooltip/BootstrapTooltip';

export default function ProfileCreate() {
  const { maxProfileLength, profiles } = useContext(ProfilesStateContext);
  const dispatch = useContext(ProfilesDispatchContext);

  /* in netflix a user doesn't get to pick image in profile creation, 
  instead it selects an image that hasn't already been used starting from index 0.*/

  const getImage = () => {
    const usedImages = {};

    profiles.map(({ imgUrl }) => (usedImages[imgUrl] = true));
    for (const image of Object.values(IMAGES)) {
      if (!(image in usedImages)) return image;
    }
  };

  const [userToCreate, setUserToCreate] = useState({
    name: '',
    isKid: false,
    imgUrl: getImage(),
  });

  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) => {
    setUserToCreate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleIsKid = () => {
    setUserToCreate((prevState) => ({
      ...prevState,
      isKid: prevState.isKid ? false : true,
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    if (maxProfileLength === profiles?.length) return;

    const createdUser = {
      ...userToCreate,
      id: getRandomId(Math.floor(Math.random() * 100) + 98),
      language: 'English',
      list: [],
    };

    await dispatch({ type: ADD_PROFILE, payload: createdUser });
    navigate(ROUTES.SELECT_PROFILE);
  };

  useEffect(() => {
    if (maxProfileLength === profiles?.length) {
      return redirect(ROUTES.SELECT_PROFILE);
    }
  }, [maxProfileLength, profiles?.length]);

  return (
    <>
      <Nav logoOnly />
      <Wrapper>
        <form
          className="manageProfile__actionsContainer"
          onSubmit={handleCreate}
        >
          <h1>Add Profile</h1>
          <h2>Add a profile for another person watching Netflix.</h2>

          <div className="manageProfile__metaData entry">
            <div className="profile__avatar">
              <div className="avatar__box">
                <img
                  src={userToCreate.imgUrl}
                  alt="Profile Avatar"
                  className="avatar__img"
                />
              </div>
            </div>

            <div className="manageProfile__add--parent">
              <div className="manageProfile__edit--inputs">
                <label
                  htmlFor="name"
                  aria-label="Name"
                  className="manageProfile__name--label"
                >
                  Profile Name
                </label>

                <input
                  placeholder="Name"
                  name="name"
                  required
                  value={userToCreate.name}
                  onChange={handleInputChange}
                />

                <div className="manageProfile__optionWrapper">
                  <div className="optionWrapper__addKids--option">
                    <input type="checkbox" />
                    <BootstrapTooltip
                      placement="top"
                      fontWeight="400"
                      title={`
                    If selected, this profile will only see TV shows and movies rated for ages 12 and under.`}
                    >
                      <label htmlFor="isKid" onClick={toggleIsKid}>
                        {userToCreate.isKid && (
                          <div>
                            <CheckIcon className="option__checkIcon" />
                          </div>
                        )}
                      </label>
                    </BootstrapTooltip>
                    <span tabIndex={0}>Kid?</span>
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
          </div>
        </form>
      </Wrapper>
    </>
  );
}
