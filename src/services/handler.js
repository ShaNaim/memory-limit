export function generateRandomNumbers(n, s) {
  if (typeof n !== 'number' || typeof s !== 'number') {
    throw new Error('Both n and s must be numbers')
  }
  if (!Number.isInteger(n) || n < 1) {
    throw new Error('n must be an integer ≥ 1')
  }
  if (!Number.isInteger(s) || s < 0 || s > 100) {
    throw new Error('s must be an integer between 0 and 100')
  }
  const result = []
  for (let i = 0; i < n; i++) {
    const randInt = Math.floor(Math.random() * (s + 1))
    result.push(randInt)
  }
  return result
}

export function handleAnswersCheck(userValue, numbers) {
  if (!Array.isArray(userValue) || userValue.length !== numbers.length) {
    return false
  }

  return userValue.every((raw, i) => {
    if (typeof raw !== 'string' || raw.trim() === '') return false
    const parsed = Number(raw)
    return Number.isFinite(parsed) && parsed === numbers[i] + 1
  })
}
