import React from 'react'

const FileDownload = ({filename="logo.png"}) => {
    const handleDownload = () => {
        window.open(`/api/files/download/${filename}`, "_blank");
      };
  return (
    <button onClick={handleDownload}>다운로드: {filename}</button>
  )
}

export default FileDownload