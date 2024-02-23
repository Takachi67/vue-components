<template>
    <div class="clp-container">
        <div class="clp-title" @click="isOpen = !isOpen">
            <slot name="title">Click on me !</slot>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="clp-arrow" v-if="showArrow" :style="{ rotate: isOpen ? '180deg' : '0deg' }">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
        <div class="clp-content" :style="[isOpen ? 'opacity: 1; height: auto; padding: 0.5rem;' : 'opacity: 0; height: 0; overflow: hidden;']">
            <slot name="content">This is the content</slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Collapse",
    props: {
        defaultIsOpen: {
            type: Boolean, 
            default: false
        },
        showArrow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            isOpen: this.defaultIsOpen
        }
    }
}
</script>

<style>
.clp-container {
    width: 100%;
    border-radius: 0.5rem;
    border-width: 2px;
}

.clp-title {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.clp-title:hover {
    cursor: pointer;
}

.clp-arrow {
    width: 1.5rem; 
    height: 1.5rem;
    opacity: 50%;
    transition-property: rotate;
    transition-timing-function: ease-out;
    transition-duration: 300ms; 
}

.clp-content {
    transition-property: opacity;
    transition-timing-function: ease-out;
    transition-duration: 300ms; 
}
</style>