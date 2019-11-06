import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const Ball = props => {
	const [image] = useImage('http://localhost:3000/ball3.png');
	return <Image image={image} {...props} ref={props.getRef} />;
};

Ball.displayName = 'Ball';

export default Ball;
