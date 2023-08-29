import React from "react";
import {
  getBezierPath,
  getEdgeCenter,
  getMarkerEnd,
} from "react-flow-renderer";
import { useDispatch } from "react-redux";
import OptionSelection from "../OptionSelection";

import styles from "./ButtonEdge.module.css";

const foreignObjectSize = 40;

function ButtonEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  arrowHeadType,
  markerEndId,
}) {
  const dispatch = useDispatch();
  const onEdgeClick = (evt, id) => {
    evt.stopPropagation();
    dispatch({ type: "HANDLE_EDGE_CLICK", edgeId: id });
  };
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className={styles.ForeignObject}
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <body className={styles.ForeignObjectBody}>
          <button
            className={styles.Button}
            onClick={(event) => {
              dispatch({ type: "HANDLE_POP_UP", popUpState: true });
              dispatch({
                type: "HANDLE_COMPONENT_RENDER",
                componentToRender: <OptionSelection />,
              });
              onEdgeClick(event, id);
            }}
          >
            +
          </button>
        </body>
      </foreignObject>
    </>
  );
}

export default ButtonEdge;
