//連想配列の定義
let fruits = {apple:'りんご', strawberry:'いちご', grape:'ぶどう', lemon:'れもん'};

//出力
console.log(fruits);

//grapeの値を出力
console.log(fruits.grape);

//fruits のキー一覧を出力
for (key in fruits) {
    console.log(key);
}

//すべての値を出力
for (key in fruits) {
    console.log(fruits[key]);
}









/*
1．次のような「キー」と「値」のペアを保存している連想配列名fruitsを作成しましょう
2．「キー」grapeの値を出力してください
3．連想配列名fruitsのキーの一覧を出力してください
4．連想配列名fruitsの全ての値を出力してください
*/
