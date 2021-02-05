import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default async (ctx, inject) => {
  const runtimeConfig = (ctx.$config && ctx.$config.googleAnalytics) || {}
  const moduleOptions = {
    dev: true,
    debug: {sendHitTask: false},
    id: 'UA-76464598-5',
    disabled: () => document.cookie.includes('ga_optout=true'),
    set: [{field: 'anonymizeIp', value: true}],
  }
  const options = {...moduleOptions, ...runtimeConfig}

  if (typeof options.asyncID === 'function') {
    options.id = await options.asyncID(ctx)
  }

  Vue.use(VueAnalytics, {...{router: ctx.app.router}, ...options})

  ctx.$ga = Vue.$ga
  inject('ga', Vue.$ga)
}