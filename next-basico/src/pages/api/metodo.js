const metodo = (req, res) => {
    if(req.method === "GET") {
        res.status(200).json({ nome: "Pedro" })
    } else {
        res.status(200).json({ nome: "Maria" })
    }
}

export default metodo