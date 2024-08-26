import { useContext, useId } from "react";
import styles from "./DataLoaderInput.module.scss";
import ClientsDataContext from "../../context/ClientsDataContext";

export default function DataLoaderInput() {
  const fileInputId = useId();
  const { clientsData, setClientsData } = useContext(ClientsDataContext);

  let fileReader: FileReader;

  function handleFileRead() {
    const content = fileReader.result;
    if (setClientsData) {
      setClientsData(JSON.parse(content as string));
    }
  }

  function handleChange(file: Blob) {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  }

  return (
    <div className={styles.mainContainer}>
      <label className={clientsData ? styles.fileInputLoaded : styles.fileInput} htmlFor={fileInputId}>
        <input
          className={styles.input}
          onChange={(e) => handleChange(e.target.files![0])}
          type="file"
          accept=".json"
          id={fileInputId}
        />
      </label>
    </div>
  );
}
