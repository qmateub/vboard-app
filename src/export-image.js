import React from 'react';

export const ExportImage = props => {
	return (
		<a
			href={props.uri}
			style={{ visibility: 'hidden' }}
			download={props.fileName}
			ref={node => {
				node && node.click();
			}}
		>
			Donwload
		</a>
	);
};
ExportImage.displayName = 'ExportImage';

export default ExportImage;
