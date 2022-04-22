import * as React from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import './index.scss';

// codebeat:disable[LOC]
export const Footer: React.FunctionComponent = () => {
	const { t } = useTranslation();

	return (
		<footer className="c-footer">
			<div className="o-shell">
				<p>
					&copy; {format(new Date(), 'yyyy')}. {t('All rights reserved.')}
				</p>
			</div>
		</footer>
	);
};
// codebeat:enable[LOC]

export default Footer;
