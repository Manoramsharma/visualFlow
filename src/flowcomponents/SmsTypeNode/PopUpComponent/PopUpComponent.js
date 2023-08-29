import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import OptionSelection from "../../OptionSelection";
import styles from "./PopUpComponent.module.css";

function PopUpComponent({ handleOnChange, inputName, inputSmsBody }) {
  const details = useRef(null);
  const handleChange = (event) => {
    event.preventDefault();
    handleOnChange({
      name: details.current.elements.name.value,
      smsBody: details.current.elements.smsBody.value,
    });
  };
  const dispatch = useDispatch();

  return (
    <form
      className={styles.Wrapper}
      ref={details}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "HANDLE_POP_UP", popUpState: false });
        setTimeout(() => {
          dispatch({
            type: "HANDLE_COMPONENT_RENDER",
            componentToRender: <OptionSelection />,
          });
        }, 500);
      }}
    >
      <div className={styles.Heading}>SMS Details</div>
      <input
        type="text"
        name="name"
        id="name"
        autoComplete="off"
        placeholder="Name"
        defaultValue={inputName}
        onChange={handleChange}
      />
      <textarea
        name="smsBody"
        cols="30"
        rows="10"
        id="smsBody"
        maxLength="160"
        placeholder="Body(Max 160 Char)"
        defaultValue={inputSmsBody}
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
}

export default PopUpComponent;
