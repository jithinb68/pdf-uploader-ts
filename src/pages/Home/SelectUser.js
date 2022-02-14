import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Radio } from "antd";
import { StoreContext } from "../../App";

function SelectUser() {
  const { userType, userOptions, setUserType } = useContext(StoreContext);
  return (
    <div>
      <div className="questionBox">
        <h4 className="question">Select a User type and proceed</h4>
        <Radio.Group
          options={userOptions}
          onChange={(e) => {
            setUserType(e.target.value);
          }}
          value={userType}
        />
      </div>
      <Link to="/edit">
        <Button type="primary">Proceed</Button>
      </Link>
    </div>
  );
}

export default SelectUser;
