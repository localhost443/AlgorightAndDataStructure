//My personal solution without any help <3
//Without any help <3 HEHEHE 

function findString(str, to) {
    let count = 0;
    let start = (str.length - 1) - (to.length);
    let end = str.length-1;
    console.log(start, end)
    console.log(str.slice(start, end));
    while (start > to.length) {
      console.log(str.slice(start, end));
        if (str.slice(start, end) === to) {
            count = count + 1
            start = start - 1;
            end = end - 1;
        } else {
            start = start - 1;
            end = end - 1;
        }
    }
    console.log(count);
}

//findString('1234', '3')
findString('acknowledge', 'ack');
//findString('okayiloveyoutoo', 'love');
//findString('okayiloveyoutoo', 'too');
//findString('okayiloveyoutoo', 'ot');