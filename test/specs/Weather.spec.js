import { mount } from '@vue/test-utils'
import test from 'ava'
import Weather from '../../components/Weather.vue'

let wrapper

const location = 'Wolfville'
const title = 'Sunny'
const temp = '21°C'
const time = '11:11'

test.beforeEach(() => {
  wrapper = mount(Weather, {
    propsData: {
      location,
      title,
      temp,
      time
    }
  })
})

test('is a Vue instance', (t) => {
  const wrapper = mount(Weather)
  t.is(wrapper.isVueInstance(), true)
})

test('Weather.vue snapshot', (t) => {
  t.snapshot({ html: wrapper.html() })
})

test('Weather.vue to display weather', (t) => {
  const $temp = wrapper.find('#temp')

  t.is($temp.text(), temp)
})
