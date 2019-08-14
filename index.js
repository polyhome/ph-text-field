import {
	LitElement,
	html,
	css
} from "https://unpkg.com/lit-element@latest/lit-element.js?module";

class TextField extends LitElement {
	/** Define styles */
	static get styles() {
		return css`
			.container {
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		`;
	}

	/** Define HTML to be rendered */
	render() {
		return html`
			<div class="container">
				${this.card.state.text}
			</div>
		`;
	}
}

customElements.define("ph-text-field", TextField);
