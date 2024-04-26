import PropTypes from 'prop-types'

const Table = ({ data }) => {
    const total = (data.reduce((promedio, ingreso) => promedio + ingreso.income, 0) / data.length).toFixed(2)
    
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Empresa</th>
                        <th>Ingreso Neto</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((income, id) => (
                        <tr key = {id}>
                            <td>{income.brand}</td>
                            <td>{income.income}</td>
                        </tr>
                    ))}
                        
                </tbody>
                <tfoot>
                    <tr colSpan="2">
                        <p>
                        El Promedio es:                            {total}
                        </p>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}

Table.propTypes = {
    data: PropTypes.array
}

export default Table;
