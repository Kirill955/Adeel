import * as React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '@utilities';
import { Icon } from '@components';

import './index.scss';

export const Header: React.FunctionComponent = () => (
	<header className="c-header">
		<div className="o-shell o-shell--flex">
			<Link to={Routes.BASE} className="c-logo">
				<Icon src="/assets/react.svg" />
			</Link>
		</div>
	</header>
);

export default Header;
