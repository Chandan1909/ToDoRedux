import todo from './todoresources-routes.js';
//The base url
export default (app)=>{
    app.use('/',todo);
}