import React from 'react';
import { Dialog, TextInput } from 'evergreen-ui';
import messages from './messages';

const positions = [
	'setter',
	'central',
	'recep1',
	'recep2',
	'libero',
	'opuesto',
];

const PlayerNameDialog = props => {
	const [value, setValue] = React.useState(
		positions.reduce(
			(acc, position) => ({
				...acc,
				[position]: '',
			}),
			{}
		)
	);
	return (
		<Dialog
			isShown={props.isShown}
			title={messages[props.language].savePositions}
			onCloseComplete={props.onCloseComplete}
			onConfirm={() => props.onConfirm(value)}
			confirmLabel={messages[props.language].save}
		>
			{positions.map(position => (
				<TextInput
					key={position}
					style={{ margin: 4 }}
					name={position}
					placeholder={
						messages[props.language][`${position}Placeholder`]
					}
					value={value[{ position }]}
					onChange={e =>
						setValue({
							...value,
							[position]: e.target.value,
						})
					}
				/>
			))}
		</Dialog>
	);
};

export default PlayerNameDialog;
