const express = require('express')
const path = require('path')

const HOST = 'localhost'
const PORT = 8000

const app = express()

// устанавливаем шаблонизатор с помощью которого будут рендериться шаблоны (при res.render)
app.set("view engine", "ejs")

// устанавливаем местонахождение шаблонов для шаблонизатора (вместо дефолтного views)
app.set("views", path.resolve(__dirname, "./templates"))

// Настраиваем раздачу статических файлов по пути /static/,
// указывая директорию в которой лежат статик файлы (public)
app.use("/static/", express.static(path.resolve(__dirname, "./public")))

app.get("/", (req ,res) => {
    res.render("index")
})
app.get("/products", (req, res) => {
    //создаем переменные и передаем данные с помощью context
    const context = {
        products:["product1","product2","product3"]
    }
    //Рендерим шаблон а так же передаем данные для отображения
    res.render("products", context)
})



// ejs - embedded javascript - встроенный JS
// {% for user in users %}
// <p>{{user.name}}</p>


app.listen(PORT, HOST, () => {
    console.log(`Listening on a port http://${HOST}:${PORT}`)
})