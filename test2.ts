//  脆弱性のあるコード: 'any' を使用
function processUser(user: any) {
  // userがどのような構造でも通ってしまう
  console.log(user.name.toUpperCase()); // user.nameが存在しない場合、ランタイムエラー
}

const maliciousUser = { name: null };
processUser(maliciousUser); // 実行時にエラーが発生、または不正アクセスに悪用される
