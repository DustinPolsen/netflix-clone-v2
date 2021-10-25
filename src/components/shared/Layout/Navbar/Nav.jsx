import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// utils
import { ROUTES } from '../../../../utils/navigation';

// components
import {
  Box,
  ClickAwayListener,
  Input,
  InputAdornment,
} from '@material-ui/core';
import NetflixLogo from '@/assets/netflix-logo.png';

// icons
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import BellIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// styles
import { Dropdown, SecondaryNav, StyledNav } from './Nav.styles';

// context
import { SearchContext } from '../../../../context/search/searchContext';
import {
  ProfilesDispatchContext,
  ProfilesStateContext,
} from '../../../../context/profiles/profilesContext';
import {
  SELECT_PROFILE,
  SIGN_OUT,
} from '../../../../reducers/ProfilesReducer/profilesReducerTypes';
import { Link } from 'react-router-dom';

export default function Nav({ logoOnly }) {
  const [isBackgroundShowing, setIsBackgroundShowing] = useState(false);

  const [searchMode, setSearchMode] = useState(false);
  const [isDropdownShowing, setIsDropdownShowing] = useState(false);

  const { pathname } = useLocation();

  const { search, setSearch, onSearch, browseName } = useContext(SearchContext);

  const { profiles, currentProfile } = useContext(ProfilesStateContext);
  const dispatch = useContext(ProfilesDispatchContext);

  const navigate = useNavigate();

  const onScroll = () => {
    if (window.scrollY > 100) {
      setIsBackgroundShowing(true);
    } else setIsBackgroundShowing(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const toggleSearchMode = () => {
    setSearchMode(!searchMode);
  };

  const onSearchClear = () => {
    setSearch('');
  };

  const handleOpenDropdown = () => {
    setIsDropdownShowing(true);
  };

  const handleCloseDropdown = () => {
    setIsDropdownShowing(false);
  };

  const handleClickAway = () => {
    search ? setSearchMode(true) : setSearchMode(false);
  };

  const onSelectProfile = (selectedProfile) => {
    if (selectedProfile.id === currentProfile.id) return;

    dispatch({ type: SELECT_PROFILE, payload: selectedProfile });
  };

  const onSignOut = async (text) => {
    if (!text.includes('Sign out of Netflix')) return;
    dispatch({ type: SIGN_OUT });
    navigate(ROUTES.SELECT_PROFILE);
  };

  const onRedirectToManageProfile = () => {
    navigate(ROUTES.SELECT_PROFILE, {
      state: {
        manageModeProps: true,
      },
    });
  };

  return (
    <>
      <StyledNav
        aria-label="navbar"
        isShowing={isBackgroundShowing}
        searchMode={searchMode}
        browseName={browseName}
        logoOnly={logoOnly}
      >
        <div className="nav__innerColumn">
          <div className="nav__left">
            <img
              onClick={() => navigate(ROUTES.BROWSE_ALL)}
              className="nav__logo"
              src={NetflixLogo}
              alt="Netflix Logo"
            />

            <ul className="nav__left--linkList">
              {[
                { text: 'Home', route: ROUTES.BROWSE_ALL },
                { text: 'TV Shows', route: '#' },
                { text: 'Movies', route: '#' },
                { text: 'New & Popular', route: '#' },
                { text: 'My List', route: ROUTES.MY_LIST },
              ].map(({ text, route }, idx) => (
                <li key={idx}>
                  <Link
                    className={pathname === route ? 'active' : ''}
                    to={route}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {!logoOnly && (
            <>
              <div className="nav__secondaryNavigation">
                <ClickAwayListener onClickAway={handleClickAway}>
                  <div className="nav__searchContainer">
                    {!searchMode && (
                      <SearchIcon
                        className="nav__icon search"
                        onClick={toggleSearchMode}
                      />
                    )}
                    <Input
                      onChange={onSearch}
                      value={search}
                      placeholder="Titles, people, genres"
                      className="nav__searchInput"
                      disableUnderline
                      startAdornment={
                        <Box marginLeft={1}>
                          <InputAdornment position="start">
                            <SearchIcon
                              className="nav__icon search"
                              onClick={toggleSearchMode}
                            />
                          </InputAdornment>
                        </Box>
                      }
                      endAdornment={
                        <Box mx={1}>
                          <InputAdornment position="end">
                            <ClearIcon
                              onClick={onSearchClear}
                              className="nav__icon"
                            />
                          </InputAdornment>
                        </Box>
                      }
                    />
                  </div>
                </ClickAwayListener>
                <Box mx={2}>
                  <BellIcon fontSize="medium" className="nav__icon bell" />
                </Box>

                <div
                  className="nav__profileContainer"
                  onMouseEnter={handleOpenDropdown}
                  onMouseLeave={handleCloseDropdown}
                >
                  <img
                    className="nav__avatar"
                    src={currentProfile?.imgUrl}
                    alt={`${currentProfile?.name}'s avatar`}
                  />

                  <Box mx={1}>
                    <ArrowDropUpIcon
                      className={`nav__icon arrow ${
                        isDropdownShowing ? 'active' : ''
                      }`}
                    />
                  </Box>

                  <>
                    <Dropdown
                      isActive={isDropdownShowing}
                      background={isBackgroundShowing}
                    >
                      <ArrowDropDownIcon className="nav__dropDown--arrow" />
                      <div className="nav__dropDown">
                        <div className="dropDown__items">
                          {profiles?.map((user) => (
                            <li
                              key={user.id}
                              onClick={() => onSelectProfile(user)}
                            >
                              <img
                                className="nav__avatar"
                                src={user?.imgUrl}
                                alt={user?.name}
                              />

                              <span>{user.name}</span>
                            </li>
                          ))}
                          <li>
                            <span onClick={onRedirectToManageProfile}>
                              Manage Profiles
                            </span>
                          </li>
                        </div>
                        <div className="hr" />
                        <div className="dropDown__items">
                          {[
                            'Account',
                            'Help Center',
                            'Sign out of Netflix',
                          ].map((text, idx) => (
                            <li onClick={() => onSignOut(text)} key={idx}>
                              <span>{text}</span>
                            </li>
                          ))}
                        </div>
                      </div>
                    </Dropdown>
                  </>
                </div>
              </div>
            </>
          )}
        </div>
      </StyledNav>
      {browseName && !search && (
        <SecondaryNav hasBrowseName isShowing={isBackgroundShowing}>
          <div className="nav__innerColumn">
            <h1 className="nav__browseName">{browseName}</h1>
          </div>
        </SecondaryNav>
      )}
    </>
  );
}
