const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			songs:[],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
			
		},
		actions: {

			GetSongs : () => {
				 fetch('https://lyrics-finder1.p.rapidapi.com/artists/avenged-sevenfold', {
					method: 'GET',
					headers: {
					  'X-RapidAPI-Key': 'b91f3eccdbmshc4638551fffa5fdp1ba5c6jsnf5654dcdc4d5',
					  'X-RapidAPI-Host': 'lyrics-finder1.p.rapidapi.com'
					}
				}).then((res) => {
					return res.json();
				  })
				  .then((data) => {
					console.log(data)
					setStore({songs:data})
				  }).catch((err) => console.error(err))
			  },

			  listarFavorites: () => {
				const store = getStore();
				return store.favorites;
			  },
		
			  saveFavorite: (name, id) => {
				const store = getStore();
				const newFavorite = {};
				newFavorite.name = name;
				newFavorite.id = id;
				const auxFavorites = [...store.favorites, newFavorite]; 
		
				setStore({ favorites: auxFavorites });
			  },
			  deleteFavorites: (name) => {
				const store = getStore();
				const data = store.favorites.filter((item) => item.name !== name);
				setStore({ ...store, favorites: data });
			  },
			  numFavorites: () => {
				const store = getStore();
				return store.favorites.length;
			  },

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
 
				//reset the global store
				setStore({ demo: demo })
			}
		}
	};
};

export default getState;