package com.lfmteixeira.models

enum class Form {
    OVAL,
    RECTANGLE,
    WAVE
}

enum class Filling {
    EMPTY,
    FILLED,
    HALF_FILLED
}

enum class Color {
    RED,
    GREEN,
    BLUE
}

data class Card(
    val number: Int,
    val form: Form,
    val filling: Filling,
    val color: Color) {}