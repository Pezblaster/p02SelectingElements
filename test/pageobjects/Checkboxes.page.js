import Page from './page.js';

class CheckboxPage extends Page {
/**
     * define selectors using getter methods
     */
get checkbox1 () {
    return $('#checkboxes > input[type=checkbox]:nth-child(1)');
////*[@id="checkboxes"]/input[1]
// //form/input[2]
}
get checkbox2 () {
    return $('#checkboxes > input[type=checkbox]:nth-child(3)');
}
     // a method to encapsule automation code to interact with the page
     // e.g. to login using username and password
     //
    // async checkboxtest (check) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

open () {
    return super.open('checkboxes');
}
}

export default new CheckboxPage();
