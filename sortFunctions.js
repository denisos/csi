
// insertionSort
// works best for quite small data sets (8 - 12 elements)
// O(n squared) like bubble and selection sort but better than those
// stable: does not change relative order of elements with equal keys
// in place: only needs 1 temp element holder
//
module.exports.insertionSort = function (list) {
    var i = 1,
        j,
        temp,
        len = list.length;

    // outer loop starts at 2nd element and goes through
    //  the list    
    for (; i < len; i++) {
        temp = list[i];     // current i

        // inner loop starts at i and 
        // while > 0 and prev element is gtr than current i
        //    then move prev into this
        // 
        for (j = i; j > 0 && list[j - 1] > temp; j--) {
            list[j] = list[j - 1];
        }
        list[j] = temp;
    }

    return list;
};
