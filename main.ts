sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.magicWand.play()
    music.setVolume(255)
    tiles.setCurrentTilemap(tilemap`niveau4`)
    personnage_1.setPosition(0, 0)
    objectif.setPosition(1015, 1015)
    for (let index = 0; index < 50; index++) {
        pause(100)
        music.spooky.play()
    }
})
let objectif: Sprite = null
let personnage_1: Sprite = null
personnage_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . 1 f f f 1 . . . . . 
    . . . . . . 1 f f f 1 . . . . . 
    . . . . . 1 1 1 f 1 1 1 1 . . . 
    . . . . . 1 f f f f f f 1 . . . 
    . . . . . 1 1 f f 1 1 1 1 . . . 
    . . . . . 1 1 f 1 f 1 1 . . . . 
    . . . . . 1 1 f 1 f 1 1 . . . . 
    . . . . . 1 f f 1 1 f 1 . . . . 
    . . . . . 1 f 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
objectif = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . 8 5 8 . . . . . . . 
    . . . . 8 8 5 5 5 8 . . . . . . 
    . . . 8 8 5 5 5 5 8 8 . . . . . 
    . 8 8 8 5 5 5 1 1 5 8 8 8 . . . 
    . 8 1 1 5 5 5 1 f 5 5 5 8 8 . . 
    . 8 1 5 5 5 5 5 5 5 5 5 5 8 . . 
    . 8 1 1 1 1 5 5 5 5 5 5 5 8 . . 
    . 8 8 8 8 1 1 5 f f 8 8 8 8 . . 
    . . . . 8 8 1 f f 8 8 . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
personnage_1.setPosition(4, 3)
objectif.setPosition(240, 245)
controller.moveSprite(personnage_1, 100, 100)
personnage_1.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`niveau2`)
scene.cameraFollowSprite(personnage_1)
