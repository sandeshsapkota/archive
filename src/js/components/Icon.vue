<template>
    <svg>
        <use :xlink:href="'/img/icons.svg#icon-' + name" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
    </svg>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "Icon",
        props: {
            name: { type: String, required: true },
        },
    }
</script>
