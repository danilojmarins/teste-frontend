import { useState } from "react";
import Upload from "./components/Upload";
import { Button } from "./styles/Button.style";
import { Container } from "./styles/Container.style"
import axios from "axios";
import ProductsTable from "./components/ProductsTable";
import { BsCheckCircle } from 'react-icons/bs';

export interface DataTypes {
    code: number;
    name: string | undefined;
    current_price: number | undefined;
    new_price: number | undefined;
    erro: string | undefined;
}

const App = () => {

    const [file, setFile] = useState<File>();
    const [data, setData] = useState<DataTypes[]>();
    const [success, setSuccess] = useState<boolean>(false);

    const getFile = (file: File) => {
        setFile(file);
    }

    const validateFile = async () => {
        const csv = await new Response(file).arrayBuffer();
        const str = new TextDecoder().decode(csv);

        await axios.post(`${import.meta.env.VITE_API_URL}/validar`, {
            csv_string: str
        })
        .then((response) => {
            setData(response.data);
            setSuccess(false);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const erros = data?.some((product) => product.erro);

    const updateProducts = async () => {
        if (erros || !data) {
            return;
        }

        await axios.post(`${import.meta.env.VITE_API_URL}/atualizar`, {
            data: data
        })
        .then(() => {
            setSuccess(true);
            setData(undefined);
            setFile(undefined);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <Container>

            {data && <ProductsTable data={data} />}
            
            <Upload
                getFile={getFile}
            />

            <div className="btns">
                <Button
                    onClick={validateFile}
                    disabled={!file}
                >
                    Validar
                </Button>

                <Button
                    disabled={erros || !data}
                    onClick={updateProducts}
                >
                    Atualizar
                </Button>
            </div>

            {success &&
                <p className="updated">
                    <BsCheckCircle /> 
                    Produto atualizados! Carregue um novo arquivo.
                </p>
            }
        </Container>
    )
}

export default App;