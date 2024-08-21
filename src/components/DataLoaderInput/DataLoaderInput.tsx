import { useState } from "react";
import styles from "./DataLoaderInput.module.scss";

export default function DataLoaderInput() {
  const [data, setData] = useState();

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
    <div>
      <input onChange={(e) => handleChange(e.target.files[0])} className={styles.fileInput} type="file" />
      <button onClick={() => console.log(data)}>123</button>
      {data ? <p>Baza klientów została wczytana.</p> : null}
    </div>
  );
}
