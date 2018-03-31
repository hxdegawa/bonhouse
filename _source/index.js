$(function(){
  $(".expand").click(function(){
    $(this).after('<p>対象</p><p class="desc">問いません</p><p>曜日・時間</p><p class="desc">応相談</p><p>お申込み</p><a href="mailto:taniyuki6v6@y-mobile.ne.jp">taniyuki6v6@y-mobile.ne.jp</a><span>　080-1069-5374</span><p class="break">にて承ります</p>')
    $(this).remove();
  });
});