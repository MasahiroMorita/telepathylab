
import { Timecode } from '../timecode'

describe('Timecode', ()=> {
  it('construct from timecode string', ()=> {
    let timecode = new Timecode('11:22:33:12', 'PAL')
    expect(timecode.standard).toEqual('PAL')
    expect(timecode.hours).toEqual(11)
    expect(timecode.minutes).toEqual(22)
    expect(timecode.seconds).toEqual(33)
    expect(timecode.frames).toEqual(12)
  })

  it('construct from timecode object', ()=> {
    let timecode = new Timecode({
      hours: 11,
      minutes: 22,
      seconds: 33,
      frames: 12,
    }, 'PAL')
    expect(timecode.standard).toEqual('PAL')
    expect(timecode.hours).toEqual(11)
    expect(timecode.minutes).toEqual(22)
    expect(timecode.seconds).toEqual(33)
    expect(timecode.frames).toEqual(12)
  })

  it('toString timecode', ()=> {
    let timecode = new Timecode('11:22:33:12', 'PAL')
    expect(timecode.toString()).toEqual('11:22:33:12')
  })

  it('add timecode', ()=> {
    let timecode1 = new Timecode('11:22:33:12', 'PAL')
    let timecode2 = new Timecode('11:22:33:22', 'PAL')
    let timecode3 = timecode1.add(timecode2)
    expect(timecode3.standard).toEqual('PAL')
    expect(timecode3.hours).toEqual(22)
    expect(timecode3.minutes).toEqual(45)
    expect(timecode3.seconds).toEqual(7)
    expect(timecode3.frames).toEqual(9)
  })

  it('add timecode (2)', ()=> {
    let timecode1 = new Timecode('00:00:00:00', 'PAL')
    let timecode2 = new Timecode('00:00:33:22', 'PAL')
    let timecode3 = timecode1.add(timecode2)
    expect(timecode3.standard).toEqual('PAL')
    expect(timecode3.hours).toEqual(0)
    expect(timecode3.minutes).toEqual(0)
    expect(timecode3.seconds).toEqual(33)
    expect(timecode3.frames).toEqual(22)
  })

  it('subtract timecode', ()=> {
    let timecode1 = new Timecode('11:22:33:12', 'PAL')
    let timecode2 = new Timecode('01:32:43:22', 'PAL')
    let timecode3 = timecode1.subtract(timecode2)
    expect(timecode3.standard).toEqual('PAL')
    expect(timecode3.hours).toEqual(9)
    expect(timecode3.minutes).toEqual(49)
    expect(timecode3.seconds).toEqual(49)
    expect(timecode3.frames).toEqual(15)
  })

  it('subtract timecode (2)', ()=> {
    let timecode1 = new Timecode('00:00:33:12', 'PAL')
    let timecode2 = new Timecode('00:00:00:00', 'PAL')
    let timecode3 = timecode1.subtract(timecode2)
    expect(timecode3.standard).toEqual('PAL')
    expect(timecode3.hours).toEqual(0)
    expect(timecode3.minutes).toEqual(0)
    expect(timecode3.seconds).toEqual(33)
    expect(timecode3.frames).toEqual(12)
  })
})
