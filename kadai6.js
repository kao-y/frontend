/*
1．要素として「apricot」, 「strawberryが順番に入っている配列fruitを定義
2．配列fruitの先頭に「pear」を追加
3．配列fruitの末尾に「grape」を追加
4．配列fruitの末尾を「lime」に変更する
5．配列fruitをconsole.logで出力
*/

let fruit = ['apricot','strawberry'];  
//配列を定義(1)
console.log(fruit);

fruit.unshift('pear');               
//配列の先頭に「pear」を追加(2)

console.log(fruit);

fruit.push('grape');
//配列の末尾に「grape」を追加(3)

console.log(fruit);

fruit[3] = 'lime'
//配列の末尾を「lime」に変更(4)

console.log(fruit);

