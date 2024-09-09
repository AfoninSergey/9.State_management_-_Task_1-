import { useSelector } from 'react-redux';
import { PLAYER_ACTION, PLAYER_NAME } from '../../constants';
import { selectStatus, selectCurrentPlayer } from '../../selectors';
import { InformationLayout } from './information-layout';

export const Information = () => {
	const status = useSelector(selectStatus);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	const information = `${playerAction} ${playerName}`;

	return <InformationLayout information={information} />;
};
