import ReactFlow, {
  isNode,
  isEdge,
  removeElements,
  addEdge,
  getOutgoers,
  getIncomers,
  getConnectedEdges,
} from "react-flow-renderer";

const removeNode = (initialElements, nodeId, type) => {
  if (type == "conditionNode") {
    return removeConditionNode(initialElements, nodeId, type);
  } else {
    return removeNodeWithNoCondition(initialElements, nodeId, type);
  }
};

const removeConditionNode = (initialElements, nodeId, type) => {
  const nodes = initialElements.filter((el) => isNode(el));
  const edges = initialElements.filter((el) => isEdge(el));

  const outGoingNodeOfConditon = getOutgoers(
    nodes.find((el) => el.id == nodeId),
    initialElements
  );
  const outGoingNodeOfCorrectNode = getOutgoers(
    nodes.find((el) => el.id == outGoingNodeOfConditon[0].id),
    initialElements
  );
  const outGoingNodeOfIncorrectNode = getOutgoers(
    nodes.find((el) => el.id == outGoingNodeOfConditon[1].id),
    initialElements
  );
  if (
    outGoingNodeOfCorrectNode[0].type == "selectorNode" ||
    outGoingNodeOfIncorrectNode[0].type == "selectorNode"
  ) {
    let elementToRemove = [];

    elementToRemove.push(
      edges.find((el) => el.target == outGoingNodeOfConditon[0].id)
    );
    elementToRemove.push(
      edges.find((el) => el.target == outGoingNodeOfConditon[1].id)
    );
    let tempEle = edges.find((el) => el.target == nodeId);
    elementToRemove.push(edges.find((el) => el.target == nodeId));

    let eleToUpdate;
    if (outGoingNodeOfCorrectNode[0].type == "selectorNode") {
      elementToRemove.push(
        edges.find((el) => el.target == outGoingNodeOfCorrectNode[0].id)
      );
      eleToUpdate = outGoingNodeOfIncorrectNode[0];
      elementToRemove.push(outGoingNodeOfCorrectNode[0]);
    } else {
      elementToRemove.push(
        edges.find((el) => el.target == outGoingNodeOfIncorrectNode[0].id)
      );
      eleToUpdate = outGoingNodeOfCorrectNode[0];
      elementToRemove.push(outGoingNodeOfIncorrectNode[0]);
    }
    elementToRemove.push(nodes.find((el) => el.id == nodeId));
    elementToRemove = elementToRemove.concat(outGoingNodeOfConditon);

    for (let i = 0; i < initialElements.length; i++) {
      if (
        isEdge(initialElements[i]) &&
        initialElements[i].target == eleToUpdate.id
      ) {
        initialElements[i].source = tempEle.source;
        initialElements[i].id = `${tempEle.source}-${eleToUpdate.id}`;
      }
    }

    for (let i = 0; i < elementToRemove.length; i++) {
      initialElements.splice(
        initialElements.findIndex((el) => el.id == elementToRemove[i].id),
        1
      );
    }
  } else {
    alert("Please make on selector node free");
  }
  return initialElements;
};

const removeNodeWithNoCondition = (initialElements, nodeId, type) => {
  const nodes = initialElements.filter((el) => isNode(el));
  const edges = initialElements.filter((el) => isEdge(el));
  const nodeToRemove = initialElements.find((el) => el.id == nodeId);
  const edgeToUpdate = edges.find((el) => el.source == nodeId);
  const edgeToRemove = edges.find((el) => el.target == nodeId);

  initialElements.splice(initialElements.indexOf(nodeToRemove), 1);
  initialElements.splice(initialElements.indexOf(edgeToRemove), 1);

  for (let i = 0; i < initialElements.length; i++) {
    if (
      initialElements[i].id == edgeToUpdate.id &&
      isEdge(initialElements[i])
    ) {
      initialElements[i].source = edgeToRemove.source;
      initialElements[
        i
      ].id = `${edgeToRemove.source}-${initialElements.target}`;
    }
  }
  return initialElements;
};

export default removeNode;
