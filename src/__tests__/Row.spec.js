import Row from '../components/MovieComponents/Row/Row';
import { testRender } from '../utils/_testUtils';

describe('Row left', () => {
  it('renders a row with movie posters in it', () => {
    const { container } = testRender(Row);
    let rowPosters = container.querySelector('.row__posters');
    expect(rowPosters).toBeInTheDocument();
  });
});
