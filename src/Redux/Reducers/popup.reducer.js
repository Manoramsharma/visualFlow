import {
  HANDLE_POP_UP,
  HANDLE_EDGE_CLICK,
  HANDLE_COMPONENT_RENDER,
} from "../ActionTypes";
import OptionSelection from "../../flowcomponents/OptionSelection";

export const handlePopUp = (
  state = {
    popUpState: false,
    edgeId: "",
    componentToRender: <OptionSelection />,
  },
  action
) => {
  switch (action.type) {
    case HANDLE_POP_UP: {
      return {
        ...state,
        popUpState: action.popUpState,
      };
    }
    case HANDLE_EDGE_CLICK: {
      return {
        ...state,
        edgeId: action.edgeId,
      };
    }
    case HANDLE_COMPONENT_RENDER: {
      return {
        ...state,
        componentToRender: action.componentToRender,
      };
    }
    default:
      return state;
  }
};
