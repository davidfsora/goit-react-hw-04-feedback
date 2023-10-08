import React from 'react';
import { nanoid } from "nanoid";
import  styles  from "./FeedbackOptions.module.css";

export default function FeedbackOptions ({ options, onLeaveFeedback }){
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				gap: '10px',
				padding: '20px'
			}}>
			{options.map((option) => (
				<button key={nanoid()} className={styles.button} onClick={() => onLeaveFeedback(option)}>
					{option}
				</button>
			))}
		</div>
	);
}

//  class FeedbackOptions extends Component {
// 	randomId = nanoid();
// 	render() {
// 		return (
// 			<div key={this.randomId}
// 			style={{
// 				display: 'flex',
// 				justifyContent: 'center',
// 				gap: '10px',
// 				padding: '20px'
// 			}}>
// 				{this.props.options.map((option) => (
// 					<button key={this.randomId} className={styles.button} onClick={() => this.props.onLeaveFeedback()}>
// 						{option}
// 					</button>
// 				))}
// 			</div>
// 		);
// 	}
// }