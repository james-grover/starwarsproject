const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: []
		},

		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const characters = store.characters.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ characters: characters });
			}
		}
	};
};

export default getState;
