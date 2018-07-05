var x = 10;
var y = 20;

function f() {
    return x * x - y;
}

var res = f(2,5);
document.write('res = ', res);
document.write('<hr />');
//--------Part 2------------
document.write('Part 2', '<br />');

var arr = [];
arr [20] = 'end';

for (i = 0; i < arr.length; i++) {
    arr[i] = 's' + i;
}