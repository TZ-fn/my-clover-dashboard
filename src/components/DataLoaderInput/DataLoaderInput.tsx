import { useId, useState } from "react";
import styles from "./DataLoaderInput.module.scss";

export default function DataLoaderInput() {
  const [data, setData] = useState();
  const fileInputId = useId();

  let fileReader: FileReader;

  function handleFileRead() {
    const content = fileReader.result;
    setData(JSON.parse(content as string));
  }

  function handleChange(file: Blob) {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  }

  return (
    <div className={styles.mainContainer}>
      <label className={data ? styles.fileInputLoaded : styles.fileInput} htmlFor={fileInputId}>
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
