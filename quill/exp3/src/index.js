// 引入
import Quill from 'quill';
import '../public/style/style.css'
import Counter from './counter/Counter';
Quill.register('modules/counter', Counter);


// 使用
const quill = new Quill('#editor', {
    theme: 'bubble',
    placeholder: '输入...',
    modules: {
        toolbar: [
            // 默认的
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'link'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['clean'],

            // 新增的
            ['image'],
            ['blockquote', 'code-block', 'code', 'link']
        ],
        counter: true
    },
    // 新增的
    keyboard: {
        bindings: {
            strike: {
                key: 'S',
                ctrlKey: true,
                shiftKey: true,
                handler: function (range, context) {
                    // 获取当前光标所在文本的格式
                    const format = quill.getFormat(range);
                    // 增加/取消删除线
                    quill.format('strike', !format.strike);
                }
            },
        }
    },
    // 新增的
    history: {
        delay: 2000, // 2s记录一次操作历史
        maxStack: 200, // 最大记录200次操作历史
    }
});
console.log("Hello World!");
document.getElementById("button").onclick = function () {
    const range = quill.getSelection();
    if (range) {
        quill.insertText(range.index, 'DevUI', 'link', 'https://devui.design/');
    }

    const { index, length } = quill.getSelection();
    const contents = quill.getContents(index, length);
    console.log('contents:', contents);
}

// 待查找文本
const str = 'Dev';
const length = str.length;

document.getElementById("find").onclick = function () {

    // 匹配目标文本的正则
    const reg = new RegExp(str, 'g');

    let match;
    while ((match = reg.exec(quill.getText())) !== null) {
        // 目标文本在文档中的位置
        const index = match.index;

        // 匹配到目标文本之后，我们可以对该文本做高亮或替换的处理

        // 高亮
        quill.formatText(index, length, 'background', '#ef0fff');
    }
}

document.getElementById("replace").onclick = function () {

    // 匹配目标文本的正则
    const reg = new RegExp(str, 'g');

    let match;
    while ((match = reg.exec(quill.getText())) !== null) {
        // 目标文本在文档中的位置
        const index = match.index;

        // 匹配到目标文本之后，我们可以对该文本做高亮或替换的处理

        // 高亮
        quill.formatText(index, length, 'background', '#ef0fff');

        // 替换
        quill.deleteText(index, length);
        quill.insertText(index, 'DevUI', 'link', 'https://devui.design/');
    }
}



