const appState = {
    requests: []
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(res => res.json())
        .then(
            (partyRequests) => {
                appState.requests = partyRequests
            }
        )
}

export const getRequests = () => {
    fetchRequests()
    return appState.requests.map(request => ({...request}))
}

export const sendRequest = (userRequest) => {
    const fetchOptions = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(userRequest)
    }

    return fetch(`${API}/requests`, fetchOptions)
        .then(res => res.json())
        .then(() => {

        })
}

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, {method: "DELETE" })
        .then( 
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}



