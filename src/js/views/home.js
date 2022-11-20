import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Cards} from "../../js/component/card.js";
import {Context} from "../store/appContext.js";
import {Favlist} from "../../js/component/favlist.js";

export const Home = () => {
	const {store, actions} = useContext(Context);
	function test() {
	
			alert("works");
	}
	console.log(store)
return(
	<div className="text-center mt-5">
			<div><h1>People</h1></div>
			<div className="container d-flex text-center mt-5">
			
				{store?.people[0].map(item=><Cards name={item.name} gender={item.gender} />)}
			</div>
			<div><h1>Planets</h1></div>
			<Favlist data={test}/>
			<div className="container d-flex text-center mt-5">
				
			</div>
			<div><h1>Vehicles</h1></div>
			<div className="container d-flex text-center mt-5">
				
			</div>
	</div>)
};
