<template>
    <div class="number-selector" style="width:190px">
        <div class="number-decrease">-</div>
        <input class="number-input" />
        <div class="number-increase">+</div>
    </div>
</template>

<script>
export default {
    name:'Number',
    props:{
        height:{
            type:String,
            default:'44px'
        },
        width:{
            type:String,
            default:'190px'
        },
        
    }
}
</script>
<style lang="less" scoped>
    .number-selector{
        height: 44px;
        width: 190px;
        display: flex;
        flex-direction: row;
        text-align: center;
        border:1px solid #e9e9e9;
    }
    .number-decrease,.number-increase{
        width: 45px;
        height:44px;
        line-height: 44px;
        color:#cccccc;
    }
    .number-decrease{
        border-right: 1px solid #e9e9e9;
    }
    .number-increase{
        border-left: 1px solid #e9e9e9;
    }
    .number-input{
        width: 100px;
        height: 44px;
        border:none;
        padding:0;
        text-align: center;
    }

</style>

