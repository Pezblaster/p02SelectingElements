import Page from './page.js'; 

return #dropdown > option;nth-child(3)

class DropDownPage extends Page {

    get option2(){ return ('#dropdown > option;nth-child(3)')}


    open () {
        return super.open('login');
    }

}

export default new DropDownPage();