import React, { useState } from "react";

export default function ExcelUploader() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (
      selectedFile &&
      selectedFile.type === "application/vnd.ms-excel.sheet.macroEnabled.12"
    ) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError(
        "* Verifica que el archivo esté en formato Excel y extensión .xlsm"
      );
    }
  };

  return (
    <>
      <h3 className="text-white text-center text-2xl my-8">
        Cargar archivo de consolidación
      </h3>
      <div className="flex">
        <div class="file-upload relative">
          <span>BROWSE</span>
          <input
            type="file"
            name="FileAttachment"
            id="FileAttachment"
            className="upload"
          />
        </div>
        <button className="p-3 bg-blueSecondary text-white rounded-full">
          +
        </button>
        <button className="bg-greenPrimary">Comenzar</button>
      </div>

      <span className="text-white"> {error !== null && error}</span>
    </>
  );
}
