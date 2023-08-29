import React, { useEffect, useState } from "react";
import { Handle } from "react-flow-renderer";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SmsTypeNode.module.css";
import PopUpComponent from "./PopUpComponent";
import ButtonCross from "../ButtonCross";
import removeNode from "../../Utils/Helpers/removeNode";

function SmsTypeNode({ id, type }) {
  const [smsDetails, setSmsDetails] = useState({
    name: "",
    smsBody: "",
  });
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.handleNode.initialElements);

  const handleOnChange = (smsDetails) => {
    setSmsDetails(smsDetails);
  };

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch({
      type: "HANDLE_COMPONENT_RENDER",
      componentToRender: (
        <PopUpComponent
          handleOnChange={handleOnChange}
          inputSmsBody={smsDetails.smsBody}
          inputName={smsDetails.name}
        />
      ),
    });
    dispatch({ type: "HANDLE_POP_UP", popUpState: true });
  };

  return (
    <div className={styles.WrapperWrapper}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ButtonCross
          onClick={() => {
            const tempEle = removeNode(elements, id, type);
            dispatch({ type: "INITIAL_ELEMENTS", initialElements: tempEle });
            setTimeout(() => {
              document.getElementById("LayoutButton").click();
              document.getElementById("LayoutButton").click();
            }, 200);
          }}
        />
      </div>
      <div className={styles.Wrapper}>
        <h2 className={styles.Heading}>SMS Workflow</h2>
        <button onClick={handleClick}>Edit SMS Details</button>
        <button>Select SMS Template</button>
      </div>
      <Handle type="target" position="top" className={styles.Handle} />
      <Handle type="source" position="bottom" className={styles.Handle} />
    </div>
  );
}

export default SmsTypeNode;
