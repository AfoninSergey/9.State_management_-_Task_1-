import { GameLayout } from './game-layout';
import { useDispatch } from 'react-redux';
import { RESTART_GAME } from './actions';

export const Game = () => {
	const dispatch = useDispatch();
	const onRestartGame = () => {
		dispatch(RESTART_GAME);
	};

	return <GameLayout onRestartGame={onRestartGame} />;
};
