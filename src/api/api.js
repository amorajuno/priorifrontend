const Api = {
apiUrl: 'http://localhost:3005/priori',
fetchAll: () => fetch(Api.apiUrl),
fetchById: id => fetch(`${Api.apiUrl}/${id}`),
fetchToPost: (tarefa) => {
    return fetch(Api.apiUrl, {
        method: 'POST',
        headers: new Headers({
            "Content-Type" : "application/json",
        }),
        body: JSON.stringify(tarefa)
    })
},

}


export default Api;