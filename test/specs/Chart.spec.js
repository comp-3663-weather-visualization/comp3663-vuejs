import { mount } from '@vue/test-utils'
import test from 'ava'
import Chart from '../../components/Chart.vue'

let wrapper

test.beforeEach(() => {
  wrapper = mount(Chart, {
    propsData: {
    }
  })
})

test('is a Vue instance', (t) => {
  const wrapper = mount(Chart)
  t.is(wrapper.isVueInstance(), true)
})

test('Chart.vue snapshot', (t) => {
  t.snapshot({ html: wrapper.html() })
})

test('Chart.vue to display chart', (t) => {
  const $chart = wrapper.find('.chartjs-size-monitor')

  t.is(!!$chart, true)
})
