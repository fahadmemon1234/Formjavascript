var dishes = [
    {
        dish: "Pulao",
        price: 1200,
        img: "https://firebasestorage.googleapis.com/v0/b/authapp-62983.appspot.com/o/images%2Fpulao.jpg?alt=media&token=8a752f85-3051-4cc1-ba99-1b06718744dc",
    },

]

var div = document.getElementsByClassName("container")
for(var i in dishes){
    // console.log(dishes[i])
    var values =    Object.values(dishes[i])
    var img = Object.keys(dishes[i])
    // console.log(values)

    var row = document.createElement("div")
    row.setAttribute("class","row")
    var col = document.createElement("div")
    col.setAttribute("class","col col-lg-3")
    for(var j in values){
        if(img[j]=="img"){
            var img_tag = document.createElement("img")
            img_tag.setAttribute("src",values[j])
            // console.log(img_tag)

            // row.appendChild(img_tag)
            col.appendChild(img_tag)
        }
        else{
            var h1 = document.createElement("h5")
            var textnode = document.createTextNode(values[j])
            h1.appendChild(textnode)
            // console.log(h1)
            col.appendChild(h1)
            // row.appendChild(img_tag)

        }
    }
    row.appendChild(col)
    console.log(row)
    div[0].appendChild(row)

}