import React from 'react';
import { nanoid } from "nanoid";

export default function Section({ title, children }){
	return (
		<div key={nanoid()}>
			<h2>{title}</h2>
			{children}
		</div>
	);
}
