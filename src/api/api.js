const Api = {
    apiUrl: 'https://to-priori-api.herokuapp.com/priori',
    fetchAll: () => fetch(Api.apiUrl),
    fetchById: id => fetch(`${Api.apiUrl}/${id}`),
    fetchToPost: (tarefa) => {
        return fetch(`${Api.apiUrl}/add`, {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(tarefa)
        })
    },

    fetchAndPut: (tarefa, id) => {
        return fetch(`${Api.apiUrl}/${id}/edit`, {
            method: 'PUT',
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(tarefa)
        })
    },

    fetchAndDelete: (id) => {
        return fetch(`${Api.apiUrl}/delete/${id}`, {
            method: 'DELETE'
        })
    }

}


export default Api;