<template>
    <button class="g-button">提交</button>
</template>

<script>
export default{

}
</script>

<style>
    .g-button{
        font-size:var(--font_size);
        height:var(--button-height);
        padding:0 1em;
        border-radius: var(--border-radius);
        border:1px solid var(--border-color);
        background: var(--button-bg);
    }
    .g-button:hover{
        border-color: var(--border-color-hover);
    }
    .g-button:active{
        background: var(--button-active-bg);
    }
    .g-button:focus{
        outline: none;
    }
</style>