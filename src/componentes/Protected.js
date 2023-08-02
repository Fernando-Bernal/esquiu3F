import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children }) => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.reducerUsuario.user);
	if (user === null) {
		return navigate("/");
	}
	return children;
};

export default Protected;
