import { Component } from 'react';
import { connect } from 'react-redux';
import { PLAYER, STATUS } from '../../constants';
import { checkWin, checkEmptyCell } from '../../utils';
import { setCurrentPlayer, setField, setStatus } from '../../actions';
import { FieldLayout } from './field-layout';

class FieldContainer extends Component {
	onCellClick = (cellIndex) => {
		const { status, field, currentPlayer, dispatch } = this.props;
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

	render() {
		const { field } = this.props;
		return <FieldLayout field={field} onCellClick={this.onCellClick} />;
	}
}

const mapStateToProps = ({ field, status, currentPlayer }) => ({
	field,
	status,
	currentPlayer,
});

export const Field = connect(mapStateToProps)(FieldContainer);
