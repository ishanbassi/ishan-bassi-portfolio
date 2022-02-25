export const IOCallback:IntersectionObserverCallback = (entries,  observer) => {
    entries.forEach(entry => {
        entry.target.className = 'test'
    })
}

const observer = new IntersectionObserver(IOCallback, {
    threshold:.5
})
