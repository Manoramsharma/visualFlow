import ReactFlow, {
  isNode,
  isEdge,
  removeElements,
  addEdge,
  getOutgoers,
  getIncomers,
  getConnectedEdges,
} from "react-flow-renderer";

const addNode = (initialElements, edgeId, nodeType, isCondition, alignment) => {
  if (!isCondition) {
    if (edgeId.includes("-")) {
      return addNodeWithNoCondition(initialElements, edgeId, nodeType);
    } else {
      return addNodeWithNoConditionLeaf(initialElements, edgeId, nodeType);
    }
  } else {
    if (edgeId.includes("-")) {
      return addNodeWithCondition(initialElements, edgeId, nodeType, alignment);
    } else {
      return addNodeWithCondtionLeaf(initialElements, edgeId, nodeType);
    }
  }
};

const addNodeWithCondition = (
  initialElements,
  edgeId,
  nodeType,
  remainingNodeAttachment
) => {
  let numberOfNodes = 0;
  for (let i = 0; i < initialElements.length; i++) {
    if (isNode(initialElements[i])) {
      if (numberOfNodes < initialElements[i].id) {
        numberOfNodes = initialElements[i].id;
        numberOfNodes = parseInt(numberOfNodes);
      }
    }
  }
  // let numberOfNodes = initialElements.filter((el) => isNode(el)).length;
  const currEdge = edgeId.split("-");

  const newNode = {
    id: `${numberOfNodes + 1}`,
    type: nodeType,
    data: { label: `${nodeType} ${numberOfNodes + 1}` },
    position: { x: 0, y: 0 },
  };
  for (let i = 0; i < initialElements.length; i++) {
    if (initialElements[i].id == edgeId && isEdge(initialElements[i])) {
      initialElements[i].id = `${initialElements[i].source}-${
        numberOfNodes + 1
      }`;
      initialElements[i].target = `${numberOfNodes + 1}`;
    }
  }
  const correctNode = {
    id: `${numberOfNodes + 2}`,
    type: "correctNode",
    data: { label: `${nodeType} Correct ${numberOfNodes + 2}` },
    position: { x: 0, y: 0 },
  };
  const wrongNode = {
    id: `${numberOfNodes + 3}`,
    type: "wrongNode",
    data: { label: `${nodeType} Wrong ${numberOfNodes + 3}` },
    position: { x: 0, y: 0 },
  };
  const newEdgeCorrect = {
    id: `${numberOfNodes + 1}-${numberOfNodes + 2}`,
    source: `${numberOfNodes + 1}`,
    target: `${numberOfNodes + 2}`,
    type: "smoothedge",
  };
  const newEdgeWrong = {
    id: `${numberOfNodes + 1}-${numberOfNodes + 3}`,
    source: `${numberOfNodes + 1}`,
    target: `${numberOfNodes + 3}`,
    type: "smoothedge",
  };
  const newEdgeButtonNode = {
    id: `${numberOfNodes + 4}`,
    type: "selectorNode",
    data: { label: `${nodeType} Button ${numberOfNodes + 4}` },
    position: { x: 0, y: 0 },
  };
  let newEdgeCorrectRemaining, newEdgeButtonEdge;
  if (remainingNodeAttachment === "correct") {
    newEdgeCorrectRemaining = {
      id: `${numberOfNodes + 2}-${currEdge[1]}`,
      source: `${numberOfNodes + 2}`,
      target: `${currEdge[1]}`,
      type: "buttonedge",
    };
    newEdgeButtonEdge = {
      id: `${numberOfNodes + 3}-${numberOfNodes + 4}`,
      source: `${numberOfNodes + 3}`,
      target: `${numberOfNodes + 4}`,
      type: "smoothedge",
    };
  } else {
    newEdgeCorrectRemaining = {
      id: `${numberOfNodes + 3}-${currEdge[1]}`,
      source: `${numberOfNodes + 3}`,
      target: `${currEdge[1]}`,
      type: "buttonedge",
    };
    newEdgeButtonEdge = {
      id: `${numberOfNodes + 2}-${numberOfNodes + 4}`,
      source: `${numberOfNodes + 2}`,
      target: `${numberOfNodes + 4}`,
      type: "smoothedge",
    };
  }
  initialElements.push(
    newNode,
    correctNode,
    wrongNode,
    newEdgeCorrect,
    newEdgeWrong,
    newEdgeCorrectRemaining,
    newEdgeButtonNode,
    newEdgeButtonEdge
  );
  return initialElements;
};

