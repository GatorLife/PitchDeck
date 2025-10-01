import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // GATOR brand shortcuts
    'bg-gator': 'bg-[hsl(0,0%,3.92%)]',
    'bg-gator-card': 'bg-[hsl(240,5.88%,10%)]',
    'text-gator': 'text-[hsl(0,0%,98.04%)]',
    'text-gator-primary': 'text-[hsl(142.09,70.56%,45.29%)]',
    'text-gator-muted': 'text-[hsl(240,5.03%,64.90%)]',
    'border-gator': 'border-[hsl(240,3.70%,15.88%)]',

    // Component shortcuts
    'gator-citation': 'absolute bottom-30px left-30px text-xs text-gator-muted border-t border-gator pt-2 max-w-[calc(100%-60px)]',

    // Layout shortcuts
    'gator-grid-2': 'grid grid-cols-2 gap-3',
    'gator-grid-3': 'grid grid-cols-3 gap-3',

    // Spacing shortcuts for GATOR slides
    'slide-padding': 'px-14 py-10',
    'compact-spacing': 'space-y-1',
  },

  theme: {
    colors: {
      gator: {
        bg: 'hsl(0, 0%, 3.92%)',
        fg: 'hsl(0, 0%, 98.04%)',
        primary: 'hsl(142.09, 70.56%, 45.29%)',
        'primary-dark': 'hsl(142.09, 70.56%, 35%)',
        secondary: 'hsl(240, 3.70%, 15.88%)',
        muted: 'hsl(240, 5.03%, 64.90%)',
        card: 'hsl(240, 5.88%, 10%)',
        border: 'hsl(240, 3.70%, 15.88%)',
      },
    },
  },
})
