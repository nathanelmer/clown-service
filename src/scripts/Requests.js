import { deleteRequest, getRequests } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", (click) => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))    
    } else if (click.target.id.startsWith("completeRequest--")){
        click.target.classList.add("completed")
    }
})


const requestToHtml = (newRequest) => {
    return `<li class="request"> Request #${newRequest.id} <b>Parent:</b> <u>${newRequest.parent}</u> <b>Child:</b> <u>${newRequest.child}</u> <b>Number of kids:</b> <u>${newRequest.numOfKids}</u>
    <b>Address:</b> <u>${newRequest.address}</u> <b>Time length:</b> <u>${newRequest.timeLength}</u> hours <b>Date:</b> <u>${newRequest.date}</u>
    <button class="requestDelete" id="request--${newRequest.id}">Delete</button>
    <button id="completeRequest--${newRequest.id}">Complete</button>
    </li>`
}

export const Requests = () => {
    const requests = getRequests()

    let html = "<ul>"
        const requestList = requests.map(request => requestToHtml(request))

    html += requestList.join("")
    html += "</ul>"
    return html
}