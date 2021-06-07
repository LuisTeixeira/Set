package com.lfmteixeira.client

import com.lfmteixeira.models.Card
import com.lfmteixeira.models.toCards
import games.perses.game.DrawMode
import games.perses.game.Game
import games.perses.game.Screen
import games.perses.text.Texts
import org.w3c.dom.WebSocket
import kotlinx.browser.document
import org.khronos.webgl.ArrayBuffer
import org.khronos.webgl.Int8Array
import org.khronos.webgl.Uint8Array
import org.khronos.webgl.get
import org.w3c.dom.ErrorEvent
import org.w3c.dom.MessageEvent
import org.w3c.files.Blob
import org.w3c.files.FileReader

fun main() {
    document.body?.style?.backgroundColor = "#182"

    Game.view.setToWidth(1200f)
    Game.view.drawMode = DrawMode.LINEAR

    Game.view.minAspectRatio = 1200f / 1200f
    Game.view.maxAspectRatio = 1200f / 1200f

    Game.setClearColor(0f, 0f, 0f, 1f)
    val gameScreen = GameScreen()

    gameScreen.webSocket.onmessage = { messageEvent ->
        messageEvent.readBytes { bytes ->
            gameScreen.cards = toCards(bytes)
        }
    }

    gameScreen.webSocket.onerror = {
        if (it is ErrorEvent) {
            val data = it.message
            println("ERROR: $data")
        } else {
            println("UNKNOWN ERROR: ${it.type}")
        }
    }

    Game.start(gameScreen)
}

class GameScreen: Screen() {
    val webSocket = WebSocket("ws://" + document.location?.host)

    var cards: List<Card> = emptyList()

    private var secondsSinceLastSend = 0f

    override fun render() {
        val context = Game.html.canvas2d

        cards.forEachIndexed { i, card ->
            Texts.drawText(
                x = 10f,
                y = 10 + i * 100f,
                message = card.toString(),
                font = "bold 20pt Arial",
                fillStyle = "gray"
            )
        }
    }

    override fun update(time: Float, delta: Float) {
        secondsSinceLastSend += delta

        val secondsBetweenSends = 0.03f
        if (secondsSinceLastSend > secondsBetweenSends) {
            secondsSinceLastSend %= secondsBetweenSends
            val openstate: Short = 1
            if (webSocket.readyState == openstate) {
                val byteArray = emptyArray<Byte>()
                webSocket.send(Int8Array(byteArray.toByteArray().toTypedArray()))
            }
        }
    }
}

private fun MessageEvent.readBytes(onReadDone: (ByteArray) -> Unit) {
    val data: Blob = data as Blob

    val fileReader = FileReader()
    fileReader.addEventListener("loadend", {
        val arrayBuffer = fileReader.result as ArrayBuffer
        val uint8Array = Uint8Array(arrayBuffer)
        val byteArray = ByteArray(uint8Array.byteLength) { index -> uint8Array[index] }

        onReadDone(byteArray)
    })
    fileReader.readAsArrayBuffer(data)
}