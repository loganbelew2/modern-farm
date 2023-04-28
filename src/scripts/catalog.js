export const catalogFunc = (seedArr) => {
    let catalogHTML = ""
    for (const seed of seedArr) {
        catalogHTML += `<section class="plant">${seed.type}</section>`
    }return catalogHTML
}
