let apple = {
    name: 'りんご',
    color: 'red',
    weight: 320
};

let orange = {
    name: 'みかん',
    color: 'orange',
    weight: 100
};

let grape = {
    name: 'ぶどう',
    color: 'purple',
    weight: 5.2
};


console.log(apple);

//定義したオブジェクトを配列に格納
let fruits = [apple, orange, grape];

console.log(fruits);


fruits.forEach(e => {
    let total = apple.weight + orange.weight + grape.weight;
    console.log(total + 'g');
});

/*
1.りんご、みかん、ぶどうという果物の共通で表現できる特徴（たとえば、色、大きさ、重さなど）をプロパティとして、それぞれのオブジェクトを定義する
2.定義したオブジェクトを配列に格納する
3.配列の繰り返しを使って、りんご、みかん、ぶどうの総重量を計算して出力する
*/
