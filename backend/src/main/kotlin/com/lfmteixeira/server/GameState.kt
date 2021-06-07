package com.lfmteixeira.server

import com.lfmteixeira.models.Card
import com.lfmteixeira.models.Deck

class GameState() {

    private val deck: Deck = Deck()
    private val twelveCards: MutableList<Card> = deck.getFirstTwelveCards()

    fun getTwelveCards(): List<Card> {
        return twelveCards.toList()
    }

    fun update(set: List<Card>) {
        if (verifySet(set)) {
            twelveCards.removeAll(set)
            twelveCards.addAll(deck.getNextThree())
        }
    }

    private fun verifySet(set: List<Card>): Boolean{
        return true
    }

}