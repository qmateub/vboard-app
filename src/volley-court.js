import React from 'react';
import { Rect, Line, Group } from 'react-konva';
import { rectWidth, rectHeigth, posXRect, posYRect } from './constants';

function VolleyCourt(props) {
	if (!props.stage) return null;
	return (
		<Group>
			{props.lines.map(line => (
				<Line
					ref={node => node && node.moveToTop()}
					key={line.id}
					strokeWidth={line.strokeWidth}
					stroke={line.color}
					points={line.points}
					globalCompositeOperation={
						line.tool === 'eraser'
							? 'destination-out'
							: 'source-over'
					}
				/>
			))}
			<Line
				ref={node => node && node.moveToTop()}
				fill='white'
				stroke='white'
				strokeWidth={1}
				points={[
					posXRect,
					posYRect + rectHeigth / 2,
					posXRect + (rectWidth / 2) * 2,
					posYRect + rectHeigth / 2,
				]}
			/>
			<Line
				ref={node => node && node.moveToTop()}
				fill='white'
				stroke='white'
				strokeWidth={1}
				points={[
					posXRect,
					posYRect + rectHeigth / 2 - rectHeigth * 0.2,
					posXRect + (rectWidth / 2) * 2,
					posYRect + rectHeigth / 2 - rectHeigth * 0.2,
				]}
			/>
			<Line
				ref={node => node && node.moveToTop()}
				fill='white'
				stroke='white'
				strokeWidth={1}
				points={[
					posXRect,
					posYRect + rectHeigth / 2 + rectHeigth * 0.2,
					posXRect + (rectWidth / 2) * 2,
					posYRect + rectHeigth / 2 + rectHeigth * 0.2,
				]}
			/>
			<Rect
				x={posXRect}
				y={posYRect}
				width={rectWidth}
				height={rectHeigth}
				fill='#E58168'
				stroke='white'
				strokeWidth={1}
				onMouseDown={e => {
					props.setIsPaint(true);
					const pointer = e.target.getStage().getPointerPosition();
					console.log(pointer);
					const newLines = props.lines.concat({
						id: Date.now(),
						tool: 'pen',
						points: [pointer.x, pointer.y],
						strokeWidth: props.strokeWidth,
						color: props.color,
					});
					props.setLines(newLines);
				}}
				onMouseMove={e => {
					if (!props.isPaint) {
						return;
					}
					const pointer = e.target.getStage().getPointerPosition();
					const newLines = props.lines.slice();
					const lastLine = {
						...newLines[newLines.length - 1],
					};
					lastLine.points = lastLine.points.concat([
						pointer.x,
						pointer.y,
					]);
					newLines[newLines.length - 1] = lastLine;
					props.setLines(newLines);
				}}
				onMouseUp={e => {
					props.setIsPaint(false);
				}}
				onTouchEnd={e => {
					props.setIsPaint(false);
				}}
			/>
		</Group>
	);
}

export default VolleyCourt;
