<template>
  <div class="h-14 w-full bg-slate-50 border-b-2 border-slate-200 grid grid-cols-3">
    <div class="flex items-center">
      <img src="logo.png" class="w-10 h-10 ml-2">
    </div>
    <div></div>
    <div class="flex justify-end items-center">
      <a href="https://github.com/Takachi67/vue-components" class="mr-2" target="_blank">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="w-10 h-10">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
      </a>
    </div>
  </div>
  <div class="grid grid-cols-5 mt-5 mb-[100vh]">
    <div></div>
    <div class="col-span-3">
      <div class="flex flex-col justify-center items-center">
        <img src="logo.png" class="w-20 h-20">
        <h1 class="text-xl font-bold mt-5">Takachi67/vue-components</h1>
        <span class="italic mt-2">Highly customisable and easy to use vue components</span>
      </div>
      <InstallationView></InstallationView>
      <BacklogView></BacklogView>
      <NotesView></NotesView>
      <AutocompleteView></AutocompleteView>
      <CollapseView></CollapseView>
    </div>
    <div></div>
  </div>
</template>

<script>
import BacklogView from './views/BacklogView.vue'
import NotesView from './views/NotesView.vue'
import AutocompleteView from './views/AutocompleteView.vue'
import CollapseView from './views/CollapseView.vue'
import InstallationView from './views/InstallationView.vue'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-dark.css'

hljs.registerLanguage('javascript', javascript)

export default {
  name: 'App',
  components: {
    BacklogView,
    NotesView,
    AutocompleteView,
    CollapseView,
    InstallationView
  },
  mounted() {
    hljs.highlightAll()
  }
}
</script>