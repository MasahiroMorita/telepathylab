
import { renderHook, act } from '@testing-library/react'
import useHooks from '../AddReelItem'

describe('useHook', ()=> {
  let result
  beforeEach(()=> {
    result = renderHook(()=> useHooks()).result
  })

  test('toggleOpen', ()=> {
    act(()=> {
      result.current.toggleOpen()
    })
    expect(result.current.open).toBe(true)
    act(()=> {
      result.current.toggleOpen()
    })
    expect(result.current.open).toBe(false)
  })
})