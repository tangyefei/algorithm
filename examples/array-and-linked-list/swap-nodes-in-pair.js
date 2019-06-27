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

var print = function(head) {
    var cursor = head;
    var result = [];
    while(cursor) {
        result.push(cursor.val);
        cursor = cursor.next;
    }
    console.log(result.join('=>'))
    document.write(result.join('=>') + ' ')
}

// implemenet
var swapPairs = function(head) {
    var start = new ListNode();
    var cursor = start;

    start.next = head;

    while(cursor.next && cursor.next.next) {
        var one = cursor.next;
        var two = cursor.next.next;
        cursor.next = two;
        one.next = two.next;
        two.next = one;
        cursor = one;
    }
    return start.next;
};

// test
print(one);
var newHead = swapPairs(one);
print(newHead);