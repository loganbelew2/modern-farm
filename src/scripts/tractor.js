import { createAsparagus } from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"
import {addPlant, usePlants} from "./field.js"

const cropsObj = 
  {  Asparagus: createAsparagus(),
     Corn: createCorn(),
     Potato: createPotato(),
     Soybean: createSoybean(),
     Sunflower: createSunflower(),
     Wheat: createWheat()
  }

export const plantSeeds = (plan) => {
  for (const row of plan) {
    for (const cropType of row) {
      const seed = cropsObj[cropType]
     if(seed) addPlant(seed)
    }
  }return usePlants()
}

