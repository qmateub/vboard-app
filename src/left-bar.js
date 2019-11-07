import React from 'react';
import {
	Pane,
	Tooltip,
	SelectMenu,
	Select,
	Strong,
	IconButton,
} from 'evergreen-ui';
import './App.css';
import ExportImage from './export-image';
import SaveDialog from './save-dialog';
import PlayerNameDialog from './player-name-dialog';
import { initial } from './positions';

const buttonStyle = {
	margin: '6px',
};

const loadOptions = () => {
	const availableOptions = Object.keys(window.localStorage);
	return availableOptions
		.filter(availableOption => availableOption.includes('vboard'))
		.map(option => ({
			label: option.split('vboard.')[1],
			value: option.split('vboard.')[1],
		}));
};

function LeftBar(props) {
	const options = loadOptions();

	return (
		<Pane
			display='flex'
			flexDirection='column'
			background='#0A5CAF'
			alignItems='center'
			borderRight
			maxWidth='20'
			padding={4}
		>
			<Tooltip content='Reset'>
				<IconButton
					style={buttonStyle}
					height={50}
					icon='undo'
					onClick={() => {
						props.setPositions(initial);
						props.setHasClicked(true);
					}}
				/>
			</Tooltip>
			<Tooltip content='Borrar líneas'>
				<IconButton
					style={buttonStyle}
					height={50}
					icon='eraser'
					onClick={() => {
						props.setLines([]);
					}}
				/>
			</Tooltip>
			<Tooltip content='Guardar táctica'>
				<IconButton
					style={buttonStyle}
					height={50}
					icon='floppy-disk'
					onClick={() => props.setIsModalOpen(true)}
				/>
			</Tooltip>
			<SaveDialog
				isShown={props.isModalOpen}
				onCloseComplete={() => {
					props.setIsModalOpen(false);
				}}
				onConfirm={saveName => {
					window.localStorage.setItem(
						`vboard.${saveName}`,
						JSON.stringify(props.positions)
					);
					props.setIsModalOpen(false);
				}}
			/>
			<Tooltip content='Nombre de jugadores'>
				<IconButton
					style={buttonStyle}
					height={50}
					icon='people'
					onClick={() => props.setIsModalPlayerOpen(true)}
				/>
			</Tooltip>
			<PlayerNameDialog
				isShown={props.isModalPlayerOpen}
				onCloseComplete={() => {
					props.setIsModalPlayerOpen(false);
				}}
				onConfirm={playerNames => {
					props.setIsModalPlayerOpen(false);
					props.setPositions({
						...props.positions,
						...Object.entries(playerNames).reduce(
							(acc, [position, name]) => ({
								...acc,
								[position]: {
									...props.positions[position],
									name: playerNames[position],
								},
							}),
							{}
						),
					});
				}}
			/>
			<SelectMenu
				style={buttonStyle}
				title='Selecciona táctica'
				options={options}
				selected=''
				onSelect={item => {
					const posit = window.localStorage.getItem(
						`vboard.${item.value}`
					);
					if (posit) {
						props.setPositions(JSON.parse(posit));
						props.setHasClicked(true);
					}
				}}
			>
				<Tooltip content='Seleccionar táctica'>
					<IconButton
						style={buttonStyle}
						height={50}
						icon='applications'
					/>
				</Tooltip>
			</SelectMenu>
			<Tooltip content='Exportar a PNG'>
				<IconButton
					style={buttonStyle}
					height={50}
					icon='export'
					onClick={() => {
						props.setHasToExport(!props.hasToExport);
					}}
				/>
			</Tooltip>
			{props.uri && props.hasToExport && (
				<ExportImage
					uri={props.uri}
					fileName={`vboard-${Date.now()}.png`}
				/>
			)}
			<Strong
				size={500}
				style={{
					...buttonStyle,
					color: 'white',
				}}
			>
				<u>Opciones de lápiz</u>
			</Strong>
			<Select
				onChange={event => props.setStrokeWidth(event.target.value)}
				style={{ ...buttonStyle, maxHeight: '35px' }}
				value={props.strokeWidth}
			>
				<option value={1}>1px</option>
				<option value={2}>2px</option>
				<option value={3}>3px</option>
			</Select>
		</Pane>
	);
}

export default LeftBar;
