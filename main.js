`use strict`

var gQuests
var gNextId
var gCurrQuestIdx

function onInit() {
    gCurrQuestIdx = 0
    gNextId = 01
    createQuests()
    renderQuest()
}

function createQuests() {
    gQuests = [
        { id: 01, opts: ['Friends', 'Seinfeld'], correctOptIndex: 0 },
        { id: 02, opts: ['Beverly Hills 90210', 'That 70\'s Show'], correctOptIndex: 1 },
        { id: 03, opts: ['Family Matters', 'Fresh Prince Of Bel Air'], correctOptIndex: 1 }
    ]
}

function renderQuest() {
    var strHTML = ''
    const currQuest = gQuests[gCurrQuestIdx]
    const opts = currQuest.opts
    const elBtns = document.querySelector('.btns')

    for (var i = 0; i < opts.length; i++) {
        const currOpt = opts[i]
        strHTML += `<button class="btn" onclick="checkAnswer(${i},this)">${currOpt}</button>`
    }
    elBtns.innerHTML = strHTML
    const elImg = document.querySelector('.question-img')
    elImg.src = `img/${currQuest.id}.jpg`
}

function checkAnswer(optIdx, elBtn) {
    const currQuest = gQuests[gCurrQuestIdx]
    const correctOptIdx = currQuest.correctOptIndex
    if (correctOptIdx === optIdx) {
        elBtn.style.backgroundColor = 'green'
        setTimeout(() => {
            gCurrQuestIdx++
            if (gCurrQuestIdx === gQuests.length) return finishGame()
            else renderQuest()
        }, 1000);
    }
    else {
        elBtn.style.backgroundColor = 'red'
    }
}

function finishGame() {
    hideElement('.main-container')
    showElement('.start-btn')
    

}



function restartGame() {
    showElement('.main-container')
    hideElement('.start-btn')
    onInit()
}
















function hideElement(selector) {
    const el = document.querySelector(selector)
    el.classList.add('hidden')
}

function showElement(selector) {
    const el = document.querySelector(selector)
    el.classList.remove('hidden')
}
