import { ChangeEvent } from "react";
import { UploadWidget } from "./index.style";

interface UploadProps {
    getFile: (file: File) => void;
}

const Upload = (props: UploadProps) => {

    const { getFile } = props;

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            getFile(e.target.files[0]);
        }
    }

    return (
        <UploadWidget>
            <label htmlFor="file" id="drop">
                <p className="title">Arraste o arquivo aqui</p>

                <p>ou</p>

                <input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                />
            </label>
        </UploadWidget>
    )
}

export default Upload;