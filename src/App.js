import React from 'react';
import { Stage, Layer } from 'react-konva';
import { Pane, Heading, Button, SelectMenu, Select } from 'evergreen-ui';
import { SketchPicker } from 'react-color';
import './App.css';
import VolleyCourt from './volley-court';
import Ball from './ball';
import Player from './player';
import ExportImage from './export-image';
import SaveDialog from './save-dialog';
import Legend from './legend';
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

function App() {
	let setter, recep1, recep2, opuesto, central, libero, ball, stage, layer;
	const [refs, setRefs] = React.useState({
		setter,
		recep1,
		recep2,
		opuesto,
		central,
		libero,
		ball,
		stage,
		layer,
	});
	const [hasClicked, setHasClicked] = React.useState('');
	const [positions, setPositions] = React.useState(initial);
	const [hasToExport, setHasToExport] = React.useState(false);
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [uri, setUri] = React.useState('');
	const [lines, setLines] = React.useState([]);
	const [isPaint, setIsPaint] = React.useState(false);
	const [strokeWidth, setStrokeWidth] = React.useState(1);
	const [color, setColor] = React.useState('#000000');
	const options = loadOptions();
	React.useEffect(() => {
		setRefs({
			setter,
			recep1,
			recep2,
			opuesto,
			central,
			libero,
			ball,
			stage,
			layer,
		});
		console.log(hasToExport);
		if (hasToExport) {
			const src = stage.toDataURL({
				pixelRatio: 2,
			});
			setUri(src);
			setHasToExport(!hasToExport);
		}
		if (hasClicked) {
			const moveTo = positions;
			refs.setter.to({
				x: moveTo.setter.x,
				y: moveTo.setter.y,
				duration: 0.2,
			});
			refs.recep1.moveToTop();
			refs.recep1.to({
				x: moveTo.recep1.x,
				y: moveTo.recep1.y,
				duration: 0.2,
			});
			refs.recep2.to({
				x: moveTo.recep2.x,
				y: moveTo.recep2.y,
				duration: 0.2,
			});
			refs.opuesto.moveToTop();
			refs.opuesto.to({
				x: moveTo.opuesto.x,
				y: moveTo.opuesto.y,
				duration: 0.2,
			});
			refs.central.to({
				x: moveTo.central.x,
				y: moveTo.central.y,
				duration: 0.2,
			});
			refs.libero.to({
				x: moveTo.libero.x,
				y: moveTo.libero.y,
				duration: 0.2,
			});
			refs.ball.moveToTop();
			refs.ball.to({
				x: moveTo.ball.x,
				y: moveTo.ball.y,
				duration: 0.2,
			});
		}
	}, [
		positions,
		ball,
		central,
		hasClicked,
		hasToExport,
		libero,
		opuesto,
		recep1,
		recep2,
		stage,
		setter,
		refs.setter,
		refs.recep1,
		refs.recep2,
		refs.opuesto,
		refs.central,
		refs.libero,
		refs.ball,
		layer,
	]);

	const posIni = initial;

	return (
		<Pane display='flex' flexDirection='column'>
			<Pane
				border
				height={30}
				padding={6}
				display='flex'
				justifyContent='center'
				alignItems='center'
			>
				<Heading size={600}>
					<span role='img' aria-label='vball'>
						🏐
					</span>
					Volley Board
					<span role='img' aria-label='vball'>
						🏐
					</span>
					- A simple tool for building your own on court tactics
				</Heading>
			</Pane>
			<Pane display='flex' flexDirection='row' backgroundColor='#0A5CAF'>
				<Stage
					ref={node => {
						stage = node;
					}}
					width={window.innerWidth - 450}
					height={window.innerHeight}
					onMouseUp={e => {
						setIsPaint(false);
					}}
					onTouchEnd={e => {
						setIsPaint(false);
					}}
				>
					<Layer
						ref={node => {
							layer = node;
						}}
					>
						<Ball
							getRef={node => {
								ball = node;
								node && node.moveToTop();
							}}
							x={posIni.ball.x}
							y={posIni.ball.y}
							height={20}
							width={32}
							draggable
							onDragEnd={({ evt }) =>
								setPositions({
									...positions,
									ball: { x: evt.x, y: evt.y },
								})
							}
						/>
						<VolleyCourt
							stage={refs.stage}
							layer={refs.layer}
							lines={lines}
							setLines={setLines}
							isPaint={isPaint}
							setIsPaint={setIsPaint}
							strokeWidth={strokeWidth}
							color={color}
						/>
						<Player
							getRef={node => {
								setter = node;
							}}
							x={posIni.setter.x}
							y={posIni.setter.y}
							label='S'
							onDragEnd={newPosition =>
								setPositions({
									...positions,
									setter: newPosition,
								})
							}
						/>
						<Player
							getRef={node => {
								recep1 = node;
							}}
							x={posIni.recep1.x}
							y={posIni.recep1.y}
							label='R'
							onDragEnd={newPosition =>
								setPositions({
									...positions,
									recep1: newPosition,
								})
							}
						/>
						<Player
							getRef={node => {
								recep2 = node;
							}}
							x={posIni.recep2.x}
							y={posIni.recep2.y}
							label='R'
							onDragEnd={newPosition =>
								setPositions({
									...positions,
									recep2: newPosition,
								})
							}
						/>
						<Player
							getRef={node => {
								opuesto = node;
							}}
							x={posIni.opuesto.x}
							y={posIni.opuesto.y}
							label='O'
							onDragEnd={newPosition =>
								setPositions({
									...positions,
									opuesto: newPosition,
								})
							}
						/>
						<Player
							getRef={node => {
								central = node;
							}}
							x={posIni.central.x}
							y={posIni.central.y}
							label='C'
							onDragEnd={newPosition =>
								setPositions({
									...positions,
									central: newPosition,
								})
							}
						/>
						<Player
							getRef={node => {
								libero = node;
							}}
							x={posIni.libero.x}
							y={posIni.libero.y}
							label='L'
							isLibero
							onDragEnd={newPosition =>
								setPositions({
									...positions,
									libero: newPosition,
								})
							}
						/>
					</Layer>
				</Stage>
				<Legend />
				<Pane
					display='flex'
					flexDirection='column'
					background='blueTint'
					flex={3}
					padding={4}
				>
					<Button
						style={buttonStyle}
						onClick={() => {
							setPositions(initial);
							setHasClicked(true);
						}}
					>
						Reset
					</Button>
					<Button
						style={buttonStyle}
						onClick={() => {
							setLines([]);
						}}
					>
						Borrar lineas
					</Button>
					<Select
						onChange={event => setStrokeWidth(event.target.value)}
						style={{ ...buttonStyle, maxHeight: '35px' }}
						value={strokeWidth}
					>
						<option value='1'>1px</option>
						<option value='2'>2px</option>
						<option value='3'>3px</option>
					</Select>
					<SketchPicker
						onChange={value => setColor(value.hex)}
						color={color}
					/>
					<Button
						style={buttonStyle}
						onClick={() => setIsModalOpen(true)}
					>
						Guardar posiciones
					</Button>
					<SaveDialog
						isShown={isModalOpen}
						onCloseComplete={() => {
							setIsModalOpen(false);
						}}
						onConfirm={saveName => {
							window.localStorage.setItem(
								`vboard.${saveName}`,
								JSON.stringify(positions)
							);
							setIsModalOpen(false);
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
								setPositions(JSON.parse(posit));
								setHasClicked(true);
							}
						}}
					>
						<Button style={buttonStyle}>
							{'Selecciona táctica...'}
						</Button>
					</SelectMenu>
					<Button
						style={buttonStyle}
						onClick={() => {
							setHasToExport(!hasToExport);
						}}
					>
						Export Image
					</Button>
					{uri && hasToExport && (
						<ExportImage
							uri={uri}
							fileName={`vboard-${Date.now()}.png`}
						/>
					)}
				</Pane>
			</Pane>
		</Pane>
	);
}

export default App;
