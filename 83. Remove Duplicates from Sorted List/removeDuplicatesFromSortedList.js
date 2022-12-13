var deleteDuplicates = function(head) {
    // let newHead = [];
    // check head and next
    let cur = head;
    while(cur && cur.next){
        if(cur.val === cur.next.val){
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
            };
    }
    return head;
    
};