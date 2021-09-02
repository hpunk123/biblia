const { EventEmitter } = require('events')
const { SAVE } = require('./eventNames')
const emitter = new EventEmitter()

emitter.on( SAVE, () =>{
    console.log('On save activated 1 !')
})
emitter.on( SAVE, () =>{
    console.log('On save activated 2 !')
})

emitter.emit('save')
