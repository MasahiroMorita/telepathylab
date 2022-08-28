
function toIntString(n) {
  // converts to a two-digit numeric string with leading zeros.
  return ('00' + String(n)).substr(-2)
}

export class Timecode {
  FPS = {
    PAL: 25,
    NTSC: 30
  }

  constructor(timecode, standard) {
    // timecode can be either a string (ex: '11:22:33:12') or an object with { hours, minutes, seconds, frames }.
    if (typeof timecode == 'string') {
      let elements = timecode.split(':')
      this.hours   = parseInt(elements[0])
      this.minutes = parseInt(elements[1])
      this.seconds = parseInt(elements[2])
      this.frames  = parseInt(elements[3])
    }
    else {
      this.hours   = timecode.hours
      this.minutes = timecode.minutes
      this.seconds = timecode.seconds
      this.frames  = timecode.frames
    }
    this.standard = standard // standard must be either 'PAL' or 'NTSC'.
  }

  toString() { // convert to string format.
    return `${this.hours}:${toIntString(this.minutes)}:${toIntString(this.seconds)}:${toIntString(this.frames)}`
  }

  add(timecode) { // adds timecode value and returns a new instance of Timecode
    if (!timecode)  // if timecode is undefined, return this
      return this
    let new_frames  = this.frames + timecode.frames
    let new_seconds = this.seconds + timecode.seconds + Math.floor(new_frames / this.FPS[this.standard])
    let new_minutes = this.minutes + timecode.minutes + Math.floor(new_seconds / 60)
    let new_hours   = this.hours + timecode.hours + Math.floor(new_minutes / 60)
    new_frames  = new_frames % this.FPS[this.standard]
    new_seconds = new_seconds % 60
    new_minutes = new_minutes % 60
    return new Timecode({
      hours:   new_hours,
      minutes: new_minutes,
      seconds: new_seconds,
      frames:  new_frames,
    }, this.standard)
  }

  subtract(timecode) { // subtracts timecode value and returns a new instance of Timecode
    if (!timecode)  // if timecode is undefined, return this
      return this
    let new_frames  = this.frames - timecode.frames
    let new_seconds = this.seconds - timecode.seconds - Math.floor((this.FPS[this.standard] - 1 - new_frames) / this.FPS[this.standard])
    let new_minutes = this.minutes - timecode.minutes - Math.floor((59 - new_seconds) / 60)
    let new_hours   = this.hours - timecode.hours - Math.floor((59 - new_minutes) / 60)
    new_frames  = (new_frames + this.FPS[this.standard]) % this.FPS[this.standard]
    new_seconds = (new_seconds + 60) % 60
    new_minutes = (new_minutes + 60) % 60
    return new Timecode({
      hours:   new_hours,
      minutes: new_minutes,
      seconds: new_seconds,
      frames:  new_frames,
    }, this.standard)
  }
}
