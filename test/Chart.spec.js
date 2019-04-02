import { mount } from '@vue/test-utils'
import Chart from '@/components/Chart.vue'

describe('Chart', () => {
  const wrapper = mount(Chart, {
    propsData: {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            label: '2017',
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            data: Array(12).fill(0),
            fill: false
          },
          {
            label: '2018',
            backgroundColor: '#333',
            borderColor: '#333',
            data: Array(12).fill(0),
            fill: false
          }
        ]
      }
    }
  })
  test('is setup correctly', () => {
    expect(true).toBeTruthy()
  })
  test('has an extends hook', () => {
    expect(typeof Chart.extends).toBe('function')
  })
  test('renders a chart inside a canvas', () => {
    expect(wrapper.find('#line-chart').is('canvas')).toBeTruthy()
  })
})
