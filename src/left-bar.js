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
import messages from './messages';

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
			flex={2}
			padding={4}
			style={{
				maxWidth: '160px',
			}}
		>
			<Tooltip content={messages[props.language].reset}>
				<IconButton
					style={{
						...buttonStyle,
						marginTop: '40px',
					}}
					height={50}
					icon='undo'
					onClick={() => {
						props.setPositions(initial);
						props.setHasClicked(true);
					}}
				/>
			</Tooltip>
			<Tooltip content={messages[props.language].deleteLines}>
				<IconButton
					style={buttonStyle}
					height={50}
					icon='eraser'
					onClick={() => {
						props.setLines([]);
					}}
				/>
			</Tooltip>
			<Tooltip content={messages[props.language].saveTactic}>
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
			<Tooltip content={messages[props.language].playerNames}>
				<IconButton
					style={buttonStyle}
					height={50}
					icon='people'
					onClick={() => props.setIsModalPlayerOpen(true)}
				/>
			</Tooltip>
			<PlayerNameDialog
				language={props.language}
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
				title={messages[props.language].selectTactic}
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
				<Tooltip content={messages[props.language].selectTactic}>
					<IconButton
						style={buttonStyle}
						height={50}
						icon='folder-open'
					/>
				</Tooltip>
			</SelectMenu>
			<Tooltip content={messages[props.language].export}>
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
				<u>{messages[props.language].language}</u>
			</Strong>
			<Select
				onChange={event => props.setLanguage(event.target.value)}
				style={{ ...buttonStyle, maxHeight: '35px' }}
				value={props.language}
			>
				<option value='en'>EN</option>
				<option value='es'>ES</option>
			</Select>
			<Strong
				size={500}
				style={{
					...buttonStyle,
					color: 'white',
				}}
			>
				<u>{messages[props.language].drawOptions}</u>
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
