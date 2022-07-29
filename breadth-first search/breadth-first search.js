const graph = {
  a: ["b", "c", "d"],
  b: ["e", "f"],
  c: ["j"],
  d: [],
  e: [],
  f: [],
  j: ["c"],
};

const breadthFirstSearch = (graph, source, destination) => {
  let queue = [...source];
  const searched_Queue = [];
  while (queue.length) {
    const currentElement = queue.shift();
    if (!searched_Queue.includes(currentElement)) {
      if (currentElement === destination) return { destination, length };
      queue = [...queue, ...graph[currentElement]];
      searched_Queue.push(currentElement);
    }
  }
  return null;
};

console.log(breadthFirstSearch(graph, graph.a, "j"));
