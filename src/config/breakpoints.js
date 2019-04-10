import styledBreakpoint from '@humblebee/styled-components-breakpoint'

// Creates an object with breakpoint utility methods.
const breakpoint = styledBreakpoint({
  xxs: 0,
  xs: 320,
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
})

export default breakpoint
