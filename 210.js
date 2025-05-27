class Solution {
    findOrder(numCourses, prerequisites) {
        const graph = {};
        const inDegree = new Array(numCourses).fill(0);
        const result = [];

        for (let i = 0; i < numCourses; i++) {
            graph[i] = [];
        }

        for (const [course, pre] of prerequisites) {
            graph[pre].push(course);
            inDegree[course]++;
        }

        const queue = [];
        for (let i = 0; i < numCourses; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }

        while (queue.length) {
            const current = queue.shift();
            result.push(current);

            for (const next of graph[current]) {
                inDegree[next]--;
                if (inDegree[next] === 0) {
                    queue.push(next);
                }
            }
        }

        return result.length === numCourses ? result : [];
    }
}