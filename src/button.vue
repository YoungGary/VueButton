<template>
    <button class="g-button"  :class="{[`icon-${position}`]:true }">
           <svg v-if="icon" class="icon"><use :xlink:href="`#${icon}`"></use></svg>
        <slot>
        </slot>
    </button>
</template>

<script>
export default{
//    props:['icon','position']
    props:{
        icon:{},
        position:{
            default:'left',
            type:String
        }
    }
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
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;
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
    .icon{
        width: 1em;
        height: 1em;
        margin-right: 0.3em;
    }
    .icon-right .icon{
        order:2;
        margin-left: 0.3em;
        margin-right: 0;
    }

</style>