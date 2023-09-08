import { DataTypes } from "../../App";
import { TableContainer } from "./index.style";
import { BsCheckCircle } from 'react-icons/bs';

interface ProductsTableProps {
    data: DataTypes[];
}

const ProductsTable = (props: ProductsTableProps) => {

    const { data } = props;

    return (
        <TableContainer>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Preço Atual</th>
                    <th>Novo Preço</th>
                    <th>Erro</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product, i) => {
                    return (
                        <tr key={i}>
                            <th>{product.code}</th>
                            <th>{product.name}</th>
                            <th>{product.current_price}</th>
                            <th>{product.new_price}</th>
                            <th
                                className={product.erro ? 'erro' : 'success'}
                            >
                                {product.erro ? product.erro : <BsCheckCircle />}
                            </th>
                        </tr>
                    )
                })}
            </tbody>
        </TableContainer>
    )
}

export default ProductsTable;