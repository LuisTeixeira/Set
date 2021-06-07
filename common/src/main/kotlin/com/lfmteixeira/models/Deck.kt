package com.lfmteixeira.models

class Deck {

    init {
        val cards = buildDeck()
    }

    private fun buildDeck(): List<Card> {
        val deck = mutableListOf<Card>()
        Filling.values().forEach { filling ->
            Form.values().forEach { form ->
                Color.values().forEach { color ->
                    for (number in 1..3) {
                        deck.add(Card(number, form, filling, color))
                    }
                }
            }
        }
        return deck
    }
}