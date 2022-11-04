import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./css/font.css"



import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



import Vue from 'vue';

import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';


import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';


import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import createAlignPlugin from '@kangc/v-md-editor/lib/plugins/align';


import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';

import Prism from 'prismjs';

import './utils/rem'




VMdPreview.use(vuepressTheme, {
    Prism,
});

VueMarkdownEditor.use(vuepressTheme, {
    Prism,
});

VueMarkdownEditor.use(createAlignPlugin());
VMdPreview.use(createAlignPlugin());



const app=createApp(App)

app.use(VueMarkdownEditor)
app.use(VMdPreview)
app.use(router)
app.use(ElementPlus)
app.mount('#app')