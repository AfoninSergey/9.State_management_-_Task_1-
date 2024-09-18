import { Component } from 'react';
import { connect } from 'react-redux';
import { RESTART_GAME } from './actions';
import { Field, Information } from './components';

class GameContainer extends Component {
	render() {
		const { onRestartGame } = this.props;
		return (
			<div className="text-center p-12 text-orange-500">
				<Information />
				<Field />
				<button
					className="mt-6 w-36 h-8 text-black bg-zinc-300 hover:bg-zinc-200 active:bg-zinc-50  cursor-pointer rounded"
					onClick={onRestartGame}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onRestartGame: () => dispatch(RESTART_GAME),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);
