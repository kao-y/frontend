//関数名あり

//ユーザー定義関数 triangle_area の定義
function triangle_area(bottom, height) {
    
    //底辺*高さ/ 2 
    let p = bottom * height / 2;
    
    
    return p;
    
} 

console.log(triangle_area(20, 10));




//関数名なし
let area = function(bottom, height) {
    
    let p = bottom * height / 2
    
    return p;
    
}

console.log(area(10, 6));







/*
三角形の面積を求める関数を作成して、実行して動作の確認をしていきましょう。
ただし、関数名がある場合と、関数名のない場合の二つのケースを実装してください。
*/
