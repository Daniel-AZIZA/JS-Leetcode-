let addTwoNumbers = function(l1, l2) {
    
    console.log(l1.length);
    console.log(l1, l2);

};


function ListNode(val, next) {
     this.val = (val === undefined ? 0 : val)
     this.next = (next === undefined ? null : next)
}

const l1 = new ListNode(
  2,
  new ListNode(
    4,
    new ListNode(
      3
    ),
  ),
);

const l2 = new ListNode(
  5,
  new ListNode(
    6,
    new ListNode(
      4
    ),
  ),
);


console.log(addTwoNumbers(l1, l2));
