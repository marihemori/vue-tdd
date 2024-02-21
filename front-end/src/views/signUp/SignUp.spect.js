const { render, screen } = require('@testing-library/vue')
import SignUp from './SignUp.vue'

describe('Sign up', () => {
  it('has sign up header', () => {
    render(SignUp)
    const header = screen.getByRole('heading', { name: 'Sign up' })
    expect(header).toBeInTheDocument()
  })
})
