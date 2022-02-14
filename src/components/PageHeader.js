import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../App";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

function PageHeader() {
  const {
    userType,
    userOptions,
    setUserType,
    instance,
    setArrayBuffer,
  } = useContext(StoreContext);

  const handleUserTypeChange = async (e) => {
    let arrayBufferClone = await instance.exportPDF();
    setArrayBuffer(arrayBufferClone);
    setUserType(e.domEvent.target.textContent);
  };

  const menu = (
    <Menu onClick={handleUserTypeChange}>
      {userOptions?.map((item) => {
        return <Menu.Item key={item.toString()}>{item}</Menu.Item>;
      })}
    </Menu>
  );

  return (
    <div className="wrapper"> 
      <Link to="/">
        <Button type="primary">Back to Home</Button>
      </Link>
      <Dropdown overlay={menu}>
        <span className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Currently Selected - {userType} <DownOutlined />
        </span>
      </Dropdown>
    </div>
    
  );
}

export default PageHeader;
