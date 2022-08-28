import { useState, useCallback } from 'react'
import { Timecode } from '../utils/timecode'

const useHooks = ()=> {
  const [items, setItems] = useState([])
  const [name, setName]   = useState('New Reel')
  const [editMode, setEditMode] = useState(false)
  const [standard, setStandard] = useState(undefined)
  const [definition, setDefinition] = useState(undefined)
  const onAddItem = useCallback((item)=> {
      if (items.length === 0) {
        setDefinition(item.definition)
        setStandard(item.standard)
      }
      setItems(items.concat(item))
    }, [items])
  const onRemoveItem = useCallback((i)=> {
      items.splice(i, 1)
      let _items = items.concat()
      setItems(_items)
      if (_items.length === 0) {
        setDefinition(undefined)
        setStandard(undefined)
      }
    }, [items])
  const onChangeName = useCallback((event)=> {
      setName(event.target.value)
    }, [])
  const onKeyPress = useCallback((event)=> {
      if (event.which === 13)
        setEditMode(false)
    }, [])
  const toggleEditMode = useCallback(()=> {
      setEditMode(!editMode)
    }, [editMode])
  const duration = items.reduce((r, _item)=> {
      return Timecode.duration(_item.start, _item.end, _item.standard).add(r)
    }, undefined)

  return {
    items,
    name,
    editMode,
    standard,
    definition,
    setStandard,
    setDefinition,
    setItems,
    setEditMode,
    onAddItem,
    onRemoveItem,
    onChangeName,
    onKeyPress,
    toggleEditMode,
    duration
  }
}

export default useHooks
