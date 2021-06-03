let OnPattern = 0
let snakeX = 0
let snakeY = 0
let OffPattern = 0
let offY = 0
let offX = 0
// ・パターン1
// 左下から順に蛇のようにLEDを点灯
// 
// ・パターン2
// 右上から順に蛇のようにLEDを点灯
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    OnPattern = randint(1, 2)
    if (OnPattern == 1) {
        snakeX = 0
        snakeY = 4
        for (let index = 0; index < 5; index++) {
            led.plot(snakeX, snakeY)
            snakeX += 1
            basic.pause(100)
        }
        snakeY += -1
        for (let index = 0; index < 6; index++) {
            led.plot(snakeX, snakeY)
            snakeX += -1
            basic.pause(100)
        }
        snakeY += -1
        for (let index = 0; index < 6; index++) {
            led.plot(snakeX, snakeY)
            snakeX += 1
            basic.pause(100)
        }
        snakeY += -1
        for (let index = 0; index < 6; index++) {
            led.plot(snakeX, snakeY)
            snakeX += -1
            basic.pause(100)
        }
        snakeY += -1
        for (let index = 0; index < 6; index++) {
            led.plot(snakeX, snakeY)
            snakeX += 1
            basic.pause(100)
        }
    }
    if (OnPattern == 2) {
        snakeX = 4
        snakeY = 0
        for (let index = 0; index < 5; index++) {
            led.plot(snakeX, snakeY)
            snakeX += -1
            basic.pause(100)
        }
        snakeY += 1
        for (let index = 0; index < 6; index++) {
            led.plot(snakeX, snakeY)
            snakeX += 1
            basic.pause(100)
        }
        snakeY += 1
        for (let index = 0; index < 6; index++) {
            led.plot(snakeX, snakeY)
            snakeX += -1
            basic.pause(100)
        }
        snakeY += 1
        for (let index = 0; index < 6; index++) {
            led.plot(snakeX, snakeY)
            snakeX += 1
            basic.pause(100)
        }
        snakeY += 1
        for (let index = 0; index < 6; index++) {
            led.plot(snakeX, snakeY)
            snakeX += -1
            basic.pause(100)
        }
    }
})
// ・パターン1
// 左上から順に、上から下に向けて消灯
// 
// ・パターン2
// 右下から順に、下から上に向けて消灯
// 
// ・パターン3
// 上から下に一斉に消灯
// 
// ・パターン4
// 下から上に一斉に消灯
input.onButtonPressed(Button.B, function () {
    if (led.point(4, 0)) {
        OffPattern = randint(1, 4)
    }
    if (OffPattern == 1) {
        offY = 0
        offX = 0
        for (let offX = 0; offX <= 4; offX++) {
            for (let offY = 0; offY <= 4; offY++) {
                led.unplot(offX, offY)
                basic.pause(100)
            }
        }
    }
    if (OffPattern == 2) {
        offY = 4
        offX = 4
        for (let index = 0; index < 5; index++) {
            for (let index = 0; index < 5; index++) {
                led.unplot(offX, offY)
                basic.pause(100)
                offY += -1
            }
            offX += -1
            offY = 4
        }
    }
    if (OffPattern == 3) {
        for (let offY = 0; offY <= 4; offY++) {
            for (let offX = 0; offX <= 4; offX++) {
                led.unplot(offX, offY)
            }
            basic.pause(100)
        }
    }
    if (OffPattern == 4) {
        offY = 4
        for (let index = 0; index < 5; index++) {
            for (let offX = 0; offX <= 4; offX++) {
                led.unplot(offX, offY)
            }
            basic.pause(100)
            offY += -1
        }
    }
})
