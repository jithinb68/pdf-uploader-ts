function FileDetails(props) {
  const selectedFile = props.selectedFile;
  return (
    <div className="file-details">
      <p>Filename: {selectedFile.name}</p>
      <p>Filetype: {selectedFile.type}</p>
      <p>Size in bytes: {selectedFile.size}</p>
      <p>
        lastModifiedDate: {selectedFile.lastModifiedDate.toLocaleDateString()}
      </p>
    </div>
  );
}

export default FileDetails;
