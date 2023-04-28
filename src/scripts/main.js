import {createPlan} from "./plan.js"
import {plantSeeds} from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalogFunc } from "./catalog.js"
const yearlyPlan = createPlan()

const plantty =plantSeeds(yearlyPlan)
const harvest = harvestPlants(plantty)

const catalog = catalogFunc(harvest)
const element =document.querySelector(".container") 
element.innerHTML = catalog

