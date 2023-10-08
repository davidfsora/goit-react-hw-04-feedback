import React, { useState, useEffect } from 'react';

import Section from "./Section/Section.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Statistics/Statistics.jsx";
import Notification from "./Notification/Notification.jsx";

export const App = () => {

	const [stats, setStats] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	useEffect(() => {
		handleFeedback();
	}, []);

	const handleFeedback = (type) => {
		setStats((prevState) => ({
			...prevState,
			[type]: prevState[type] + 1,
		}));
	};

	const countTotalFeedback = () => {
		return stats.good + stats.neutral + stats.bad;
	};

	const countPositiveFeedbackPercentage = () => {
		const totalFeedback = countTotalFeedback();
		if (totalFeedback === 0) return 0;
		return Math.round((stats.good / totalFeedback) * 100);
	};

	const totalFeedback = countTotalFeedback();
	const positivePercentage = countPositiveFeedbackPercentage();

	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 40,
				color: '#010101',
				padding: '20px',
				backgroundColor: '#fff'
			}}
		>
			<Section
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					gap: '20px',
					padding: '20px'
				}}
				title="Please leave feedback">
				<FeedbackOptions
					options={['good', 'neutral', 'bad']}
					onLeaveFeedback={handleFeedback}
				/>

				{totalFeedback > 0 ? (
					<Statistics
						title="Statistics"
						good={stats.good}
						neutral={stats.neutral}
						bad={stats.bad}
						total={totalFeedback}
						positivePercentage={positivePercentage}
					/>
				) : (
					<Notification
						title="Statistics"
						message="There is no feedback" />
				)}
			</Section>
		</div>
	);
}
