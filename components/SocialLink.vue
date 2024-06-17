<template>
  <article
    class="w-[27rem] rounded-2xl font-inter p-8 bg-social-bg text-white flex flex-col justify-center items-center gap-6"
  >
    <div>
      <img
        src="~/assets/img/avatar-jessica.jpeg"
        alt="avatar-jessica"
        class="rounded-full h-24"
      />
    </div>

    <div>
      <h1 class="text-2xl font-semibold">Jessica Randall</h1>

      <h4 class="font-semibold text-social-green">London, United Kingdom</h4>
    </div>

    <p>"Front-end developer and avid reader"</p>

    <div class="w-full flex flex-col gap-4">
      <NuxtLink
        to="/"
        v-for="link in links"
        class="bg-social-gray rounded-xl h-12 flex justify-center items-center transition-all ease-in duration-300 hover:bg-social-green hover:text-black"
      >
        {{ link }}
      </NuxtLink>
    </div>
  </article>
</template>

<script lang="ts" setup>
const links = ["GitHub", "Frontend Mentor", "LinkedIn", "X", "Instagram"];
</script>
