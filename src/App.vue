<template>
  <div class="container mt-5">
    <h1>Vue JSON-LD Plugin</h1>
    <p>Vue JSON-LD Plugin is a Vue 3 plugin that allows you to add JSON-LD structured data to your Vue 3 components.</p>
    <p>Because typically a <code>script</code>-tag is not allowed inside a Vue component, this plugin provides a way to add JSON-LD structured data to your Vue components.</p>

    <h2>Example</h2>
    <JsonLd :jsonLd="jsonLdExample" :head="true" />
    <p>You won't see anything in the browser, but the JSON-LD structured data is added at the place it was inserted or to the head of the document.</p>
  </div>
</template>

<script setup>
import {ref} from "vue";
import JsonLd from "./components/JsonLd.js";

const jsonLdExample = ref({
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "http://www.example.com",
  "name": "Unlimited Ball Bearings Corp.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-401-555-1212",
    "contactType": "Customer service"
  }
});
</script>
