<template>
  <header class="pb-5 pt-10">
    <div class="content-wrapper flex flex-row justify-between">
      <MazBtn color="transparent" fab @click="switchAside">
        <MazIcon name="icons/bars-2" size="2rem" />
      </MazBtn>
      <div class="relative">
        <MazBadge color="danger" class="absolute -right-[15%] -top-[15%] z-20">
          10
        </MazBadge>
        <MazBtn color="white" fab @click="switchNoti">
          <MazIcon name="icons/bell" size="2rem" />
        </MazBtn>
        <div
          class="absolute right-0 top-[110%] z-50 min-w-[15rem] rounded-xl bg-white p-4 shadow-lg"
          v-if="notiToggled"
        >
          <p class="!text-black">
            You currently do not have any notifications.
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const props = defineProps({
  notiToggled: Boolean,
  switchAside: Function,
  switchNoti: Function,
});
</script>

<style></style>
