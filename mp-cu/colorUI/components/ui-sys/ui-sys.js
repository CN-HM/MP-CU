//import colorUI from '../../../colorui'
import config from '../../../config/index'

Component({
    data: {
        isLoading: false,
		app_footer: config.footer
    },
    options: {
        // 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
        addGlobalClass: true,
        //multipleSlots: true  //多插槽
    },
    properties: {
        styles: {   //样式
            type: String,
            value: ''
        },
        bg: {       //背景颜色
            type: String,
            value: 'ui-BG-2'
        },
        ui: {       //其他class
            type: String,
            value: ''
        },
        img: {
            type: String,
            value: ''
        },
        navBg: {
            type: String,
            value: 'bg-blur'
        },
        loading: {  //是否加载
            type: String,
            optionalTypes: Boolean,
            default: 'auto'
        },
        title: {
            type: String,
            value: ''
        },
        tabbar: {
            type: Boolean,
            value: false
        },
        tabbarData: {
            type: Array,
            value: []
        },
    },
    lifetimes: {
        created() {

        },
        attached() {
            //console.log(colorUI.store.getState().sys_theme)
        },
        ready() {

        },
    },
    observers: {

    },
    methods: {

    }
})