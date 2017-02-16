import { h, Component, render } from 'preact';

export class Signup extends Component {
    render({ }, { text='Some Text' }) {
		return (
			<section class="Dashboard">
				<input value={text} onInput={this.linkState('text')} />
				<div>In caps: {text.toUpperCase()}</div>
			</section>
		);
	}
}
export class Login extends Component {
    
    componentDidMount(){
        console.log(this.base)
    }
    
    componentWillMount(){
        document.body.className += "bg_enabled";
    }
    render(props, state) {
        console.log(props, state)
        return (
			<div class="login">
                <div class="ui relaxed grid container">
                    <div class="three column centered row">
                        <div class="column">


                            <div class="ui centered grid">
                                <div class="four column centered row">
                                    <div class="column">
                                        <svg height="66" width="66">
                                                <use xlinkHref="#askparrot_logo_inverted">
                                                </use>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        

                            <div class="ui segment">
                                <form class="ui form">
                                    <div class="field">
                                        <label>First Name</label>
                                        <input type="text" name="first-name" placeholder="First Name"/>
                                    </div>
                                    <div class="field">
                                        <label>Last Name</label>
                                        <input type="text" name="last-name" placeholder="Last Name"/>
                                    </div>
                                    <div class="field">
                                        <div class="ui checkbox">
                                            <input type="checkbox" tabindex="0" class="hidden"/>
                                            <label>I agree to the Terms and Conditions</label>
                                        </div>
                                    </div>
                                    <button class="ui button" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
    }
}