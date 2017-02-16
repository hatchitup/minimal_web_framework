import cookie from 'js-cookie';

export default class Session {

    exists(){
        if(this.CookieExists() && this.HttpSession()){
            
        }
        return false;
    }

    CookieExists(){
        return cookie.get("app");
    }

    HttpSession(){
        //check session from http using cookie;
        return false;
    }
}