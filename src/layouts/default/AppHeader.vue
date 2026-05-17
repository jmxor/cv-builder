<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { IconSun, IconMoon } from "@tabler/icons-vue"
import { useColorMode } from "@vueuse/core"
import { RouterLink } from "vue-router"

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [{ label: "My CVs", href: "/cvs" }]

// Note: This simple scroll handler may be replaced with vueUse useScroll in the future.
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  handleScroll()
  window.addEventListener("scroll", handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

// Note: can pass { disableTransition: false }
const mode = useColorMode()
</script>

<template>
  <header
    :class="
      cn(
        'fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md transition-all duration-300',
        isScrolled && 'border-b border-border',
      )
    "
  >
    <nav class="mx-auto flex h-14 max-w-3xl items-center justify-between px-6 gap-3 md:px-8">
      <RouterLink
        to="/"
        class="text-xs font-semibold tracking-widest text-foreground uppercase transition-colors hover:text-muted-foreground"
      >
        Jmxor.dev
      </RouterLink>

      <!-- Nav links — hidden on mobile -->
      <ul class="hidden items-center gap-6 md:flex mr-auto">
        <li v-for="item in navItems" :key="item.href">
          <RouterLink
            :to="item.href"
            class="text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>

      <!-- Theme toggle -->
      <Button
        variant="ghost"
        size="icon"
        @click="mode = mode === 'light' ? 'dark' : 'light'"
        class="h-8 w-8 rounded-sm text-muted-foreground hover:text-foreground"
        aria-label="Toggle theme"
      >
        <IconSun v-if="mode === 'light'" class="h-4 w-4" />
        <IconMoon v-else class="h-4 w-4" />
      </Button>
    </nav>
  </header>
</template>
