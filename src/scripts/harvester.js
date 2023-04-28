export const harvestPlants = (plantsArr) => {
    let harvestedSeeds = []
    for (const plant of plantsArr) {
        if (plant.type !== 'Corn') {
            for (let i = 0; i < plant.output; i++) {
                harvestedSeeds.push(plant)
            }
        } else {
            const plantHalf= plant.output / 2
            for (let i = 0; i < plantHalf; i++) {
                harvestedSeeds.push(plant)
            }
        }
    }
    return harvestedSeeds
}

  