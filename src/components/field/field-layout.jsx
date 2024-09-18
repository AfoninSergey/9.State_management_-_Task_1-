import { Component } from 'react';
import { PLAYER_ICON } from '../../constants';

export class FieldLayout extends Component {
	render() {
		const { field, onCellClick } = this.props;
		return (
			<div className="flex flex-wrap box-content w-72 mx-auto mt-5 border border-black">
				{field.map((cellPlayer, i) => (
					<button
						className="flex  w-24 h-24 border border-black cursor-pointer text-7xl justify-center p-2 bg-white  text-black"
						key={i}
						type="button"
						onClick={() => onCellClick(i)}
					>
						{PLAYER_ICON[cellPlayer]}
					</button>
				))}
			</div>
		);
	}
}
