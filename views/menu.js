class MenuView {
    constructor() {
        this.controller = new MenuController
    }
    showMenu(){
        let menu = this.getMenu();
        let menuView = document.getElementById('menuDevops');
        menu.then((data) => {
            for (let i = 0; i < data.length; i++) {
                let menuItem = document.createElement('li');
                menuItem.innerHTML = `<a href="${data[i].url}">${data[i].name}</a>`;
                menuView.appendChild(menuItem);
            }
        });
    }
    getMenu(){
        return this.controller.getMenu();
    }
}