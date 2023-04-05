import {renderHook} from '@testing-library/react'
import { useCounter } from './useCounter'
import { act } from 'react-dom/test-utils'

describe('useCounter', ()=>{

  test('Should render the initial count', ()=>{
    const {result} = renderHook(useCounter)
   expect(result.current.count).toBe(0);
  })

  test('Should accept and render the same initial count', ()=>{
    const {result} = renderHook(useCounter, {
      initialProps: {initialCount: 10}
    })
    expect(result.current.count).toBe(10)
  })

  test('Should increment the count', ()=>{
    const {result} = renderHook(useCounter)
    act(()=> result.current.increment())
    expect(result.current.count).toBe(1)
  })

  test('Should decrement the count', ()=>{
    const {result} = renderHook(useCounter)
    act(()=> result.current.decrement())
    expect(result.current.count).toBe(-1)
  })
})