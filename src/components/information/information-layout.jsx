import { Component } from "react";
export class InformationLayout extends Component {
	render() {
		const {information} = this.props
		return <div className="mt-5">{information}</div>
	}
}
