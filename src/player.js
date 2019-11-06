import React from 'react';
import { Text, Circle, Group } from 'react-konva';

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
				x={-5}
				y={-7}
				text={props.label}
				fontSize={18}
			/>
			<Circle
				shadowBlur={2}
				radius={15}
				fill={props.isLibero ? 'blue' : 'red'}
			></Circle>
		</Group>
	);
};

export default Player;
