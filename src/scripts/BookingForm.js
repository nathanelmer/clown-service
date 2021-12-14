import { sendRequest } from "./dataAccess.js";

export const BookingForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="serviceParentName">Parent Name</label>
        <input type="text" name="serviceParentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceChildName">Child Name</label>
        <input type="text" name="serviceChildName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceKidNum">Number of kids</label>
        <input type="number" name="serviceKidNum" class="input" />
    </div>
    <div class="field">
        <label class="label" for="serviceAddress">Address</label>
        <input type="text" name="serviceAddress" class="input" />
    </div>
    <div class="field">
    <label class="label" for="serviceDate">Date needed</label>
    <input type="date" name="serviceDate" class="input" />
    </div>
    <div class="field">
    <label class="label" for="serviceLength">Time length of party (hours)</label>
    <input type="number" name="serviceLength" class="input" />
    </div>
    <button class="button" id="submitRequest">Submit Request</button>
`

return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest"){
        const userParent = document.querySelector("input[name='serviceParentName']").value
        const userChild = document.querySelector("input[name='serviceChildName']").value
        const userNumOfKids = document.querySelector("input[name='serviceKidNum']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userLength = document.querySelector("input[name='serviceLength']").value

        const dataForAPI = {
            parent: userParent,
            child: userChild, 
            numOfKids: userNumOfKids, 
            address: userAddress, 
            date: userDate, 
            timeLength: userLength
        }

        sendRequest(dataForAPI)
    }
})