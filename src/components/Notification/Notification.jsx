import React from "react";

export default function Notification({ title, message }){
	return (
		<div>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>
	);
}
