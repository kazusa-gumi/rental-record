import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export const DropImage = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // ファイルがドロップされたときに行う処理
    console.log(acceptedFiles);
  }, []);

  // useDropzoneフックを使用して、getRootPropsとgetInputPropsを取得
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpg", "jpeg", "png", "gif"] },
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: "2px dashed #ccc",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>画像ファイルをこちらにドロップしてください</p>
      ) : (
        <p>
          クリックして画像ファイルを選択するか、ファイルをこちらにドロップしてください
        </p>
      )}
    </div>
  );
};
