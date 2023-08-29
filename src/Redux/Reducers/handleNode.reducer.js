import { INITIAL_ELEMENTS, SET_NODES } from "../ActionTypes";

export const handleNode = (
  state = {
    initialElements: [
      {
        id: "1",
        data: { label: "Set Up Workflow Trigger" },
        style: {
          fontSize: "var(--font-16)",
          fontWeight: "500",
        },
        position: { x: 0, y: 0 },
      },
      {
        id: "2",
        data: { label: "Node 3" },
        type: "selectorNode",
        position: { x: 0, y: 0 },
      },
      {
        id: "1-2",
        source: "1",
        target: "2",
        type: "smoothedge",
      },
    ],
    nodes: [],
  },
  action
) => {
  switch (action.type) {
    case INITIAL_ELEMENTS: {
      return {
        ...state,
        initialElements: action.initialElements,
      };
    }
    case SET_NODES: {
      return {
        ...state,
        nodes: action.nodes,
      };
    }
    default:
      return state;
  }
};
