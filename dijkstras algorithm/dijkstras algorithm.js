const graph = {
  start: {
    A: 6,
    B: 2,
  },
  A: { FIN: 1 },
  B: {
    A: 3,
    FIN: 5,
  },
  FIN: {},
};

// def find_lowest_cost_node(costs):
//  lowest_cost = float(“inf”)
//  lowest_cost_node = None
//  for node in costs: Go through each node.
//  cost = costs[node]
//  if cost < lowest_cost and node not in processed:
//  lowest_cost = cost … set it as the new lowest-cost node.
//  lowest_cost_node = node
//  return lowest_cost_node

const find_lowest_cost_node = (costs, processed) => {
  let lowest_cost_node = null;
  let lowest_cost = Infinity;
  for (const node in costs) {
    const cost = costs[node];
    if (!(processed[node] === costs[node])) {
      if (cost < lowest_cost) {
        lowest_cost = cost;
        lowest_cost_node = node;
      }
    }
  }
  return lowest_cost_node;
};

const dijkstrasAlgorithm = (graph, source, destination) => {
  const costs = { ...graph[source], [destination]: Infinity };
  const parents = {};
  const processed = {};
  Object.keys(graph[source]).forEach((item) => {
    parents[item] = source;
  });
  parents[destination] = null;
  let node = find_lowest_cost_node(costs, processed);
  while (!(processed[node] === costs[node])) {
    const cost = costs[node];
    const neighbors = graph[node];
    for (const key in neighbors) {
      const new_cost = cost + neighbors[key];
      if (costs[key] > new_cost) {
        costs[key] = new_cost;
        parents[key] = node;
      }
    }
    processed[node] = costs[node];
    node = find_lowest_cost_node(costs, processed);
  }
  return { costs, parents, processed };
};

console.log(dijkstrasAlgorithm(graph, "start", "FIN"));
