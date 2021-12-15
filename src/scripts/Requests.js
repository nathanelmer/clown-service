import { deleteRequest, getClowns, getRequests } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", (click) => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }    
  }) 

  const clowns = getClowns()
    
  let clownHTML = () => {
      let html = `<select class="clownOptions">`
      const clownList = clowns.map((c) => {
        return `<option value="${c.id}"/>${c.name}</option>`})
      html += clownList.join("")
      html += `</select>`
      return html
  }
      

  const requestToHtml = (newRequest) => {
    return `<li class="request" id="booking--${newRequest.id}"> Request #${newRequest.id} <b>Parent:</b> <u>${newRequest.parent}</u> <b>Child:</b> <u>${newRequest.child}</u> <b>Number of kids:</b> <u>${newRequest.numOfKids}</u>
    <b>Address:</b> <u>${newRequest.address}</u> <b>Time length:</b> <u>${newRequest.timeLength}</u> hours <b>Date:</b> <u>${newRequest.date}</u>
    <button class="requestDelete" id="request--${newRequest.id}">Delete</button>
    <button id="completeRequest--${newRequest.id}">Complete</button>
    ${clownHTML()}
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