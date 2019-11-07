import React from 'react';
import { Stage, Layer, Group } from 'react-konva';
import { Pane, Heading } from 'evergreen-ui';
import './App.css';
import VolleyCourt from './volley-court';
import Ball from './ball';
import Player from './player';
import LeftBar from './left-bar';
import Legend from './legend';
import { initial } from './positions';

function App() {
	let setter, recep1, recep2, opuesto, central, libero, ball, stage, court;
	const [refs, setRefs] = React.useState({
		setter,
		recep1,
		recep2,
		opuesto,
		central,
		libero,
		ball,
		stage,
		court,
	});
	const [hasClicked, setHasClicked] = React.useState('');
	const [positions, setPositions] = React.useState(initial);
	const [hasToExport, setHasToExport] = React.useState(false);
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [isModalPlayerOpen, setIsModalPlayerOpen] = React.useState(false);
	const [uri, setUri] = React.useState('');
	const [lines, setLines] = React.useState([]);
	const [isPaint, setIsPaint] = React.useState(false);
	const [strokeWidth, setStrokeWidth] = React.useState(1);
	const color = '#000000';
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
			court,
		});
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
		court,
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
				<LeftBar
					setPositions={setPositions}
					setHasClicked={setHasClicked}
					setLines={setLines}
					setIsModalOpen={setIsModalOpen}
					isModalOpen={isModalOpen}
					positions={positions}
					setIsModalPlayerOpen={setIsModalPlayerOpen}
					isModalPlayerOpen={isModalPlayerOpen}
					setHasToExport={setHasToExport}
					hasToExport={hasToExport}
					uri={uri}
					setStrokeWidth={setStrokeWidth}
					strokeWidth={strokeWidth}
				/>
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
					<Layer>
						<Group
							ref={node => {
								court = node;
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
								name={positions.setter.name}
								label='S'
								onDragEnd={newPosition =>
									setPositions({
										...positions,
										setter: {
											...positions.setter,
											...newPosition,
										},
									})
								}
							/>
							<Player
								getRef={node => {
									recep1 = node;
								}}
								name={positions.recep1.name}
								x={posIni.recep1.x}
								y={posIni.recep1.y}
								label='R'
								onDragEnd={newPosition =>
									setPositions({
										...positions,
										recep1: {
											...positions.recep1,
											...newPosition,
										},
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
								name={positions.recep2.name}
								onDragEnd={newPosition =>
									setPositions({
										...positions,
										recep2: {
											...positions.recep2,
											...newPosition,
										},
									})
								}
							/>
							<Player
								getRef={node => {
									opuesto = node;
								}}
								x={posIni.opuesto.x}
								y={posIni.opuesto.y}
								name={positions.opuesto.name}
								label='O'
								onDragEnd={newPosition =>
									setPositions({
										...positions,
										opuesto: {
											...positions.opuesto,
											...newPosition,
										},
									})
								}
							/>
							<Player
								getRef={node => {
									central = node;
								}}
								x={posIni.central.x}
								y={posIni.central.y}
								name={positions.central.name}
								label='C'
								onDragEnd={newPosition =>
									setPositions({
										...positions,
										central: {
											...positions.central,
											...newPosition,
										},
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
								name={positions.libero.name}
								isLibero
								onDragEnd={newPosition =>
									setPositions({
										...positions,
										libero: {
											...positions.libero,
											...newPosition,
										},
									})
								}
							/>
						</Group>
					</Layer>
				</Stage>
				<Legend />
			</Pane>
		</Pane>
	);
}

export default App;
