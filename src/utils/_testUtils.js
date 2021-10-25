import { render } from '@testing-library/react';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { ContextProvidersNest } from '../context/ContextProvidersNest';

const history = createMemoryHistory();

export const testRender = (Component) =>
  render(
    <Router history={history}>
      <ContextProvidersNest>
        <Route component={Component} />
      </ContextProvidersNest>
    </Router>
  );
