// describe('My Login application', () => {
//     it('should login with valid credentials', () => {
//         browser.url(`https://the-internet.herokuapp.com/login`);

//         $('#username').setValue(username);
//         $('#password').setValue(password);
//         $('button[type="submit"]').click(); 

//         expect($('#flash')).toBeExisting();
//         expect($('#flash')).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });
const { addFeature } = require('@wdio/allure-reporter').default

describe('TestJSSummit Login test', () => {
    it('should be able to login in', () => {
        addFeature('Login')
        browser.url(`/#/login`)
        $('input[type="email"]').setValue('testjssummit@gmail.com')
        $('input[type="password"]').setValue('password')
        $('button[type="submit"]').click()

        expect($('a[href="#@testjssummit"]')).toBeExisting()
    })
  })
