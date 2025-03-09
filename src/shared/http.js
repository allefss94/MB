export const httpClient = async (url, method, data) => {
    const baseUrl = import.meta.env.VITE_API_URL
    
        const response = await fetch(`${baseUrl}${url}`, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) {
            throw new Error('Erro ao realizar a requisição')
        }

        return response.json()

}