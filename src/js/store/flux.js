import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorite:[],
			people: [
				
			],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
			loadSomeData: () => {
			
					
					axios.get("https://www.swapi.tech/api/people").then((res)=> {
						setStore({people: [res.data.results]});
						console.log("store", getStore().people);
			})
			
			
			
				/**
				 * 
				
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
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
