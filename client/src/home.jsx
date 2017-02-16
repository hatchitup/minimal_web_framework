import { h, Component, render } from 'preact';

/** our index route */
class Home extends Component {
	render({tesxt="s"}, { text='Some Text' }) {
        return (
			<section class="home">
				<input value={text} onInput={this.linkState('text')} />
				<div>In caps: {text.toUpperCase()}</div>
			</section>
		);
	}
}
export {Home}