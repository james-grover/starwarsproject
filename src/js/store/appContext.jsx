import React from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectStore = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			fetch("https://swapi.co/api/people/")
				.then(response => response.json())
				.then(data => {
					//  .then(json => console.log(json))
					//	.catch(error => console.log(error));

					let { store } = this.state;
					store.people = data.results;
					this.setState({ store });
				});
			fetch("https://swapi.co/api/planets/")
				.then(response => response.json())
				.then(data => {
					//  .then(json => console.log(json))
					//	.catch(error => console.log(error));

					let { store } = this.state;
					store.planets = data.results;
					this.setState({ store });
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default injectStore;
