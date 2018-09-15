module.exports = app => {
    app.get("/test", async (req, res) => {
        res.status(200).json({
            "message": "This is still in development."
        })
    })
}