# [Dynamic Array](https://www.hackerrank.com/challenges/dynamic-array/problem)

* Create a list, **_seqList_**, of **_N_** empty sequences, where each sequence is indexed from **0** to **_N_** - **1**. The elements within each of the **_N_** sequences also use -indexing.
* Create an integer, **_lastAnswer_**, and initialize it to **0**.
The **2** types of queries that can be performed on your list of sequences (**_seqList_**) are described below:
	1. Query: `1 x y`
		1. Find the sequence, **_seq_**, at index ((**x* () **_lastAnswer_**)% **_N_**) in **_seqList_**.
		2. Append integer **_y_** to sequence **_seq_**.
	2. Query: `2 x y`
		1. Find the sequence, **_seq_**, at index ((**x* **_lastAnswer_**)% **_N_**) in **_seqList_**.
		2. Find the value of element **_y_** % _size_ in **_seq_** (where _size_ is the size of **_seq_**) and assign it to **_lastAnswer_**.
		3. Print the new value of **_lastAnswer_** on a new line
		
## Task 
Given , , and  queries, execute each query.

**Note:** () is the bitwise _XOR_ operation, which corresponds to the `^` operator in most languages. Learn more about it on Wikipedia[](https://en.wikipedia.org/wiki/Exclusive_or).

## Input Format

The first line contains two space-separated integers, **_N_** (the number of sequences) and **_Q_** (the number of queries), respectively. 
Each of the **_Q_** subsequent lines contains a query in the format defined above.

## Constraints
* **1** <= **_N_**, **_Q_** <= **10** to the 5th power
* **0** <= **_x_** <= **10** to the 9th power
* **0** <= **_y_** <= **10** to the 9th power
* It is guaranteed that query type **2** will never query an empty sequence or index.

## Output Format

For each type **2** query, print the updated value of **_lastAnswer_** on a new line.

## Sample Input
```
2 5
1 0 5
1 1 7
1 0 3
2 1 0
2 1 1
```

## Sample Output
```
7
3
```