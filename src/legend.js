import React from 'react';
import { Pane, Text } from 'evergreen-ui';

const Legend = props => {
	return (
		<Pane
			display='flex'
			flexDirection='column'
			alignItems='start'
			justifyContent='start'
			margin={12}
			flex={2}
		>
			<Text size={500} color='white'>
				R - Receptor
			</Text>
			<Text size={500} color='white'>
				L - Líbero
			</Text>
			<Text size={500} color='white'>
				C - Central
			</Text>
			<Text size={500} color='white'>
				S - Setter/Armador
			</Text>
		</Pane>
	);
};

export default Legend;
