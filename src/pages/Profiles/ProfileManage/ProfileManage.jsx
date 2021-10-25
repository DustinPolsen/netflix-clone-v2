import { useEffect, useState } from 'react';

// utils
import { ROUTES } from '../../../utils/navigation';
import { Navigate, useLocation } from 'react-router-dom';

// components
import { Wrapper } from './ProfileManage.styles';
import Nav from '../../../components/shared/Layout/Navbar/Nav';
import EditProfileForm from '../../../components/ProfileComponents/Management/EditProfileForm';
import DeleteProfile from '../../../components/ProfileComponents/Management/DeleteProfile';

export default function ProfileManage() {
  const [profileFormData, setProfileFormData] = useState(null);
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);
  const [manageMode, setManageMode] = useState('edit');

  const {
    state: { profile },
  } = useLocation();

  useEffect(() => {
    if (Object.keys(profile) === 0) return;

    const { isKid, name, imgUrl, language } = profile;
    setProfileFormData({ name, isKid, imgUrl, language });
  }, [profile]);

  const handleChange = ({ target: { name, value } }) => {
    setProfileFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (!profile) return <Navigate to={ROUTES.SELECT_PROFILE} />;

  const stateProps = {
    profileFormData,
    setProfileFormData,
    handleChange,
    profile,
    setIsDropdownShowing,
    isDropdownShowing,
    setManageMode,
  };

  const manageJSX =
    manageMode === 'edit' ? (
      <EditProfileForm stateProps={stateProps} />
    ) : (
      <DeleteProfile stateProps={stateProps} />
    );

  return (
    <>
      <Nav logoOnly />
      <Wrapper
        isDropdownShowing={isDropdownShowing}
        id="manageProfile__wrapper"
      >
        <div className="manageProfile__centeredDiv">{manageJSX}</div>
      </Wrapper>
    </>
  );
}
