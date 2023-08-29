import ReactFlow, {
  isNode,
  isEdge,
  removeElements,
  addEdge,
  getOutgoers,
  getIncomers,
  getConnectedEdges,
} from "react-flow-renderer";

const swapBranches = (initialElements, nodeId, type) => {
  if (type === "conditionNode") {
    const totalNodes = initialElements.filter((el) => isNode(el));
    const totalEdges = initialElements.filter((el) => isEdge(el));
    const node = initialElements.find((el) => el.id === nodeId);

    const outGoingNodes = getOutgoers(node, initialElements);
    const edgeToUpdate_1 = totalEdges.find(
      (el) => el.source == outGoingNodes[0].id
    );
    const edgeToUpdate_2 = totalEdges.find(
      (el) => el.source == outGoingNodes[1].id
    );

    for (let i in initialElements) {
      if (initialElements[i].id == edgeToUpdate_1.id) {
        initialElements[i].source = outGoingNodes[1].id;
      }
      if (initialElements[i].id == edgeToUpdate_2.id) {
        initialElements[i].source = outGoingNodes[0].id;
      }
    }
  }
  return initialElements;
};
export default swapBranches;
