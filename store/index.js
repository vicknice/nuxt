import Vue from 'vue'
import groupBy from 'lodash.groupby'
import defu from 'defu'
import {addDays} from 'date-fns'
import {getEventIndexById} from '~/helpers'
import {generate} from '@ant-design/colors'
import theme from '~/theme'

export const state = () => ({
  affiliate: {
    id: 1,
    name: 'ga-sps',
    theme: {
      nav: {
        class: 'bg-white text-gray-800',
      },
      logo_path: '',
      colors: {
        primary: 'paprika',
        secondary: '',
        tertiary: '',
        danger: '',
        warning: '',
        success: '',
        info: '',
      },
    },
  },
  authenticated: false,
  categories: {},
  recipes: [
    {
      title: 'Red White and Blue Rice Krispie Treats',
      author: 'Hank Douglas',
      time: 20,
      difficulty: 'medium',
      servings: 4,
      procedure:
        'My recipe for Red White and Blue Rice Krispie Treats lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image:
        'https://www.iheartnaptime.net/wp-content/uploads/2018/05/red-white-and-blue-rice-krispie-treats.jpg',
      isFeatured: true,
    },
    {
      title: 'Garlic and Herb Sautéed Bell Pepper Strips',
      author: 'Nicholas Denver',
      time: 30,
      difficulty: 'easy',
      servings: 5,
      procedure:
        'Garlic and Herb Sautéed Bell Pepper Strips, at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      image:
        'https://www.thespruceeats.com/thmb/eFyjZT5rxTDF3j3GD2undTytLjk=/3000x3000/smart/filters:no_upscale()/garlic-herb-sauteed-bell-pepper-recipe-102112-hero-01-5be21874c9e77c0051eed106.jpg',
      isFeatured: true,
    },
    {
      title: 'Lily’s Healthy Beef Burger',
      author: 'Lily Ford',
      time: 10,
      difficulty: 'easy',
      servings: 4,
      procedure:
        'Lily’s Healthy Beef Burger recipe, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81cMw0qNjTL._SX425_.jpg',
    },
  ],
  resources: [
    {
      title: 'Red White and Blue Rice Krispie Treats',
      author: 'Hank Douglas',
      time: 20,
      difficulty: 'medium',
      servings: 4,
      procedure:
        'My recipe for Red White and Blue Rice Krispie Treats lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image:
        'https://www.iheartnaptime.net/wp-content/uploads/2018/05/red-white-and-blue-rice-krispie-treats.jpg',
      isFeatured: true,
    },
    {
      title: 'Garlic and Herb Sautéed Bell Pepper Strips',
      author: 'Nicholas Denver',
      time: 30,
      difficulty: 'easy',
      servings: 5,
      procedure:
        'Garlic and Herb Sautéed Bell Pepper Strips, at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      image:
        'https://www.thespruceeats.com/thmb/eFyjZT5rxTDF3j3GD2undTytLjk=/3000x3000/smart/filters:no_upscale()/garlic-herb-sauteed-bell-pepper-recipe-102112-hero-01-5be21874c9e77c0051eed106.jpg',
      isFeatured: true,
    },
    {
      title: 'Lily’s Healthy Beef Burger',
      author: 'Lily Ford',
      time: 10,
      difficulty: 'easy',
      servings: 4,
      procedure:
        'Lily’s Healthy Beef Burger recipe, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81cMw0qNjTL._SX425_.jpg',
    },
  ],
  releases: [],
  settings: {
    title: 'Documentation',
    url: '',
    defaultDir: 'docs',
    defaultBranch: '',
    filled: false,
  },
  events: [
    {
      id: 10,
      title: 'All day event',
      date: new Date(),
      allDay: true,
    },
    {
      id: 20,
      title: 'Timed event',
      start: addDays(new Date(), 1),
    },
    {
      id: 30,
      title: 'Timed event',
      start: addDays(new Date(), 2),
    },
  ],
  weekendsVisible: true,
})

export const getters = {
  primaryColors(state) {
    return generate(
      Object.values(theme.colors[state.affiliate.theme.colors.primary])[5],
    )
  },
  settings(state) {
    return state.settings
  },
  githubURLs(state) {
    const {github = '', githubApi = ''} = state.settings

    // GitHub Enterprise
    if (github.startsWith('http') && githubApi.startsWith('http')) {
      return {
        repo: github,
        api: {
          repo: githubApi,
          releases: `${githubApi}/releases`,
        },
      }
    }

    // GitHub
    return {
      repo: `https://github.com/${github}`,
      api: {
        repo: `https://api.github.com/repos/${github}`,
        releases: `https://api.github.com/repos/${github}/releases`,
      },
    }
  },
  releases(state) {
    return state.releases
  },
  lastRelease(state) {
    return state.releases[0]
  },
  events: state => state.events,
  weekendsVisible: state => state.weekendsVisible,
}

