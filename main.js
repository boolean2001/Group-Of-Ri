class Ri {
    constructor() {
        this.$ = document.querySelector.bind(document)
        this.render()
        this.RandomColor()
    }
    render() {
        document.title = 'Group__Ri-oc_cho'
        this.$('body').style.background = '#000'
        this.$('#root').innerHTML = this.renderHtml(`Ri oc cho .. lew lew`)
        setInterval(() => {
            this.$('#form').style.color = this.RandomColor()
        }, 500)
    }
    renderHtml(children) {
        const html = `<textarea id='form' style=" text-align : center ; font-size : 2em; display : block; background-color: transparent; border : none;width : 100%; height : 100vh;">
            ${children}
        </textarea>`

        return html
    }
    renderImg() {

    }
    RandomColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        // document.body.style.backgroundColor = "#" + randomColor;
        const color = "#" + randomColor;

        return color
    }
}
const ri = new Ri