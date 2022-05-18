// priority: 0
onEvent('recipes', event => {
    event.remove({output: 'backpacked:backpack'})

    event.shaped('backpacked:backpack', [
        'LLL',
        'SIS',
        'LLL'
    ], {
        S: '#forge:string',
        L: '#forge:leather',
        I: '#forge:ingots/iron'
    })
})