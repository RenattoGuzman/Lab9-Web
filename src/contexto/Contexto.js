import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';


export const Contexto = createContext()

const ContextoProv = ({ children }) => {

	const [calc, setCalc] = useState({
		sign: "",
		num: 0,
		res: 0
	});

	const provValue = {
		calc, setCalc
	}

	return (
		<Contexto.Provider value={provValue}>
			{children}
		</Contexto.Provider>
	)
}

export default ContextoProv