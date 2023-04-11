import CheckboxPage from '../pageobjects/Checkboxes.page.js'


describe('My Checkbox Page', () => {
    it('should select input', async () => {
        await CheckboxPage.open()
        await browser.pause(3000)
        await (CheckboxPage).checkbox1.click()
        await browser.pause(3000)
        await (CheckboxPage).checkbox2.click()
        await browser.pause(3000)
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})


