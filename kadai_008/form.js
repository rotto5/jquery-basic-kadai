$(function () {
 // class属性がbtnの要素がクリックされたら
 $('.btn').on('click', function () {
   // text-boxにテキストを出力する
   console.log($('.text-box').val('クリックしました！'));
 });
});