# vue-json-ld

![Vue JS Seminar](https://www.vuejs-seminar.de/img/VuejsSeminar/logo_color.png "Vue JS Seminar")

## Why is there a package?

JSON+LD is a great way to add structured data to your website. 
This is especially useful for SEO purposes. This package allows you to easily add JSON+LD to your Vue application.

But why not just add the JSON+LD directly to the HTML?
Because the JSON+LD Data needs to be within a `<script>` tag.
And Vue does not allow you to add a `<script>` tag within the template.

Further it is comperatively hard to put the JSON+LD data into the head of the document.

## Installation

Run npm or yarn installation of the vue3-json-ld package:

### yarn
```bash
$ yarn add vue3-json-ld
```

### npm
```bash
$ npm install vue3-json-ld
```

### Set Up your Vue Application

```vue
// App.vue

import { createApp } from 'vue'
import App from './App.vue'
import Vue3JsonLD from 'vue3-json-ld';

const app = createApp(App)
app.use(Vue3JsonLD)
app.mount('#app')
```


## Usage

### Basic Usage (JSON+LD as Slot)

```vue
<template>
  <vue-json-ld>
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Google",
      "url": "http://www.google.com",
      "sameAs": [
        "http://www.facebook.com/google",
        "http://www.twitter.com/google"
      ]
    }
  </vue-json-ld>
</template>
```

### Basic Usage (JSON+LD as Slot)

```vue
<template>
  <vue-json-ld :json-ld="jsonLdObject" />
</template>

<script setup>
import { ref } from 'vue';
const jsonLdObject = ref({
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "Google",
  "url": "http://www.google.com",
  "sameAs": [
    "http://www.facebook.com/google",
    "http://www.twitter.com/google"
  ]
});
</script>
```

## Props

### head

This places the JSON LD in the head of the document. This is useful for SEO purposes.

` <vue-json-ld :head="true" :json-ld="jsonLdObject" />`

### json-ld

This is the JSON+LD object that you want to render.

` <vue-json-ld :json-ld="jsonLdObject" />`

## Slots

### default

You can simply pass your json+ld String as the default slot (between the component tags):

```vue
<vue-json-ld>
  {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Google",
    "url": "http://www.google.com",
    "sameAs": [
      "http://www.facebook.com/google",
      "http://www.twitter.com/google"
    ]
  }
</vue-json-ld>
```

## Resources

- [📺 IT Pabst YouTube](https://www.youtube.com/channel/UC2qIzllaHNtseSXwj18r-7w)
- [Vue JS Seminars and Coaching](https://www.vuejs-seminar.de/)
- [Vue JSON LD Plugin](https://www.vuejs-seminar.de/packages/vue3-json-ld)
- [Laravel Seminars and Coaching](https://www.laravel-seminar.de/)
- [Andreas Pabst](https://www.andreaspabst.com)