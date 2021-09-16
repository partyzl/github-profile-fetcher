import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux, renderWithState } from './utils';

global.React = React;
global.render = render;
global.userEvent = userEvent;
global.renderWithRedux = renderWithRedux;
global.renderWithState = renderWithState;
