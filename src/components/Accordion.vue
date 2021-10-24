<template>
    <div :class="containerClass">
        <div @click="toggleAccordion">
            <slot name="button">
                
            </slot>
        </div>
        <div v-show="showContent">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
    name: "Accordion",
    props: {
        containerClass: {
            type: String,
            default: "",
        },
        buttonClass: {
            type: String,
            default: "",
        },
        contentClass: {
            type: String,
            default: "",
        }
    },
    setup() {
        let showContent: Ref<Boolean> = ref(false);

        function toggleAccordion() {
            console.log('O');
            showContent.value = !showContent.value;
        }

        return {
            showContent,
            toggleAccordion
        }
    }
});
</script>

<style scoped>

</style>
