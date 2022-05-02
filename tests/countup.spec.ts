import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3001')
})

test('test', async () => {
  expect(1).toBe(1)
})
