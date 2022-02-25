import { helloWorld } from '../src'


describe('Teste', () => {
  it('Test index.ts', () => {
    const response = 'Hello World'
    expect(helloWorld()).toBe(response)
  })
})
