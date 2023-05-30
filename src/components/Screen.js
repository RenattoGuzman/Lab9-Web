import React, { useContext } from 'react'
import { Contexto } from '../contexto/Contexto';
import { Textfit } from 'react-textfit';

const Screen = () => {
	const { calc } = useContext(Contexto);
	return (
		<Textfit className="screen" max={50} mode="single">{calc.num ? calc.num : calc.res}</Textfit>
	)
}

export default Screen