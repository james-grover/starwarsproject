const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: []
		},

		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const people = store.people.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ people: people });
			}
		}
	};
};

export default getState;
