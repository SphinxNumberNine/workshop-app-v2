module.exports = app => {
    app.get("/", async (req, res) => {
        res.status(200).json({
            "message": "This is still in development."
        })
    })
}