const deleteDuplicates = function(head) {
    
    const   tmp = head;

    while (head.next != null)
    {
        //console.log(head);
        if (head.val == head.next.val)
        {
            head.remove();
            head = head.next;
            continue ;
        }
        head = head.next;
    }
    return (head);
};

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val);
     this.next = (next===undefined ? null : next);
};

const l1 = new ListNode(
  1,
  new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4)))),
    ),
  ),
);

//console.log(deleteDuplicates(l1));
let test = deleteDuplicates(l1);

while (test != null)
{
    console.log(test.val);
    test = test.next;
}
