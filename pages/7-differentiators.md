---
layout: default
---

<style src="../style.css"></style>

<style>
/* Highlight the GATOR column (4th column) */
table th:nth-child(4),
table td:nth-child(4) {
  background: linear-gradient(135deg, hsla(142, 67%, 35%, 0.25) 0%, hsla(142, 70%, 10%, 0.15) 60%);
  border-left: 2px solid var(--gator-primary);
  font-weight: 600;
}

/* Make checkmarks in GATOR column green */
table td:nth-child(4) i[data-lucide="check"] {
  stroke: var(--gator-primary) !important;
}

/* Keep X marks red/muted */
table i[data-lucide="x"] {
  stroke: hsl(0, 70%, 50%) !important;
}

/* Keep warning triangles orange */
table i[data-lucide="alert-triangle"] {
  stroke: hsl(30, 90%, 55%) !important;
}
</style>

<div class="classification-header">UNCLASSIFIED</div>

# **Differentiators vs. Ranges & Commercial Courses**

<div class="text-sm" style="display: flex; flex-direction: column; justify-content: center; min-height: 40vh;">

| Capability | Traditional Ranges | Commercial Courses | **GATOR** |
|------------|-------------------|-------------------|-----------|
| **Grades Real Operator Inputs** | <i data-lucide="x" class="lucide-icon-sm"></i> Manual grading | <i data-lucide="x" class="lucide-icon-sm"></i> Multiple-choice | <i data-lucide="check" class="lucide-icon-sm"></i> AI-powered doctrinal grading |
| **Adaptive Scenarios** | <i data-lucide="x" class="lucide-icon-sm"></i> Static configs | <i data-lucide="alert-triangle" class="lucide-icon-sm"></i> Limited paths | <i data-lucide="check" class="lucide-icon-sm"></i> Living ranges + threat intel |
| **Instant Feedback** | <i data-lucide="x" class="lucide-icon-sm"></i> 2-week AAR lag | <i data-lucide="alert-triangle" class="lucide-icon-sm"></i> End-of-module | <i data-lucide="check" class="lucide-icon-sm"></i> Real-time chatbot |
| **Predictive Analytics** | <i data-lucide="x" class="lucide-icon-sm"></i> Retroactive | <i data-lucide="x" class="lucide-icon-sm"></i> None | <i data-lucide="check" class="lucide-icon-sm"></i> Gap forecasting + prescriptions |
| **Commander Dashboard** | <i data-lucide="x" class="lucide-icon-sm"></i> Excel exports | <i data-lucide="x" class="lucide-icon-sm"></i> Student certs | <i data-lucide="check" class="lucide-icon-sm"></i> Role/mission readiness view |

</div>

<div v-click class="highlight mt-2 text-sm" style="margin-top: 1rem;">
<strong>Key Insight:</strong> GATOR closes the loop traditional ranges can't: from real operator inputs to instant, predictive readiness insights commanders can act on.
</div>

<div class="classification-footer">UNCLASSIFIED</div>
