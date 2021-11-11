async function SendToBack(formData) {
    const response = await fetch(``, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    const data = await response.json()
    return data
}

export { SendToBack }