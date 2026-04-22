/  安全ではない例 (XSSのリスクあり)
document.getElementById('user-input').innerHTML = userInput;

//  安全な例 (textContentを使用)
document.getElementById('user-input').textContent = userInput;

//  安全ではない例 (コードインジェクションのリスク)
eval('console.log(' + userInput + ')');

//  安全な例 (直接実行しない)
console.log(userInput);
