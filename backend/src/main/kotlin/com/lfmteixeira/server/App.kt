package com.lfmteixeira.server

import com.lfmteixeira.models.Player
import io.javalin.Javalin
import org.eclipse.jetty.websocket.api.Session
import org.slf4j.Logger
import org.slf4j.LoggerFactory

val log: Logger = LoggerFactory.getLogger("main")

fun main() {

    val app = Javalin.create().apply {
        exception(Exception::class.java) { e, _ -> log.error("Javalin error", e) }
        error(404) { ctx -> ctx.json("not found") }
    }.start(8080)

    app.config.addStaticFiles("/web")

    val sessionToPlayers = HashMap<Session, Player>()

    app.ws("/") { ws ->

    }
}