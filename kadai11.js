let e1 = document.getElementById('p1');
let e2 = document.getElementById('p2');
let e3 = document.getElementById('p3');

e1.outerHTML = '<input type="text">'; //inputタグに変更

e2.innerText = 'テキスト文字列'; //「テキスト文字列」というテキスト文字列を埋め込む

console.log(e3.id); //id属性の値を取得
e3.id = 'p5'; //　id属性の値を変更
console.log(e3.id); //id属性の値を取得



/*
1.<div id=”p1”></div>を、inputタグに変更する（inputタグの属性は自由）
2.<div id=”p2”></div>に「テキスト文字列」というテキスト文字列を埋め込む
3.<div id=”p3”></div>のid属性の値を”p5”に変更する
*/　
