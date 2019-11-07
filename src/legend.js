import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import messages from './messages';

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
				{messages[props.language].wingLegend}
			</Text>
			<Text size={500} color='white'>
			{messages[props.language].liberoLegend}
			</Text>
			<Text size={500} color='white'>
			{messages[props.language].middleBlockerLegend}
			</Text>
			<Text size={500} color='white'>
				{messages[props.language].setterLegend}
			</Text>
		</Pane>
	);
};

export default Legend;
