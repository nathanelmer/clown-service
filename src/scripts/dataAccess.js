const appState = {
    requests: [],
    completions: [],
    clowns: []
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

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
    .then(res => res.json())
    .then(
        (partyCompletions) => {
            appState.completions = partyCompletions
        }
    )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
    .then(res => res.json())
    .then(
        (clowns) => {
            appState.clowns = clowns
        }
    )
}

export const getRequests = () => {
    fetchRequests()
    return appState.requests.map(request => ({...request}))
}

export const getCompletions = () => {
    fetchCompletions()
    return appState.completions.map(comp => ({...comp}))
}

export const getClowns = () => {
    fetchClowns()
    return appState.clowns.map(clown => ({...clown}))
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
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const sendCompletions = (completion) => {
    const fetchOptions = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(completion)
    }

    return fetch(`${API}/completions`, fetchOptions)
        .then(res => res.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const completeRequest = (id) => {
  const newCompletion = {
      date: appState.requests[(id-1)].date,
      timeLength: appState.requests[(id-1)].timeLength,
      parent: appState.requests[(id-1)].parent,
      child: appState.requests[(id-1)].child,
      numOfKids: appState.requests[(id-1)].numOfKids,
      address: appState.requests[(id-1)].address,
      clowns: appState.requests[(id-1)].clown 
  }
  sendCompletions(newCompletion)
  deleteRequest(id)
}

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, {method: "DELETE" })
        .then( 
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}



