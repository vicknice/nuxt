import EventService from '~/services/EventService'

export const state = () => ({
  events: [
    {
      id: 1,
      title: 'First Event',
      time: '09:00',
      date: '2021-03-22',
    },
  ],
  eventsTotal: 0,
  event: {},
  perPage: 3,
})

export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  },
}

export const actions = {
  createEvent({commit, dispatch}, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit('ADD_EVENT', event)
        commit('SET_EVENT', event)
        const notification = {
          type: 'success',
          message: 'Your event has been created!',
        }
        dispatch('notification/add', notification, {root: true})
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating your event: ' + error.message,
        }
        dispatch('notification/add', notification, {root: true})
        throw error
      })
  },

  fetchEvents({commit, dispatch, state}, {page}) {
    return EventService.getEvents(state.perPage, page)
      .then(response => {
        commit('SET_EVENTS_TOTAL', parseInt(response.headers['x-total-count']))
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: ' + error.message,
        }
        dispatch('notification/add', notification, {root: true})
      })
  },

  fetchEvent({commit, getters, state}, id) {
    console.log('here', id)

    if (id === state.event.id) {
      return state.event
    }

    const event = getters.getEventById(id)

    if (event) {
      commit('SET_EVENT', event)
      return event
    } else {
      return this.$eventRepository.show(id).then(response => {
        commit('SET_EVENT', response.data)
        return response.data
      })
    }
  },
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventsTotal = eventsTotal
  },
  SET_EVENT(state, event) {
    state.event = event
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
