function validateResponse(response){
    if (!response.ok){
        throw new Error("There was some error with request",response.error)
    }
    return response
}