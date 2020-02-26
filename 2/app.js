// while文では、条件がtrueである間は繰り返し処理が実行
// 引数の条件がtrueの間、波括弧内部の処理が繰り返される
// while(条件){
	// 処理
// }

var max = 100;
var num = 1;
var count = 0;

while(num < max){
	num = num * 2;
	count = count + 1;
}

alert('２を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');