import React from 'react';
import { Helmet } from 'react-helmet';

interface helmetProps {
	title: string;
	content?: string;
}

const index: React.FC<helmetProps> = ({ title, content }) => {
	return (
		<Helmet>
			<title>{title} - App</title>
			<meta name={title} content={content} />
		</Helmet>
	);
};

export default index;
