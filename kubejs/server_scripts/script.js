// priority: 0
onEvent('tags.blocks', event => {
    // Fix cold: paxels lite by adding the list of breakable blocks from cucumber lib
    event.add('minecraft:mineable/paxel', ['#minecraft:mineable/pickaxe'])
})