const addNodeWithCondtionLeaf = (initialElements, nodeId, nodeType) => {
  // let numberOfNodes = initialElements.filter((el) => isNode(el)).length;
  let numberOfNodes = 0;
  for (let i = 0; i < initialElements.length; i++) {
    if (isNode(initialElements[i])) {
      if (numberOfNodes < initialElements[i].id) {
        numberOfNodes = initialElements[i].id;
        numberOfNodes = parseInt(numberOfNodes);
      }
    }
  }

  const newNode = {
    id: `${numberOfNodes + 1}`,
    type: nodeType,
    data: { label: `${nodeType} ${numberOfNodes + 1}` },
    position: { x: 0, y: 0 },
  };
  const correctNode = {
    id: `${numberOfNodes + 2}`,
    type: "correctNode",
    data: { label: `${nodeType} Correct ${numberOfNodes + 2}` },
    position: { x: 0, y: 0 },
  };
  const wrongNode = {
    id: `${numberOfNodes + 3}`,
    type: "wrongNode",
    data: { label: `${nodeType} Wrong ${numberOfNodes + 3}` },
    position: { x: 0, y: 0 },
  };
  const newEdgeButtonNode = {
    id: `${numberOfNodes + 4}`,
    type: "selectorNode",
    data: { label: `${nodeType} Button ${numberOfNodes + 4}` },
    position: { x: 0, y: 0 },
  };
  for (let i = 0; i < initialElements.length; i++) {
    if (initialElements[i].target == nodeId && isEdge(initialElements[i])) {
      initialElements[i].id = `${initialElements[i].source}-${
        numberOfNodes + 1
      }`;
      initialElements[i].target = `${numberOfNodes + 1}`;
      initialElements[i].type = "buttonedge";
    }
  }
  const newEdgeCorrect = {
    id: `${numberOfNodes + 1}-${numberOfNodes + 2}`,
    source: `${numberOfNodes + 1}`,
    target: `${numberOfNodes + 2}`,
    type: "smoothedge",
  };
  const newEdgeWrong = {
    id: `${numberOfNodes + 1}-${numberOfNodes + 3}`,
    source: `${numberOfNodes + 1}`,
    target: `${numberOfNodes + 3}`,
    type: "smoothedge",
  };
  const newEdgeButtonEdge = {
    id: `${numberOfNodes + 2}-${numberOfNodes + 4}`,
    source: `${numberOfNodes + 2}`,
    target: `${numberOfNodes + 4}`,
    type: "smoothedge",
  };
  const remainingEdge = {
    id: `${numberOfNodes + 3}-${nodeId}`,
    source: `${numberOfNodes + 3}`,
    target: `${nodeId}`,
    type: "smoothedge",
  };
  initialElements.push(
    newNode,
    correctNode,
    wrongNode,
    newEdgeButtonNode,
    newEdgeCorrect,
    newEdgeWrong,
    newEdgeButtonEdge,
    remainingEdge
  );
  return initialElements;
};

const addNodeWithNoCondition = (initialElements, edgeId, nodeType) => {
  // let numberOfNodes = initialElements.filter((el) => isNode(el)).length;
  let numberOfNodes = 0;
  for (let i = 0; i < initialElements.length; i++) {
    if (isNode(initialElements[i])) {
      if (numberOfNodes < initialElements[i].id) {
        numberOfNodes = initialElements[i].id;
        numberOfNodes = parseInt(numberOfNodes);
      }
    }
  }
  const currEdge = edgeId.split("-");
  const newNode = {
    id: `${numberOfNodes + 1}`,
    type: nodeType,
    data: { label: `${nodeType} ${numberOfNodes + 1}` },
    position: { x: 0, y: 0 },
  };
  const newEdge = {
    id: `${numberOfNodes + 1}-${currEdge[1]}`,
    target: currEdge[1],
    source: `${numberOfNodes + 1}`,
    type: "buttonedge",
  };

  for (let i = 0; i < initialElements.length; i++) {
    if (initialElements[i].id == edgeId && isEdge(initialElements[i])) {
      initialElements[i].id = `${initialElements[i].source}-${
        numberOfNodes + 1
      }`;
      initialElements[i].target = `${numberOfNodes + 1}`;
    }
  }
  initialElements.push(newNode);
  initialElements.push(newEdge);
  console.log(initialElements);

  return initialElements;
};

const addNodeWithNoConditionLeaf = (initialElements, nodeId, nodeType) => {
  // let numberOfNodes = initialElements.filter((el) => isNode(el)).length;
  let numberOfNodes = 0;
  for (let i = 0; i < initialElements.length; i++) {
    if (isNode(initialElements[i])) {
      if (numberOfNodes < initialElements[i].id) {
        numberOfNodes = initialElements[i].id;
        numberOfNodes = parseInt(numberOfNodes);
      }
    }
  }
  const newNode = {
    id: `${numberOfNodes + 1}`,
    type: nodeType,
    data: { label: `${nodeType} ${numberOfNodes + 1}` },
    position: { x: 0, y: 0 },
  };
  const newEdge = {
    id: `${numberOfNodes + 1}-${nodeId}`,
    source: `${numberOfNodes + 1}`,
    target: nodeId,
    type: "smoothedge",
  };
  for (let i = 0; i < initialElements.length; i++) {
    if (initialElements[i].target == nodeId && isEdge(initialElements[i])) {
      initialElements[i].id = `${initialElements[i].source}-${
        numberOfNodes + 1
      }`;
      initialElements[i].target = `${numberOfNodes + 1}`;
      initialElements[i].type = "buttonedge";
    }
  }
  initialElements.push(newNode);
  initialElements.push(newEdge);
  return initialElements;
};

export default addNode;
