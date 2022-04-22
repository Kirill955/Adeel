import * as React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import * as Loadables from './loadables';
import { Routes } from '@utilities';

import './assets/styles/app.scss';

export const App = () => (
	<Switch>
		<Route path={Routes.BASE} exact={true} component={Loadables.Home} />
	</Switch>
);
