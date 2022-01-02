script指定src后内部代码无效。
js/test.js:

function ok() {
        alert('ok');
}

index.html:
<script type="text/javascript" src="js/test.js">
   
    ok();
</script>

https://blog.csdn.net/weixin_30497527/article/details/99893816


()=>{}箭头函数不是类的方法，不能用this

js 必须加分号的5个地方
(),[],/正则/,+,-前面的语句必须结束
比如匿名函数调用
;(()=>{})()

