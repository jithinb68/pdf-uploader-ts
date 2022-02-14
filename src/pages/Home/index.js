import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import BrandWrapper from "../../components/BrandWrapper"
import FileDetails from "../Home/FileDetails";
import SelectUser from "../Home/SelectUser";

function Home() {
  const hiddenFileInput = React.useRef(null);

  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const uploadFile = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="App">
      <Row className="upload-doc">
        <Col span={12}>
          <BrandWrapper />
        </Col>
        <Col span={12} className="flex-wrapper">
          <Row>
            <Col span={24}>
              <input
                type="file"
                name="file"
                ref={hiddenFileInput}
                onChange={changeHandler}
                style={{ display: "none" }}
              />
              <Button type="primary" onClick={uploadFile} size="large">
                {isSelected ? "Upload a different file" : "Upload PDF"}
              </Button>
            </Col>
            <Col span={24}>
              <div className="file-details-wrapper">
                {isSelected ? (
                  <FileDetails selectedFile={selectedFile}></FileDetails>
                ) : (
                  <h4>Select a file to upload.</h4>
                )}
              </div>
              <div>{isSelected && <SelectUser></SelectUser>}</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
