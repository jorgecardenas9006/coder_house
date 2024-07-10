class MenuController {
  constructor() {
    this.model = new MenuModel();
  }

  async getMenu() {
    const menu = await this.model.getMenu();
    return menu;
  }
}