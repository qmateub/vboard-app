import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const Ball = props => {
	const [image] = useImage('https://qmateub.github.io/vboard-app/ball3.png');
	return <Image image={image} {...props} ref={props.getRef} />;
};

Ball.displayName = 'Ball';

export default Ball;
