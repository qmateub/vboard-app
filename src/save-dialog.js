import React from 'react';
import { Dialog, TextInput } from 'evergreen-ui';

const SaveDialog = props => {
	const [value, setValue] = React.useState('');
	return (
		<Dialog
			isShown={props.isShown}
			title='Guardar posiciones'
			onCloseComplete={props.onCloseComplete}
			onConfirm={() => props.onConfirm(value)}
			confirmLabel='Guardar'
		>
			<TextInput
				name='save-name'
				placeholder='Nombre para la táctica'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</Dialog>
	);
};

export default SaveDialog;
