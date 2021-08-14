import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme


export default {
    components: {
      quillEditor
    },
     data () {
        return {
          // 富文本编辑器默认内容
          content: '<h2>I am Example</h2>',
          //富文本编辑器配置
          editorOption: {
            // Some Quill options...
          }
        }
      },
      methods: {
        //失去焦点事件
        onEditorBlur(quill) {
          console.log('editor blur!', quill)
        },
        //获得焦点事件
        onEditorFocus(quill) {
          console.log('editor focus!', quill)
        },
        // 准备富文本编辑器
        onEditorReady(quill) {
          console.log('editor ready!', quill)
        },
        //内容改变事件
        onEditorChange({ quill, html, text }) {
          console.log('editor change!', quill, html, text)
          this.content = html
        }
      }
  }
  