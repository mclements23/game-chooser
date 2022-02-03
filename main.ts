scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile0, function (sprite, location) {
    myCorg.bark()
    game.over(false)
    pause(1000)
    game.reset()
})
function startCorgi () {
    myCorg = corgio.create(SpriteKind.Player)
    myCorg.updateSprite()
    myCorg.horizontalMovement()
    myCorg.verticalMovement()
    myCorg.follow()
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanDepths11, function (sprite, location) {
    myCorg.bark()
    game.over(false)
    pause(1000)
    game.reset()
})
function changeLevel (levelNum: number) {
    if (levelNum == 1) {
        tiles.setTilemap(tilemap`level1`)
        scene.setBackgroundColor(9)
        tiles.placeOnRandomTile(myCorg.sprite, sprites.builtin.forestTiles22)
        game.splash("Level 1")
    } else if (levelNum == 2) {
        game.splash("Level 2")
        scene.setBackgroundColor(8)
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnRandomTile(myCorg.sprite, sprites.builtin.oceanDepths1)
    } else {
        game.splash("Level 3")
        scene.setBackgroundColor(15)
        tiles.setTilemap(tilemap`level4`)
        tiles.placeOnRandomTile(myCorg.sprite, sprites.builtin.crowd0)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    changeLevel(2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    changeLevel(3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    myCorg.bark()
    game.over(false)
    pause(1000)
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    myCorg.addToScript("bark")
    game.over(true, effects.confetti)
})
let myCorg: Corgio = null
startCorgi()
changeLevel(1)
