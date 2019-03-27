<template>
    <button :class="[type,size]" :style="{borderRadius:borderRadius}" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name:'Button',
    props:{
        type:{
            type:String,
            default:'default'
        },
        size:{
            type:String,
            default:'middle'
        },
        borderRadius:{
            type:String,
            default:'28px'
        }
    },
    mounted(){
        
    },
    methods:{
        handleClick(){
            this.$emit('click')
        }
    }
}
</script>
<style lang="less" scoped>
    @import '../../styles/base.less';
    button{
        border:none;
        background: @theme-btn-bg-color;
        border: 1px solid @theme-btn-font-color;
        color: @theme-btn-font-color;
    }
    .primary{
        background: @theme-btn-font-color;
        border: 1px solid @theme-btn-bg-color;
        color: @theme-btn-bg-color;
    }
    .normal{
        background: @theme-btn-bg-color;
        border: 1px solid @theme-btn-font-color;
        color: @theme-btn-normal-font-color;
    }
    .middle{
        height:56px;
        padding: 0 33px;
        font-size: 24px;
    }
    .large{
        width:620px;
        height:88px;
        font-size: 28px;
    }
    [disabled]{
        opacity: 0.4;
    }
</style>
