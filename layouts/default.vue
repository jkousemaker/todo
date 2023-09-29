<template>
  <div class="relative flex w-full flex-row overflow-hidden">
    <useAside
      :asideToggled="asideToggled"
      :switchAside="switchAside"
    ></useAside>
    <div
      class="z-10 flex max-h-full w-screen shrink-0 origin-left flex-col bg-white"
      :class="
        asideToggled
          ? 'scale-90 overflow-hidden rounded-[3rem] [transition:transform_0.7s_cubic-bezier(0.22,_0.03,_0.26,_0.93)_0s,border-radius_0.6s_ease-out_0s]'
          : 'scale-100 overflow-auto rounded-none [transition:transform_0.6s_cubic-bezier(0.47,_-0.01,_0.49,_0.97)_0.45s,border-radius_0.35s_ease-in_0.65s]'
      "
    >
      <useHeader
        :notiToggled="notiToggled"
        :switchAside="switchAside"
        :switchNoti="switchNoti"
      ></useHeader>
      <main class="content-wrapper border-2 border-solid pb-10 pt-5">
        <h1 class="!text-secondary-600">Welcome</h1>
        <h1 class="!text-primary">Jonko</h1>
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
const asideToggled = ref(false);
const notiToggled = ref(false);

const switchAside = () => {
  asideToggled.value = !asideToggled.value;
};
const switchNoti = () => {
  notiToggled.value = !notiToggled.value;
};
</script>
