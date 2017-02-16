import { h, Component, render } from 'preact';

export default class Dashboard extends Component {
    render({ }, { text='Some Text' }) {
		return (
			<section class="Dashboard">
				<input value={text} onInput={this.linkState('text')} />
				<div>In caps: {text.toUpperCase()}</div>
			</section>
		);
	}
}
