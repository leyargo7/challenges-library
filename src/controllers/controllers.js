const getIndex = (req, res) => {
    res.render('index')
}

const getClickCounter = (req, res) => {
    res.render('clickCounter')
}

export {getIndex, getClickCounter}