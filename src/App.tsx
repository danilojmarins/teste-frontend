import { useState } from "react";
import Upload from "./components/Upload";
import { Button } from "./styles/Button.style";
import { Container } from "./styles/Container.style"

const App = () => {

    const [file, setFile] = useState<File>();

    const getFile = (file: File) => {
        setFile(file);
    }

    console.log(file);

    return (
        <Container>
            
            <Upload
                getFile={getFile}
            />

            <Button>Validar</Button>
            <Button disabled>Carregar</Button>
        </Container>
    )
}

export default App;