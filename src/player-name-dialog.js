import React from 'react';
import { Dialog, TextInput } from 'evergreen-ui';

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
			title='Guardar posiciones'
			onCloseComplete={props.onCloseComplete}
			onConfirm={() => props.onConfirm(value)}
			confirmLabel='Guardar'
		>
			{positions.map(position => (
				<TextInput
					key={position}
					style={{ margin: 4 }}
					name={position}
					placeholder={`Nombre ${position}`}
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
