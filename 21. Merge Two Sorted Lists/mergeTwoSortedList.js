let mergeTwoLists= (list1, list2)=>{
    let list3 = [...list1, ...list2];
    list3.sort((a,b)=> a-b);
    return list3;
}
mergeTwoLists1([1,3,5,7], [2,4,6,8]);