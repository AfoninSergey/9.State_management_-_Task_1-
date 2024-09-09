import { useDispatch, useSelector } from 'react-redux';
import { PLAYER, STATUS } from '../../constants';
import { selectCurrentPlayer, selectField, selectStatus } from '../../selectors';
import { checkWin, checkEmptyCell } from '../../utils';
import { FieldLayout } from './field-layout';
import { setCurrentPlayer, setField, setStatus } from '../../actions';

export const Field = () => {
	const field = useSelector(selectField);
	const status = useSelector(selectStatus);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const dispatch = useDispatch();

	const onCellClick = (cellIndex) => {
		if (status === STATUS.WIN || field[cellIndex] !== PLAYER.NOBODY) return;

		const newField = [...field];
		newField[cellIndex] = currentPlayer;
		dispatch(setField(newField));

		if (checkWin(newField, currentPlayer)) {
			dispatch(setStatus(STATUS.WIN));
		} else if (checkEmptyCell(newField)) {
			dispatch(
				setCurrentPlayer(
					currentPlayer === PLAYER.CROSS ? PLAYER.ZERO : PLAYER.CROSS,
				),
			);
		} else {
			dispatch(setStatus(STATUS.DRAW));
			dispatch(setCurrentPlayer(PLAYER.NOBODY));
		}
	};

	return <FieldLayout field={field} onCellClick={onCellClick} />;
};
