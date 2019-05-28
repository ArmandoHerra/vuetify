// Styles
import './VCalendarWeekly.sass'

// Mixins
import VCalendarWeekly from './VCalendarWeekly'

// Util
import { VTimestamp, parseTimestamp, getStartOfMonth, getEndOfMonth } from './util/timestamp'

/* @vue/component */
export default VCalendarWeekly.extend({
  name: 'v-calendar-monthly',

  computed: {
    staticClass (): string {
      return 'v-calendar-monthly v-calendar-weekly'
    },
    parsedStart (): VTimestamp {
      return getStartOfMonth(parseTimestamp(this.start))
    },
    parsedEnd (): VTimestamp {
      return getEndOfMonth(parseTimestamp(this.end))
    }
  }

})
