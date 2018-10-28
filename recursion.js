let recursion = tree => {
    let result = [];

    let rec = (node, result, i) => {
        result[i] = result[i] || [];
        result[i].push(node.value);
        if(node.left !== undefined)
            rec(node.left, result, i + 1);
        if(node.right !== undefined)
            rec(node.right, result, i + 1);
    };

    rec(tree, result, 0);

    return result;
};

module.exports = recursion;