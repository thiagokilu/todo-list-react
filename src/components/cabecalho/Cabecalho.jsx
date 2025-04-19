import React from "react";
import style from "./Cabecalho.module.css";
import {Link} from "react-router-dom";

const Cabecalho = () => {
	return (
		<div className={style.Cabecalho }>
			<Link to='/'>
				<h1><span>Todo</span>
					List</h1>
			</Link>
			<Link to='/sobre-nos'>Sobre nós</Link>
		</div>
	)
};

export { Cabecalho };
