import React from 'react'
import { useContext } from 'react'
import { Contexto } from '../contexto/Contexto'

const getStyleName = btn => {
	const className = {
		'=': 'igual',
		'x': 'ope',
		'-': 'ope',
		'+': 'ope',
		'/': 'ope',
		'C': 'ope',
		'+/-': 'ope',
		'%': 'ope'
	}
	return className[btn]
}

const Boton = ({ value }) => {

	const { calc, setCalc } = useContext(Contexto);

	const commaClick = () => {
		setCalc({
			...calc,
			num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
		});
	}

	const resetClick = () => {
		setCalc({ sign: '', num: 0, res: 0 })
	}

	const handleClickButton = () => {
		const numberString = value.toString()

		let numberValue;
		if (numberString === '0' && calc.num === 0) {
			numberValue = "0"
		} else {
			console.log(calc.num);
			console.log(calc.num.toString().length);

			if (calc.num.toString().length < 9) {

				numberValue = Number(calc.num + numberString)
			}
			else {
				numberValue = Number(calc.num)
			}
		}

		setCalc({
			...calc,
			num: numberValue
		})
	}

	const signClick = () => {
		setCalc({
			sign: value,
			res: !calc.res && calc.num ? calc.num : calc.res,
			num: 0
		})
	}

	const equalsClick = () => {
		if (calc.res && calc.num) {
			const math = (a, b, sign) => {
				const result = {
					'+': (a, b) => a + b,
					'-': (a, b) => a - b,
					'x': (a, b) => a * b,
					'/': (a, b) => a / b,
				}
				return result[sign](a, b);
			}
			const result = math(calc.res, calc.num, calc.sign);
			const truncatedResult = result.toString().slice(0, 9);

			setCalc({
				res: Number(truncatedResult),
				sign: '',
				num: 0
			})
		}
	}

	const persenClick = () => {
		setCalc({
			num: (calc.num / 100),
			res: (calc.res / 100),
			sign: ''
		})
	}

	const invertClick = () => {
		setCalc({
			num: calc.num ? calc.num * -1 : 0,
			res: calc.res ? calc.res * -1 : 0,
			sign: ''
		})
	}

	const handleBtnClick = () => {
		const results = {
			'.': commaClick,
			'C': resetClick,
			'/': signClick,
			'x': signClick,
			'-': signClick,
			'+': signClick,
			'=': equalsClick,
			'%': persenClick,
			'+/-': invertClick
		}
		if (results[value]) {
			return results[value]()
		} else {
			return handleClickButton()
		}
	}


	return (
		<button onClick={handleBtnClick} className={`${getStyleName(value)} boton`}>{value}</button>
	)
}

export default Boton