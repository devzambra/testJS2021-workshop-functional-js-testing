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
describe('TestJSSummit Login test', () => {
    it('should be able to login in', () => {
        browser.url(`https://react-redux.realworld.io/#/login`)
        $('input[type="email"]').setValue('testjssummit@gmail.com')
        $('input[type="password"]').setValue('password')
        $('button[type="submit"]').click()

        expect($('a[href="#@testjssummit"]')).toBeExisting()
    })
  })
