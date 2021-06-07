package com.lfmteixeira.models

import kotlinx.io.core.BytePacketBuilder
import kotlinx.io.core.ByteReadPacket
import kotlinx.io.core.readBytes

enum class Form {
    OVAL,
    RECTANGLE,
    WAVE;

    companion object {
        private val map = values().associateBy(Form::ordinal)
        fun fromInt(type: Int) = map[type]!!
    }
}

enum class Filling {
    EMPTY,
    FILLED,
    HALF_FILLED;

    companion object {
        private val map = values().associateBy(Filling::ordinal)
        fun fromInt(type: Int) = map[type]!!
    }
}

enum class Color {
    RED,
    GREEN,
    BLUE;

    companion object {
        private val map = values().associateBy(Color::ordinal)
        fun fromInt(type: Int) = map[type]!!
    }
}

data class Card(
    val number: Int,
    val form: Form,
    val filling: Filling,
    val color: Color) {
    constructor(byteArray: ByteArray): this(ByteReadPacket(byteArray))
    constructor(reader: ByteReadPacket): this(
            number = reader.readInt(),
            form = Form.fromInt(reader.readInt()),
            filling = Filling.fromInt(reader.readInt()),
            color = Color.fromInt(reader.readInt())
    )

    fun buildBytes(builder: BytePacketBuilder) {
        builder.writeInt(number)
        builder.writeInt(form.ordinal)
        builder.writeInt(filling.ordinal)
        builder.writeInt(color.ordinal)
    }

    fun toByteArray(): ByteArray {
        val builder = BytePacketBuilder()
        buildBytes(builder)
        return builder.build().readBytes()
    }

    override fun toString(): String {
        return "$number, $form, $color, $filling"
    }
}

fun toByteArray(cards: List<Card>): ByteArray {
    val builder = BytePacketBuilder()
    cards.forEach { it.buildBytes(builder) }
    return builder.build().readBytes()
}

fun toCards(byteArray: ByteArray): List<Card> {
    val cards = ArrayList<Card>()
    val reader = ByteReadPacket(byteArray)
    while (reader.canRead()) {
        cards.add(Card(reader))
    }
    return cards
}