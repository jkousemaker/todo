<template>
  <div class="relative flex h-screen overflow-hidden">
    <aside
      class="z-0 w-[1000px] bg-transparent"
      :class="
        asideToggled
          ? 'min-w-[70%] max-w-[70%]  !ease-[cubic-bezier(0.59,_0.03,_0.17,_0.92)] [transition:max-width_0.7s,min-width_0.7s]'
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
            @click="switchAside(true)"
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
        <h1 class="clipped-gradient text-5xl font-extrabold">
          <span>Gabryella</span>
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
            @click="switchAside(true)"
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
        </div>
      </div>
    </aside>
    <div
      class="z-10 flex max-h-full w-screen shrink-0 origin-left flex-col bg-white"
      :class="
        asideToggled
          ? 'scale-90 overflow-hidden rounded-[3rem] [transition:transform_0.7s_cubic-bezier(0.22,_0.03,_0.26,_0.93)_0s,border-radius_0.6s_ease-out_0s]'
          : 'scale-100 overflow-auto rounded-none [transition:transform_0.6s_cubic-bezier(0.47,_-0.01,_0.49,_0.97)_0.45s,border-radius_0.35s_ease-in_0.65s]'
      "
    >
      <header class="pb-5 pt-10">
        <div class="content-wrapper flex flex-row justify-between">
          <MazBtn color="transparent" fab @click="switchAside(false)">
            <MazIcon name="icons/bars-2" size="2rem" />
          </MazBtn>
          <MazBtn color="transparent" fab>
            <MazIcon name="icons/bell" size="2rem" />
          </MazBtn>
        </div>
      </header>
      <main class="content-wrapper border-2 border-solid pb-10 pt-5">
        <h1 class="!text-secondary-600">Welcome</h1>
        <h1 class="!text-primary">Jonko</h1>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin {
  0% {
    min-width: 0%;
    max-width: 0%;
  }
  100% {
    min-width: 70%;
    max-width: 70%;
  }
}

a.router-link-active {
  color: var(--maz-color-primary) !important;
  border-color: var(--maz-color-primary) !important;
  padding-bottom: 0.5rem !important;
  padding-top: 0.5rem !important;
}

.m-radio-buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1.25rem;
}
</style>

<script lang="ts" setup>
import { SfProgressCircular } from "@storefront-ui/vue";
const colorMode = useColorMode();
const asideToggled = ref(false);
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
const switchAside = (nav: Boolean) => {
  asideToggled.value = !asideToggled.value;
};
</script>
