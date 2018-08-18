var Graph=require('./graph');

g=new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
// g.showGraph();

//答案是对的 知识console.log输出有点想不开 比较难看后续解决吧

// 0-> 1 2
// 1-> 0 3
// 2-> 0 4
// 3->1
// 4->2

// g.dfs(0);
g.bfs(0);



