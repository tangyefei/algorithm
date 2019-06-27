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
/*
    三种解决方法：

    1. 一直轮序直到next为null
    2. Set：JavaScript中不能直接用Set来
    3. 快慢指针

*/


//    var startTime = (new Date()).getTime();
//    var duration = 0;
//    var noCycle  = false;
//    while(duration < 500 && noCycle === false) {
//        if(head.next === null) {
//         noCycle = true;
//        } else {
//         head = head.next;
//        }
//        duration = (new Date()).getTime() - startTime;
//        console.log('duration = ' + duration);
//    }
//    return !noCycle;

   var set = new Set();
   while(head) {
       if(set.has(head)) return true;
       set.add(head); // we can also add an 'checked' attribute on head to detected
       head = head.next;
   }
   return false;


    // var slow = head, fast = head;
    // while(fast && fast.next) {
    //     fast = fast.next.next;
    //     slow = slow.next;
    //     if(fast == slow) {
    //         return true;
    //     }
    // }
    // return false;
};


// test
console.log(hasCycle(one)); // 执行为 true，注释掉 line 16 为false
document.write(hasCycle(one));