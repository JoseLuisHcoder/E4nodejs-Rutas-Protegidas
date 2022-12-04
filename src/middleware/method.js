app.use('/example', methodMiddleware, (req, res) => {
    res.status(200).json({message:'example success'})
})

const methodMiddleware = (req, res) => {
    console.log(req.method)
    next()
}