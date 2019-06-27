// define
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// mock
var one = new ListNode(1);
var two = new ListNode(2);
var three = new ListNode(3);
var four = new ListNode(4);

one.next = two;
two.next = three;
three.next = four;
four.next = one;

// implemenet
var hasCycle = function(head) {

   var set = new Set();
   while(head) {
       if(set.has(head)) return head;
       set.add(head); // we can also add an 'checked' attribute on head to detected
       head = head.next;
   }
   return null;
};


// test
console.log(hasCycle(one)); // 执行为 true，注释掉 line 16 为false
document.write(hasCycle(one));