<template>
    <div class="mt-5 pt-3 border-t">
        <h2 class="text-xl font-medium text-orange-700 text-center">Backlog</h2>
        <div class="mt-3">
            <h3 class="font-bold">Done</h3>
            <div class="badge badge-success badge-outline mr-1" v-for="item in doneItems">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span class="ml-1">{{ item }}</span>
            </div>
            <h3 class="font-bold mt-2">Todo</h3>
            <div class="badge badge-warning badge-outline mr-1" v-for="item in doingItems">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span class="ml-1">{{ item }}</span>
            </div>
            <div class="badge badge-error badge-outline mr-1" v-for="item in todoItems">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span class="ml-1">{{ item }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BacklogView",
    data() {
        return {
            doneItems: ['Autocomplete'],
            doingItems: ['Phone input'],
            todoItems: ['Password input']
        }
    }
}
</script>