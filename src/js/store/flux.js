const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			photo: [
				{
					pic:
						"https://starwars-visualguide.com/assets/img/characters/1.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/characters/2.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/characters/3.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/characters/4.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/characters/5.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/characters/6.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/characters/7.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/characters/8.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/characters/9.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/characters/10.jpg"
				}
			],
			planetpics: [
				{
					pic:
						"https://starwars-visualguide.com/assets/img/planets/2.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/planets/3.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/planets/4.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/planets/5.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/planets/6.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/planets/7.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/planets/8.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/planets/9.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/planets/10.jpg"
				},
				{
					pic:
						"https://starwars-visualguide.com/assets/img/planets/11.jpg"
				}
			]
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
