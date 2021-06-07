package com.lfmteixeira.models

class Deck {
    private val cards: MutableList<Card>

    init {
        cards = buildDeck()
    }

    fun getFirstTwelveCards(): MutableList<Card> {
        val firstTwelve = cards.subList(0, 11).toMutableList()
        cards.removeAll(firstTwelve)
        return firstTwelve
    }

    fun getNextThree(): MutableList<Card> {
        val nextThree = cards.subList(0,2)
        cards.removeAll(nextThree)
        return nextThree
    }

    private fun buildDeck(): MutableList<Card> {
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
        deck.shuffle()
        return deck
    }
}