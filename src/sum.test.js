import { describe, it, expect } from 'vitest'

function sum(a, b) {
  return a + b
}

describe('sum function', () => {
  it('should add two positive numbers correctly', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('should add negative numbers correctly', () => {
    expect(sum(-2, -3)).toBe(-5)
  })

  it('should handle zero correctly', () => {
    expect(sum(0, 5)).toBe(5)
  })
})