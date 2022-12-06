import { useState } from 'react';
import { answers } from './Eightball_answers';
import './EightBall.css';

const EightBall = (props) => {
	const genRandom = () => Math.floor(Math.random() * props.answers.length);

	// const getAnswer = () => {
	// 	setAnswer(genRandom());
	// };
	const restart = () => {
		setAnswer(null);
	};

	const setColor = () => {
		if (props.answers[answer].color === 'red') {
			return 'EightBall-red-button';
		} else if (props.answers[answer].color === 'green') {
			return 'EightBall-green-button';
		} else {
			return 'EightBall-goldenrod-button';
		}
	};

	const [ answer, setAnswer ] = useState(null);
	console.log(answer);

	return (
		<div className="EightBall">
			<button
				className={answer === null ? 'EightBall-starter-button' : setColor()}
				onClick={() => setAnswer(genRandom())}
			>
				{answer === null ? 'Think of a Question' : answers[answer].msg}
			</button>

			<button className="resetButton" onClick={restart}>
				Reset
			</button>
		</div>
	);
};

EightBall.defaultProps = {
	answers
};
export default EightBall;
