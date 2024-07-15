// var arr = ['able', 'win', 'word', 'big', 1, 3, 5, 3, 6];
// var forNum = [];
// var forStr = [];
// arr.sort();
// console.log(arr);
// var text = prompt('Enter your text...').split(' ');
// var form = prompt('Enter your format...').toLowerCase();

// if (form === 'a-z') {
//     text.sort();
//     console.log(text);
// }
// else if (form === 'z-a') {
//     function oppArr(a, b) { 
//         return b - a; 
//     }
//     text.sort(oppArr);
//     console.log(text);
// }

var text = 'Lorem ipsum dolor sit amet 3 4 5 consectetur, adipisicing elit. Natus, libero!'.split(' ');
var str = ['str'];
var num = ['num'];
for (var i = 0; i < text.length; i++) {
    if (typeof text[i] == 'number') {
        str[i] = text[i];
    } else if (typeof text[i] == 'string') {
        num[i] = text[i];
    }
    else {
        console.log('((');
    }
}
console.log(typeof text[5]);
console.log(str + ' str');
console.log(num + ' number');