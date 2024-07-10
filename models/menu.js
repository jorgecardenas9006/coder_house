class MenuModel{
    async getMenu() {
        const menu = new DataMenu();
        return menu.menu;
    }
}