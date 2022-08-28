
import { renderHook, act } from '@testing-library/react'
import useHooks from '../Reel'

describe('useHook', ()=> {
  let result
  beforeEach(()=> {
    result = renderHook(()=> useHooks()).result
  })

  test('onAddItem', ()=> {
    act(()=> {
      result.current.onAddItem({
        id: 'clip1',
        name: 'Bud Light',
        description: 'A factory is working on the new Bud Light Platinum.',
        standard: 'PAL',
        definition: 'SD',
        start: '00:00:00:00',
        end: '00:00:30:12',
        thumbnail_url: 'https://placedog.net/600/600?id=1',
      })
    })
    expect(result.current.definition).toBe('SD')
    expect(result.current.standard).toBe('PAL')
    expect(result.current.items).toEqual([{
      id: 'clip1',
      name: 'Bud Light',
      description: 'A factory is working on the new Bud Light Platinum.',
      standard: 'PAL',
      definition: 'SD',
      start: '00:00:00:00',
      end: '00:00:30:12',
      thumbnail_url: 'https://placedog.net/600/600?id=1',
    }])
    expect(result.current.duration.toString()).toBe('0:00:30:12')

    act(()=> {
      result.current.onAddItem({
        id: 'clip3',
        name: 'Audi',
        description: 'A group of vampires are having a party in the woods. The vampire in charge of drinks (blood types) arrives in his Audi. The bright lights of the car kills all of the vampires, with him wondering where everyone went afterwards.',
        standard: 'PAL',
        definition: 'SD',
        start: '00:00:00:00',
        end: '00:01:30:00',
        thumbnail_url: 'https://placedog.net/600/600?id=3',
      })
    })    
    expect(result.current.items).toEqual([{
      id: 'clip1',
      name: 'Bud Light',
      description: 'A factory is working on the new Bud Light Platinum.',
      standard: 'PAL',
      definition: 'SD',
      start: '00:00:00:00',
      end: '00:00:30:12',
      thumbnail_url: 'https://placedog.net/600/600?id=1',
    }, {
      id: 'clip3',
      name: 'Audi',
      description: 'A group of vampires are having a party in the woods. The vampire in charge of drinks (blood types) arrives in his Audi. The bright lights of the car kills all of the vampires, with him wondering where everyone went afterwards.',
      standard: 'PAL',
      definition: 'SD',
      start: '00:00:00:00',
      end: '00:01:30:00',
      thumbnail_url: 'https://placedog.net/600/600?id=3',
    }])
    expect(result.current.duration.toString()).toBe('0:02:00:12')
  })

  test('onRemoveItem', ()=> {
    act(()=> {
      result.current.setStandard('SD')
      result.current.setDefinition('PAL')
      result.current.setItems([{
        id: 'clip1',
        name: 'Bud Light',
        description: 'A factory is working on the new Bud Light Platinum.',
        standard: 'PAL',
        definition: 'SD',
        start: '00:00:00:00',
        end: '00:00:30:12',
        thumbnail_url: 'https://placedog.net/600/600?id=1',
      }, {
        id: 'clip3',
        name: 'Audi',
        description: 'A group of vampires are having a party in the woods. The vampire in charge of drinks (blood types) arrives in his Audi. The bright lights of the car kills all of the vampires, with him wondering where everyone went afterwards.',
        standard: 'PAL',
        definition: 'SD',
        start: '00:00:00:00',
        end: '00:01:30:00',
        thumbnail_url: 'https://placedog.net/600/600?id=3',
      }])
    })

    act(()=> {
      result.current.onRemoveItem(1)
    })
    expect(result.current.items).toEqual([{
        id: 'clip1',
        name: 'Bud Light',
        description: 'A factory is working on the new Bud Light Platinum.',
        standard: 'PAL',
        definition: 'SD',
        start: '00:00:00:00',
        end: '00:00:30:12',
        thumbnail_url: 'https://placedog.net/600/600?id=1',
    }])
    expect(result.current.duration.toString()).toBe('0:00:30:12')

    act(()=> {
      result.current.onRemoveItem(0)
    })
    expect(result.current.items).toEqual([])
    expect(result.current.standard).toBe(undefined)
    expect(result.current.definition).toBe(undefined)
    expect(result.current.duration).toBe(undefined)
  })

  test('onChangeName', ()=> {
    act(()=> {
      result.current.onChangeName({
        target: {
          value: 'FOO'
        }
      })
    })
    expect(result.current.name).toBe('FOO')
  })

  test('onKeyPress', ()=> {
    act(()=> {
      result.current.setEditMode(true)
    })
    act(()=> {
      result.current.onKeyPress({
        which: 13
      })
    })
    expect(result.current.editMode).toBe(false)
  })

  test('toggleEditMode', ()=> {
    act(()=> {
      result.current.toggleEditMode()
    })
    expect(result.current.editMode).toBe(true)
    act(()=> {
      result.current.toggleEditMode()
    })
    expect(result.current.editMode).toBe(false)
  })
})