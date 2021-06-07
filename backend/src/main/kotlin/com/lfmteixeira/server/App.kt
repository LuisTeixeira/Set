package com.lfmteixeira.server

import com.lfmteixeira.models.Deck
import com.lfmteixeira.models.Player
import com.lfmteixeira.models.toByteArray
import io.javalin.Javalin
import org.eclipse.jetty.websocket.api.Session
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import java.nio.ByteBuffer

val log: Logger = LoggerFactory.getLogger("main")

fun main() {

    val app = Javalin.create().apply {
        exception(Exception::class.java) { e, _ -> log.error("Javalin error", e) }
        error(404) { ctx -> ctx.json("not found") }
    }.start(8080)

    app.config.addStaticFiles("/web")

    val sessionToPlayers = HashMap<Session, Player>()
    val gameState = GameState()

    app.ws("/") { ws ->
        ws.onConnect { session ->
            run {
                log.info("New player connected: ${session.host()}")
                log.info("Cards:")
                gameState.getTwelveCards().forEach{log.info(it.toString())}
                session.session.remote.sendBytes(ByteBuffer.wrap(toByteArray(gameState.getTwelveCards())))
            }
        }
        ws.onBinaryMessage{ context ->
            context.session.remote.sendBytes(ByteBuffer.wrap(toByteArray(gameState.getTwelveCards())))
        }
        ws.onClose { context ->
            val session = context.session
            sessionToPlayers.remove(session)
            log.info("Disconnected: ${session.remoteAddress}")
        }
        ws.onError { context ->
            log.warn("Got Websocket error from: ${context.session.remoteAddress}", context.error())
        }
    }
}