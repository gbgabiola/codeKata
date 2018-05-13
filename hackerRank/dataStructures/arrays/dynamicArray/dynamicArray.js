function dynamicArray(n, queries) {
    var seqList = [];
    var len = n;
    var results = [];
    var lastAnswer = 0, query, queryType, sequence;
    
    while(len) {
        seqList.push([]);
        len--;
    }
    
    for(var i = 0; i < queries.length; i++) {
        query = queries[i];
        queryType = queries[i][0];

        if(queryType == 1) {
            sequence = seqList[(query[1] ^ lastAnswer) % n];
            sequence.push(query[2]);
        } else {
            sequence = seqList[(query[1] ^ lastAnswer) % n];
            lastAnswer = sequence[query[2] % sequence.length];
            results.push(lastAnswer);
        }
    }
    
    return results;
}