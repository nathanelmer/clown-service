
import { ClownService } from "./ClownService.js"
import { fetchClowns, fetchCompletions, fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchCompletions())
    .then(() => fetchClowns())
    .then(() => {
        mainContainer.innerHTML = ClownService()
    }
    )

      
}

render()

document.addEventListener("stateChanged", customEvent => {
    render()
})