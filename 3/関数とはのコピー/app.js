
// •引数：入力する値、『,』 で繋ぐことが可能
// •戻り値：出力される値

// function 関数名(引数){
	// 処理
	// return 戻り値;
// }


// メイン部分
var alertString;
alertString = addString("WebCamp");

// 制作した関数を呼び出す
alert(alertString);

// 作成した関数
function addString(strA){
	var addStr = "Hello " + strA;
	return addStr;
}