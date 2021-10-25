import Nav from '../components/shared/Layout/Navbar/Nav';
import { testRender } from '../utils/_testUtils';

const NETFLIX_LOGO =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png';

describe('Navbar left', () => {
  it('contains the links', () => {
    const { getByText } = testRender(Nav);
    ['Home', 'TV Shows', 'New & Popular', 'My List'].map((text) => {
      return expect(getByText(text)).toBeInTheDocument();
    });
  });
  it('contains Netflix logo', () => {
    const { container } = testRender(Nav);
    const navLogo = container.querySelector('.nav__logo');
    expect(navLogo.src).toBe(NETFLIX_LOGO);
  });
});

describe('Navbar right', () => {
  it('contains the search bar', () => {
    const { container } = testRender(Nav);
    const navRight = container.querySelector('.nav__secondaryNavigation');
    const searchContainer = navRight.querySelector('.nav__searchContainer');
    expect(searchContainer).toBeInTheDocument();
  });
  it('contains profiles', () => {
    const { container } = testRender(Nav);
    const profilesContainer = container.querySelector('.nav__profileContainer');
    expect(profilesContainer).toBeInTheDocument();
  });
});
