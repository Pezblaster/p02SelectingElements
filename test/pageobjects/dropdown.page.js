import Page from './page.js'; 



class DropDownPage extends Page {

    get option2(){ return ('#dropdown > option;nth-child(3)')}


    get option1(){ return ('#dropdown > option:nth-child(2)')}
 
    open () {
        return super.open('login');
    }

}
 
export default new DropDownPage();