import React, { useState } from "react";
import styles from "./DelayTypeNode.module.css";
import { Handle } from "react-flow-renderer";
import { useDispatch, useSelector } from "react-redux";
import PopUpComponent from "./PopUpComponent";
import ButtonCross from "../ButtonCross";
import removeNode from "../../Utils/Helpers/removeNode";

const DelayTypeNode = ({ id, type }) => {
  const [delayDetails, setDelayDetails] = useState({
    amount: "1",
    delay: "hour(s)",
  });
  const initialElements = useSelector(
    (state) => state.handleNode.initialElements
  );
  const handleOnChange = (delayDetails) => {
    setDelayDetails(delayDetails);
  };
  const dispatch = useDispatch();
  const handleOnClick = (event) => {
    event.stopPropagation();
    dispatch({
      type: "HANDLE_COMPONENT_RENDER",
      componentToRender: (
        <PopUpComponent
          handleOnChange={handleOnChange}
          inputAmount={delayDetails.amount}
          inputDelay={delayDetails.delay}
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
            const tempEle = removeNode(initialElements, id, type);
            dispatch({ type: "INITIAL_ELEMENTS", initialElements: tempEle });
            setTimeout(() => {
              document.getElementById("LayoutButton").click();
              document.getElementById("LayoutButton").click();
            }, 200);
          }}
        />
      </div>
      <div className={styles.Wrapper}>
        <h2 className={styles.Heading}>Delay</h2>
        <p>
          {delayDetails.amount} {delayDetails.delay}
        </p>
        <button onClick={handleOnClick}>Edit Delay</button>
      </div>
      <Handle type="target" position="top" className={styles.Handle} />
      <Handle type="source" position="bottom" className={styles.Handle} />
    </div>
  );
};

export default DelayTypeNode;
