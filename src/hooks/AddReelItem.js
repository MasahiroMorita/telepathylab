import { useState, useCallback } from 'react'

const useHooks = ()=> {
  const [open, setOpen] = useState(false)
  const toggleOpen = useCallback(()=> {
    setOpen(!open)
  }, [open])

  return {
    open,
    toggleOpen
  }
}

export default useHooks