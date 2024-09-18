import { Component } from 'react';
import { connect } from 'react-redux';
import { PLAYER_ACTION, PLAYER_NAME } from '../../constants';
import { InformationLayout } from './information-layout';
class InformationContainer extends Component {
	render() {
		const { status, currentPlayer } = this.props;
		const information = `${PLAYER_ACTION[status]} ${PLAYER_NAME[currentPlayer]}`;

		return <InformationLayout information={information} />;
	}
}

const mapStateToProps = ({ status, currentPlayer }) => ({ status, currentPlayer });

export const Information = connect(mapStateToProps)(InformationContainer);
