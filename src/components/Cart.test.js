
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Cart from './Cart.vue'

describe('Cart Component', () => {

  it('menampilkan jumlah barang awal 0', () => {
    const wrapper = mount(Cart)

    expect(
      wrapper.get('[data-testid="quantity"]').text()
    ).toBe('0')
  })

  it('menambah jumlah barang ketika tombol + diklik', async () => {
    const wrapper = mount(Cart)

    const buttons = wrapper.findAll('button')

    await buttons[1].trigger('click')

    expect(
      wrapper.get('[data-testid="quantity"]').text()
    ).toBe('1')
  })

  it('menghitung total belanja dengan benar', async () => {
    const wrapper = mount(Cart)

    const buttons = wrapper.findAll('button')

    await buttons[1].trigger('click')
    await buttons[1].trigger('click')

    expect(
      wrapper.get('[data-testid="total"]').text()
    ).toContain('20000')
  })

  it('tidak mengurangi jumlah barang di bawah 0', async () => {
    const wrapper = mount(Cart)

    const buttons = wrapper.findAll('button')

    await buttons[0].trigger('click')

    expect(
      wrapper.get('[data-testid="quantity"]').text()
    ).toBe('0')
  })

})
