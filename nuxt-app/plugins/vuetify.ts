// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import { VDateInput } from 'vuetify/labs/VDateInput';
import * as labsComponents from 'vuetify/labs/components';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components : {
      ...labsComponents,
      VDateInput
    }
  })
  app.vueApp.use(vuetify)
})
