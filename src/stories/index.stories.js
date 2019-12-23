/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from '../components/MyButton.vue'
import HarunButton from '../components/Harun.vue'

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Fart knocker</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with harun', () => ({
    components: { HarunButton },
    template: '<harun-button @click="action">Hello My name issdfasdf </my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))
storiesOf('Harun', module)
.add('with harun', () => ({
  components: { HarunButton },
  template: '<harun-button @click="action">🚗🚗Hello My name mcfly</my-button>',
  methods: { action: action('clicked') }
}))