import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Function to apply custom colors to icons
  const applyIconColors = () => {
    // First, set ALL icons to GATOR green by default
    const allIcons = document.querySelectorAll('svg[data-lucide]')
    allIcons.forEach((svg: SVGElement) => {
      svg.style.stroke = 'hsl(142.09, 70.56%, 45.29%)'
    })

    // Then override specific icon types with custom colors
    // Color X marks red
    const xMarks = document.querySelectorAll('svg[data-lucide="x"]')
    xMarks.forEach((svg: SVGElement) => {
      svg.style.stroke = 'hsl(0, 70%, 50%)'
    })

    // Color warning triangles orange
    const warnings = document.querySelectorAll('svg[data-lucide="alert-triangle"]')
    warnings.forEach((svg: SVGElement) => {
      svg.style.stroke = 'hsl(30, 90%, 55%)'
    })
  }

  // Load Lucide icons script
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/lucide@latest'
    script.async = true
    script.onload = () => {
      // Initialize Lucide icons after script loads
      if (window.lucide) {
        window.lucide.createIcons()
        // Apply colors after icons are created
        setTimeout(applyIconColors, 50)
      }
    }
    document.head.appendChild(script)

    // Reinitialize icons on route change
    router.afterEach(() => {
      setTimeout(() => {
        if (window.lucide) {
          window.lucide.createIcons()
          // Apply colors after icons are created
          setTimeout(applyIconColors, 50)
        }
      }, 100)
    })
  }
})
