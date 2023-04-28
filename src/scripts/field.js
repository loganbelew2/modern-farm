export let plants = []
export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        for (const plant of seedObj) {
            plants.push(plant)
        }
    } else {
        plants.push(seedObj)
    }
}
export const usePlants = () => {
    return plants.slice();
}
