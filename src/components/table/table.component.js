import React from 'react'
import { randomKey } from 'utils'
/**
 * Tabla dinámica que recive un array de objetos transformados
 * @param {Array} titles - para mostrar en el encabezado de la tabla
 * @param {Array} rows - resultado de la consulta transformado
 * @param {String} prefixTitle - prefijo para la key de los elementos autogenerados por defecto random
 * @param {String} prefixRow  - prefijo para la key de los elementos autogenerados por defecto random
 * @param {Boolean} selectable - para indicarle a la tabla que sus filas son seleccionables, por defecto 'false'
 * @param {Function} onSelectedRow - a ejecutar cuando una fila es seleccionada, retorna el campo 'hidden' en el array 'rows'
 * @returns {React.FunctionComponent}
 */
function Table({
	titles = [],
	rows = [],
	numerable = true,
	numerableTitle = '#',
	prefixTitle = randomKey(),
	prefixRow = randomKey(),
	selectable = false,
	onSelectedRow = row => {
		console.log(row)
	},
}) {
	return (
		<section className='table-component'>
			<table className='table-component__content'>
				<thead className='table-component__content--header'>
					<tr className='table-component__content--row'>
						{numerable ? <th>{numerableTitle}</th> : null}
						{titles.map((title, index) => (
							<th key={`${prefixTitle}_${index}`}>{title}</th>
						))}
					</tr>
				</thead>
​
				<tbody>
					{rows.map((row, index) => (
						<tr
							key={`${prefixRow}_${index}`}
							className={`table-component__content--row ${
								index % 2 ? 'pair' : 'odd'
							}${selectable ? ' selectable' : ''}`}
							onClick={
								selectable && row?.hidden
									? () => onSelectedRow(row.hidden)
									: null
							}>
							{numerable ? <td>{index + 1}</td> : null}
							{Object.keys(row).map(
								(row_key, rk_index) =>
									row_key !== 'hidden' && (
										<td
											key={`${prefixRow}_${index}_${rk_index}`}>
											{row[row_key]}
										</td>
									)
							)}
						</tr>
					))}
				</tbody>
			</table>
		</section>
	)
}

export default React.memo(Table)