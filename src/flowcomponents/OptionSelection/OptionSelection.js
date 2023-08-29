import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./OptionSelection.module.css";
import SubOptionSelection from "./SubOptionSelction";

import addNode from "../../Utils/Helpers/addNode";

const OptionSelection = () => {
  const initialElements = useSelector(
    (state) => state.handleNode.initialElements
  );
  const edgeId = useSelector((state) => state.handlePopUp.edgeId);
  const dispatch = useDispatch();
  return (
    <div className={styles.WrapperWrapper}>
      <h2 className={styles.Heading}>Add a next step to your workflow</h2>
      <div className={styles.Wrapper}>
        <SubOptionSelection
          name="sms"
          callerFunction={() => {
            const tempInitialElement = addNode(
              initialElements,
              edgeId,
              "smsNode",
              false,
              "correct"
            );
            setTimeout(() => {
              dispatch({
                type: "INITIAL_ELEMENTS",
                initialElements: tempInitialElement,
              });
              dispatch({
                type: "HANDLE_POP_UP",
                popUpState: false,
              });
            }, 100);
            setTimeout(() => {
              document.getElementById("LayoutButton").click();
              document.getElementById("LayoutButton").click();
            }, 200);
          }}
        />
        <SubOptionSelection
          name="delay"
          callerFunction={() => {
            const tempInitialElement = addNode(
              initialElements,
              edgeId,
              "delayNode",
              false,
              "correct"
            );
            setTimeout(() => {
              dispatch({
                type: "INITIAL_ELEMENTS",
                initialElements: tempInitialElement,
              });
              dispatch({
                type: "HANDLE_POP_UP",
                popUpState: false,
              });
            }, 100);
            setTimeout(() => {
              document.getElementById("LayoutButton").click();
              document.getElementById("LayoutButton").click();
            }, 200);
          }}
        />
        <SubOptionSelection
          name="condition"
          callerFunction={() => {
            const tempInitialElement = addNode(
              initialElements,
              edgeId,
              "conditionNode",
              true,
              "wrong"
            );
            setTimeout(() => {
              dispatch({
                type: "INITIAL_ELEMENTS",
                initialElements: tempInitialElement,
              });
              dispatch({
                type: "HANDLE_POP_UP",
                popUpState: false,
              });
            }, 100);
            setTimeout(() => {
              document.getElementById("LayoutButton").click();
              document.getElementById("LayoutButton").click();
            }, 200);
          }}
        />
      </div>
    </div>
  );
};

export default OptionSelection;
