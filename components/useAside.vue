<template>
  <aside
    class="z-0 w-[1000px] bg-transparent"
    :class="
      asideToggled
        ? 'min-w-[75%] max-w-[75%]  !ease-[cubic-bezier(0.59,_0.03,_0.17,_0.92)] [transition:max-width_0.7s,min-width_0.7s]'
        : 'min-w-0 max-w-0  !ease-[cubic-bezier(0.69,_0.25,_0.59,_0.98)] [transition:max-width_0.9s_0.15s,min-width_0.9s_0.15s]'
    "
  >
    <div class="flex min-w-fit flex-col gap-5 p-10 pt-16">
      <div class="flex flex-row flex-nowrap justify-between">
        <SfProgressCircular size="3xl" :value="10" class="mt-5">
          <text
            class="font-medium"
            text-anchor="middle"
            alignment-baseline="central"
            x="100%"
            y="100%"
            fill="white"
          >
            LvL
          </text>
        </SfProgressCircular>
        <MazBtn
          @click="props.switchAside"
          outline
          fab
          :nuxtLink="true"
          color="white"
          class=""
        >
          <MazIcon
            name="icons/chevron-right"
            size="1.2rem"
            class="aside-icon"
            stroke-width="10"
          />
        </MazBtn>
      </div>
      <h1 class="clipped-gradient flex flex-col gap-2 font-extrabold">
        <span class="clip">Gabryella</span>
        <span class="text-3xl !text-white">Silva</span>
      </h1>
      <div class="flex flex-row flex-nowrap">
        <MazRadioButtons
          v-model="colorMode.preference"
          :options="modeOptions"
          color="secondary"
        />
      </div>
      <div class="flex flex-col gap-2">
        <MazBtn
          v-for="link in routerLinks"
          :to="{ path: link.path }"
          @click="props.switchAside"
          outline
          block
          :nuxtLink="true"
          color="transparent"
          class="!flex-nowrap !justify-start !border-0 !border-b-4 !p-0 !py-2 !pl-4 !text-white !transition-all !duration-300 dark:hover:!text-black"
        >
          <template #left-icon>
            <MazIcon :name="link.icon" :size="link.iconSize" />
          </template>
          {{ link.text }}
        </MazBtn>
        {{ props.asideToggled }}
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { SfProgressCircular } from "@storefront-ui/vue";
const colorMode = useColorMode();
const props = defineProps({
  asideToggled: Boolean,
  switchAside: Function,
});
const modeOptions = [
  {
    value: "light",
    label: "Day",
  },
  {
    value: "dark",
    label: "Night",
  },
];
const routerLinks = [
  { path: "/", text: "Dashboard", icon: "icons/cloud", iconSize: "2rem" },
  { path: "/tasks", text: "Tasks", icon: "icons/clock", iconSize: "2rem" },
  { path: "/goals", text: "Goals", icon: "icons/cloud", iconSize: "2rem" },
  { path: "/journal", text: "Journal", icon: "icons/cloud", iconSize: "2rem" },
  {
    path: "/gratitude",
    text: "Gratitude",
    icon: "icons/cloud",
    iconSize: "2rem",
  },
];
</script>

<style scoped>
.m-radio-buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1.25rem;
}

a.router-link-active {
  color: var(--maz-color-primary) !important;
  border-color: var(--maz-color-primary) !important;
  padding-bottom: 0.5rem !important;
  padding-top: 0.5rem !important;
}
</style>