export const mutations = {
  SET_CATEGORIES(state, categories) {
    // Vue Reactivity rules since we add a nested object
    Vue.set(state.categories, this.$i18n.locale, categories)
  },
  SET_RELEASES(state, releases) {
    state.releases = releases
  },
  SET_DEFAULT_BRANCH(state, branch) {
    state.settings.defaultBranch = branch
  },
  SET_SETTINGS(state, settings) {
    state.settings = defu({filled: true}, settings, state.settings)
    if (!state.settings.url) {
      // eslint-disable-next-line no-console
      console.warn(
        'Please provide the `url` property in `content/setting.json`',
      )
    }
  },
  CREATE_EVENT(state, event) {
    return state.events.push(event)
  },
  UPDATE_EVENT(state, updatedEvent) {
    const index = getEventIndexById(state, updatedEvent.id)

    if (index === -1) {
      return console.warn(`Unable to update event (id ${updatedEvent.id})`)
    }

    return state.events.splice(index, 1, {
      ...state.events[index],
      title: updatedEvent.title,
      start: updatedEvent.start,
      end: updatedEvent.end,
      date: updatedEvent.date,
    })
  },
  DELETE_EVENT(state, eventId) {
    const index = getEventIndexById(state, eventId)

    if (index === -1) {
      return console.warn(`Unable to delete event (id ${eventId})`)
    }

    return state.events.splice(index, 1)
  },

  SET_WEEKENDS_ENABLED(state, enabled) {
    state.weekendsVisible = enabled
  },

  ADD_RECIPE(state, recipe) {
    state.recipes.push(recipe)
  },

  ADD_RESOURCE(state, resource) {
    state.resources.push(resource)
  },
}

export const actions = {
  async fetchCategories({commit, state}) {
    // Avoid re-fetching in production
    if (process.dev === false && state.categories[this.$i18n.locale]) {
      return
    }
    const docs = await this.$content(this.$i18n.locale, {deep: true})
      .only(['title', 'menuTitle', 'category', 'slug', 'version', 'to'])
      .sortBy('position', 'asc')
      .fetch()
    if (state.releases.length > 0) {
      docs.push({
        slug: 'releases',
        title: 'Releases',
        category: 'Community',
        to: '/releases',
      })
    }
    const categories = groupBy(docs, 'category')

    commit('SET_CATEGORIES', categories)
  },
  async fetchReleases({commit, state, getters}) {
    if (!state.settings.github) {
      return
    }

    const options = {}
    if (this.$config.githubToken) {
      options.headers = {Authorization: `token ${this.$config.githubToken}`}
    }
    let releases = []
    try {
      const data = await fetch(getters.githubURLs.api.releases, options)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.statusText)
          }
          return res
        })
        .then(res => res.json())
      releases = data
        .filter(r => !r.draft)
        .map(release => {
          return {
            name: (release.name || release.tag_name).replace('Release ', ''),
            date: release.published_at,
            body: this.$markdown(release.body),
          }
        })
    } catch (e) {}

    const getMajorVersion = r => r.name && Number(r.name.substring(1, 2))
    releases.sort((a, b) => {
      const aMajorVersion = getMajorVersion(a)
      const bMajorVersion = getMajorVersion(b)
      if (aMajorVersion !== bMajorVersion) {
        return bMajorVersion - aMajorVersion
      }
      return new Date(b.date) - new Date(a.date)
    })

    commit('SET_RELEASES', releases)
  },
  async fetchDefaultBranch({commit, state, getters}) {
    if (!state.settings.github || state.settings.defaultBranch) {
      return
    }

    const options = {}
    if (this.$config.githubToken) {
      options.headers = {Authorization: `token ${this.$config.githubToken}`}
    }
    let defaultBranch
    try {
      const data = await fetch(getters.githubURLs.api.repo, options)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.statusText)
          }
          return res
        })
        .then(res => res.json())
      defaultBranch = data.default_branch
    } catch (e) {}

    commit('SET_DEFAULT_BRANCH', defaultBranch || 'main')
  },
  async fetchSettings({commit}) {
    try {
      const {
        dir,
        extension,
        path,
        slug,
        to,
        createdAt,
        updatedAt,
        ...settings
      } = await this.$content('settings').fetch()

      commit('SET_SETTINGS', settings)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(
        'You can add a `settings.json` file inside the `content/` folder to customize this theme.',
      )
    }
  },
  createEvent({commit}, event) {
    return commit('CREATE_EVENT', event)
  },
  updateEvent({commit}, updatedEvent) {
    return commit('UPDATE_EVENT', updatedEvent)
  },
  deleteEvent({commit}, eventId) {
    return commit('DELETE_EVENT', eventId)
  },
  setweekendsVisible({commit}, enabled) {
    return commit('SET_WEEKENDS_ENABLED', enabled)
  },
}
