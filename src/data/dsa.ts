export interface DSA {
  data_structure: string;
  description: string;
  snippet: string;
  link: string;
}

export const dsas: Array<DSA> = [
  {
    data_structure: "Vector",
    description:
      "A resizable array, implemented as a contiguous growable array type.",
    snippet: `
  let mut vec = Vec::new();
  vec.push(1);
  vec.push(2);
  vec.push(3);
  println!("{:?}", vec); // Output: [1, 2, 3]
      `,
    link: "https://doc.rust-lang.org/std/vec/struct.Vec.html",
  },
  {
    data_structure: "HashMap",
    description:
      "A hash map implemented with quadratic probing and SIMD lookup.",
    snippet: `
  use std::collections::HashMap;
  
  let mut map = HashMap::new();
  map.insert("key1", "value1");
  map.insert("key2", "value2");
  println!("{:?}", map); // Output: {"key1": "value1", "key2": "value2"}
      `,
    link: "https://doc.rust-lang.org/std/collections/struct.HashMap.html",
  },
  {
    data_structure: "LinkedList",
    description: "A doubly-linked list.",
    snippet: `
  use std::collections::LinkedList;
  
  let mut list = LinkedList::new();
  list.push_back(1);
  list.push_back(2);
  list.push_back(3);
  println!("{:?}", list); // Output: [1, 2, 3]
      `,
    link: "https://doc.rust-lang.org/std/collections/struct.LinkedList.html",
  },
  {
    data_structure: "BinaryHeap",
    description: "A priority queue implemented with a binary heap.",
    snippet: `
  use std::collections::BinaryHeap;
  
  let mut heap = BinaryHeap::new();
  heap.push(1);
  heap.push(5);
  heap.push(2);
  println!("{:?}", heap.peek()); // Output: Some(5)
      `,
    link: "https://doc.rust-lang.org/std/collections/struct.BinaryHeap.html",
  },
  {
    data_structure: "HashSet",
    description: "A hash set implemented as a HashMap where the value is ()",
    snippet: `
  use std::collections::HashSet;
  
  let mut set = HashSet::new();
  set.insert("value1");
  set.insert("value2");
  println!("{:?}", set); // Output: {"value1", "value2"}
      `,
    link: "https://doc.rust-lang.org/std/collections/struct.HashSet.html",
  },
  {
    data_structure: "BTreeMap",
    description: "A map based on a B-Tree.",
    snippet: `
  use std::collections::BTreeMap;
  
  let mut map = BTreeMap::new();
  map.insert("key1", "value1");
  map.insert("key2", "value2");
  println!("{:?}", map); // Output: {"key1": "value1", "key2": "value2"}
      `,
    link: "https://doc.rust-lang.org/std/collections/struct.BTreeMap.html",
  },
  {
    data_structure: "BTreeSet",
    description: "A set based on a B-Tree.",
    snippet: `
  use std::collections::BTreeSet;
  
  let mut set = BTreeSet::new();
  set.insert("value1");
  set.insert("value2");
  println!("{:?}", set); // Output: {"value1", "value2"}
      `,
    link: "https://doc.rust-lang.org/std/collections/struct.BTreeSet.html",
  },
  {
    data_structure: "VecDeque",
    description:
      "A double-ended queue implemented with a growable ring buffer.",
    snippet: `
  use std::collections::VecDeque;
  
  let mut deque = VecDeque::new();
  deque.push_back(1);
  deque.push_back(2);
  deque.push_front(0);
  println!("{:?}", deque); // Output: [0, 1, 2]
      `,
    link: "https://doc.rust-lang.org/std/collections/struct.VecDeque.html",
  },
  {
    data_structure: "Binary Search Tree",
    description: "A basic binary search tree implementation.",
    snippet: `
  struct TreeNode<T> {
      value: T,
      left: Option<Box<TreeNode<T>>>,
      right: Option<Box<TreeNode<T>>>,
  }
  
  impl<T: Ord> TreeNode<T> {
      fn new(value: T) -> Self {
          TreeNode {
              value,
              left: None,
              right: None,
          }
      }
  
      fn insert(&mut self, value: T) {
          if value <= self.value {
              if let Some(ref mut left) = self.left {
                  left.insert(value);
              } else {
                  self.left = Some(Box::new(TreeNode::new(value)));
              }
          } else {
              if let Some(ref mut right) = self.right {
                  right.insert(value);
              } else {
                  self.right = Some(Box::new(TreeNode::new(value)));
              }
          }
      }
  }
  
  let mut root = TreeNode::new(10);
  root.insert(5);
  root.insert(15);
      `,
    link: "https://doc.rust-lang.org/std/collections/index.html",
  },
  {
    data_structure: "Trie",
    description:
      "A prefix tree for efficient storage and retrieval of strings.",
    snippet: `
  struct TrieNode {
      children: std::collections::HashMap<char, TrieNode>,
      end_of_word: bool,
  }
  
  impl TrieNode {
      fn new() -> Self {
          TrieNode {
              children: std::collections::HashMap::new(),
              end_of_word: false,
          }
      }
  }
  
  struct Trie {
      root: TrieNode,
  }
  
  impl Trie {
      fn new() -> Self {
          Trie {
              root: TrieNode::new(),
          }
      }
  
      fn insert(&mut self, word: &str) {
          let mut node = &mut self.root;
          for c in word.chars() {
              node = node.children.entry(c).or_insert(TrieNode::new());
          }
          node.end_of_word = true;
      }
  }
  
  let mut trie = Trie::new();
  trie.insert("hello");
  trie.insert("world");
      `,
    link: "https://doc.rust-lang.org/std/collections/index.html",
  },
  {
    data_structure: "Graph (Adjacency List)",
    description: "A simple graph representation using an adjacency list.",
    snippet: `
  use std::collections::HashMap;
  
  struct Graph {
      adj_list: HashMap<i32, Vec<i32>>,
  }
  
  impl Graph {
      fn new() -> Self {
          Graph {
              adj_list: HashMap::new(),
          }
      }
  
      fn add_edge(&mut self, u: i32, v: i32) {
          self.adj_list.entry(u).or_insert(Vec::new()).push(v);
          self.adj_list.entry(v).or_insert(Vec::new()).push(u);
      }
  }
  
  let mut graph = Graph::new();
  graph.add_edge(1, 2);
  graph.add_edge(2, 3);
      `,
    link: "https://doc.rust-lang.org/std/collections/index.html",
  },
  {
    data_structure: "Stack",
    description: "A simple stack implemented with a Vec.",
    snippet: `
  struct Stack<T> {
      elements: Vec<T>,
  }
  
  impl<T> Stack<T> {
      fn new() -> Self {
          Stack { elements: Vec::new() }
      }
  
      fn push(&mut self, item: T) {
          self.elements.push(item);
      }
  
      fn pop(&mut self) -> Option<T> {
          self.elements.pop()
      }
  }
  
  let mut stack = Stack::new();
  stack.push(1);
  stack.push(2);
  println!("{:?}", stack.pop()); // Output: Some(2)
      `,
    link: "https://doc.rust-lang.org/std/vec/struct.Vec.html",
  },
  {
    data_structure: "Queue",
    description: "A simple queue implemented with a VecDeque.",
    snippet: `
  use std::collections::VecDeque;
  
  struct Queue<T> {
      elements: VecDeque<T>,
  }
  
  impl<T> Queue<T> {
      fn new() -> Self {
          Queue { elements: VecDeque::new() }
      }
  
      fn enqueue(&mut self, item: T) {
          self.elements.push_back(item);
      }
  
      fn dequeue(&mut self) -> Option<T> {
          self.elements.pop_front()
      }
  }
  
  let mut queue = Queue::new();
  queue.enqueue(1);
  queue.enqueue(2);
  println!("{:?}", queue.dequeue()); // Output: Some(1)
      `,
    link: "https://doc.rust-lang.org/std/collections/struct.VecDeque.html",
  },
  {
    data_structure: "Deque",
    description: "A double-ended queue implemented with a VecDeque.",
    snippet: `
  use std::collections::VecDeque;
  
  struct Deque<T> {
      elements: VecDeque<T>,
  }
  
  impl<T> Deque<T> {
      fn new() -> Self {
          Deque { elements: VecDeque::new() }
      }
  
      fn push_front(&mut self, item: T) {
          self.elements.push_front(item);
      }
  
      fn push_back(&mut self, item: T) {
          self.elements.push_back(item);
      }
  
      fn pop_front(&mut self) -> Option<T> {
          self.elements.pop_front()
      }
  
      fn pop_back(&mut self) -> Option<T> {
          self.elements.pop_back()
      }
  }
  
  let mut deque = Deque::new();
  deque.push_back(1);
  deque.push_front(0);
  println!("{:?}", deque.pop_back()); // Output: Some(1)
      `,
    link: "https://doc.rust-lang.org/std/collections/struct.VecDeque.html",
  },
  {
    data_structure: "Circular Buffer",
    description: "A ring buffer implemented with a fixed-size array.",
    snippet: `
  struct CircularBuffer<T> {
      buffer: Vec<T>,
      capacity: usize,
      head: usize,
      tail: usize,
  }
  
  impl<T> CircularBuffer<T> {
      fn new(capacity: usize) -> Self {
          CircularBuffer {
              buffer: Vec::with_capacity(capacity),
              capacity,
              head: 0,
              tail: 0,
          }
      }
  
      fn push(&mut self, item: T) {
          if self.buffer.len() < self.capacity {
              self.buffer.push(item);
          } else {
              self.buffer[self.head] = item;
          }
          self.head = (self.head + 1) % self.capacity;
          if self.head == self.tail {
              self.tail = (self.tail + 1) % self.capacity;
          }
      }
  
      fn pop(&mut self) -> Option<T> {
          if self.buffer.is_empty() {
              None
          } else {
              let item = self.buffer.remove(self.tail);
              self.tail = (self.tail + 1) % self.capacity;
              Some(item)
          }
      }
  }
  
  let mut buffer = CircularBuffer::new(3);
  buffer.push(1);
  buffer.push(2);
  buffer.push(3);
  buffer.push(4);
  println!("{:?}", buffer.pop()); // Output: Some(2)
      `,
    link: "https://doc.rust-lang.org/std/collections/index.html",
  },
  {
    data_structure: "Bloom Filter",
    description:
      "A probabilistic data structure to test whether an element is a member of a set.",
    snippet: `
  use std::collections::hash_map::DefaultHasher;
  use std::hash::{Hash, Hasher};
  
  struct BloomFilter {
      bitmap: Vec<bool>,
      num_hashes: usize,
  }
  
  impl BloomFilter {
      fn new(size: usize, num_hashes: usize) -> Self {
          BloomFilter {
              bitmap: vec![false; size],
              num_hashes,
          }
      }
  
      fn hash<T: Hash>(&self, item: &T, i: usize) -> usize {
          let mut hasher = DefaultHasher::new();
          item.hash(&mut hasher);
          (hasher.finish() as usize + i * 0x9e3779b9) % self.bitmap.len()
      }
  
      fn insert<T: Hash>(&mut self, item: &T) {
          for i in 0..self.num_hashes {
              let index = self.hash(item, i);
              self.bitmap[index] = true;
          }
      }
  
      fn contains<T: Hash>(&self, item: &T) -> bool {
          for i in 0..self.num_hashes {
              let index = self.hash(item, i);
              if !self.bitmap[index] {
                  return false;
              }
          }
          true
      }
  }
  
  let mut filter = BloomFilter::new(100, 3);
  filter.insert(&"hello");
  println!("{}", filter.contains(&"hello")); // Output: true
      `,
    link: "https://doc.rust-lang.org/std/collections/index.html",
  },
  {
    data_structure: "Segment Tree",
    description: "A tree data structure for storing intervals, or segments.",
    snippet: `
  struct SegmentTree {
      data: Vec<i32>,
      size: usize,
  }
  
  impl SegmentTree {
      fn new(size: usize) -> Self {
          SegmentTree {
              data: vec![0; 2 * size],
              size,
          }
      }
  
      fn build(&mut self, values: &[i32]) {
          for (i, &val) in values.iter().enumerate() {
              self.data[self.size + i] = val;
          }
          for i in (1..self.size).rev() {
              self.data[i] = self.data[i * 2] + self.data[i * 2 + 1];
          }
      }
  
      fn update(&mut self, index: usize, value: i32) {
          let mut pos = self.size + index;
          self.data[pos] = value;
          while pos > 1 {
              pos /= 2;
              self.data[pos] = self.data[pos * 2] + self.data[pos * 2 + 1];
          }
      }
  
      fn query(&self, left: usize, right: usize) -> i32 {
          let mut l = self.size + left;
          let mut r = self.size + right + 1;
          let mut sum = 0;
          while l < r {
              if l % 2 == 1 {
                  sum += self.data[l];
                  l += 1;
              }
              if r % 2 == 1 {
                  r -= 1;
                  sum += self.data[r];
              }
              l /= 2;
              r /= 2;
          }
          sum
      }
  }
  
  let mut seg_tree = SegmentTree::new(8);
  seg_tree.build(&[1, 2, 3, 4, 5, 6, 7, 8]);
  println!("{}", seg_tree.query(0, 3)); // Output: 10
      `,
    link: "https://doc.rust-lang.org/std/collections/index.html",
  },
  {
    data_structure: "Fenwick Tree",
    description:
      "A tree data structure that provides efficient methods for calculation and manipulation of prefix sums.",
    snippet: `
  struct FenwickTree {
      data: Vec<i32>,
  }
  
  impl FenwickTree {
      fn new(size: usize) -> Self {
          FenwickTree {
              data: vec![0; size + 1],
          }
      }
  
      fn update(&mut self, index: usize, value: i32) {
          let mut i = index + 1;
          while i < self.data.len() {
              self.data[i] += value;
              i += i & (!i + 1);
          }
      }
  
      fn query(&self, index: usize) -> i32 {
          let mut sum = 0;
          let mut i = index + 1;
          while i > 0 {
              sum += self.data[i];
              i -= i & (!i + 1);
          }
          sum
      }
  }
  
  let mut fenwick_tree = FenwickTree::new(8);
  fenwick_tree.update(0, 1);
  fenwick_tree.update(1, 2);
  fenwick_tree.update(2, 3);
  println!("{}", fenwick_tree.query(2)); // Output: 6
      `,
    link: "https://doc.rust-lang.org/std/collections/index.html",
  },
  {
    data_structure: "LRU Cache",
    description:
      "A cache that stores a fixed number of items and discards the least recently used items first.",
    snippet: `
  use std::collections::HashMap;
  
  struct LRUCache {
      capacity: usize,
      map: HashMap<i32, i32>,
      order: Vec<i32>,
  }
  
  impl LRUCache {
      fn new(capacity: usize) -> Self {
          LRUCache {
              capacity,
              map: HashMap::new(),
              order: Vec::new(),
          }
      }
  
      fn get(&mut self, key: i32) -> Option<i32> {
          if let Some(&value) = self.map.get(&key) {
              self.order.retain(|&k| k != key);
              self.order.push(key);
              return Some(value);
          }
          None
      }
  
      fn put(&mut self, key: i32, value: i32) {
          if self.map.len() == self.capacity {
              if let Some(least_recent) = self.order.remove(0) {
                  self.map.remove(&least_recent);
              }
          }
          self.map.insert(key, value);
          self.order.push(key);
      }
  }
  
  let mut cache = LRUCache::new(2);
  cache.put(1, 1);
  cache.put(2, 2);
  println!("{:?}", cache.get(1)); // Output: Some(1)
  cache.put(3, 3);
  println!("{:?}", cache.get(2)); // Output: None
      `,
    link: "https://doc.rust-lang.org/std/collections/index.html",
  },
  {
    data_structure: "Red-Black Tree",
    description: "A self-balancing binary search tree.",
    snippet: `
  struct Node {
      value: i32,
      color: bool,
      left: Option<Box<Node>>,
      right: Option<Box<Node>>,
  }
  
  impl Node {
      fn new(value: i32, color: bool) -> Self {
          Node {
              value,
              color,
              left: None,
              right: None,
          }
      }
  }
  
  struct RedBlackTree {
      root: Option<Box<Node>>,
  }
  
  impl RedBlackTree {
      fn new() -> Self {
          RedBlackTree { root: None }
      }
  
      fn insert(&mut self, value: i32) {
          self.root = Some(Box::new(Node::new(value, true)));
      }
  }
  
  let mut rbt = RedBlackTree::new();
  rbt.insert(1);
      `,
    link: "https://doc.rust-lang.org/std/collections/index.html",
  },
];
