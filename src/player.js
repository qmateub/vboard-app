import React from 'react';
import { Text, Circle, Group } from 'react-konva';

const defineXPerLabel = label => {
	switch (label) {
		case 'MB':
			return -13;
		case 'W':
			return -8;
		case 'O':
			return -6;
		default:
			return -5;
	}
};

const Player = props => {
	return (
		<Group
			ref={props.getRef}
			x={props.x}
			y={props.y}
			draggable
			onDragEnd={({ evt }) =>
				props.onDragEnd({ x: evt.offsetX, y: evt.offsetY })
			}
		>
			<Text
				ref={node => node && node.moveToTop()}
				fill={props.isLibero ? 'white' : 'black'}
				x={defineXPerLabel(props.label)}
				y={-7}
				text={props.label}
				fontSize={18}
			/>
			{props.name && (
				<Text
					ref={node => node && node.moveToTop()}
					fill='white'
					x={-((props.name.length * 45) / 10)}
					y={-30}
					text={props.name.toUpperCase()}
					fontSize={12}
				/>
			)}
			<Circle
				shadowBlur={2}
				radius={15}
				fill={props.isLibero ? 'blue' : 'red'}
			/>
		</Group>
	);
};

export default Player;
