var addTwoNumbers = function(l1, l2) {
    let newL1 = parseInt([...l1].toString().split(",").reverse().join(""));
    // let newL2 = [...l2].toString();

    let newL2 = parseInt([...l2].toString().split(",").reverse().join(""));

    // newL1 = parseInt(newL1.split(",").reverse().join(""));
    // newL2 = 
    console.log("new".split(""))
    console.log();
    // split("").reverse()

    return (newL1 + newL2).toString().split("").reverse();
};

addTwoNumbers([1,2,3], [4,5,6])


//actual solution 

var sum = 0;

        //first init
        var resNode = new ListNode();
        var copyNode = resNode;
        
        //start iteration
        while(l1!=undefined || l2!=undefined || sum!= 0)
        {
            if(l1!=undefined)
            {
                sum += l1.val;
                l1 = l1.next;
            }
            
            if(l2!=undefined)
            {
                sum += l2.val;
                l2 = l2.next;
            }
            
            var newNode = new ListNode();
            newNode.val = sum%10;
            copyNode.next = newNode;
            copyNode = newNode;
            
            sum = parseInt(sum/10);
            
        }
        
    return resNode.next;
