import React, { Component } from "react";
import classNames from "classnames";

export default class UINotification extends Component {
	render() {
		const { text, title } = this.props;
		return (
			<div
				className={classNames(
					"alert",
					"alert-success",
					{ "notification__block--show": !!text },
					{ "notification__block--hide": !!!text }
				)}
				onClick={::this.props.hideClick}
			>
				<strong>{title}</strong> & nbsp;
				{text}
			</div>
		);
	}
}
