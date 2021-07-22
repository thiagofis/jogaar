

(function() {

    $(document).ready(function () {

        var adminMenu = $(".js-admin");
        var loginMenu = $(".js-login");
        var logoutMenu = $(".js-logout");
        
        var login = getCookie("game-login");   
                
        if(login != null){            
            loginMenu.hide();
            logoutMenu.show();

            if(login.toLowerCase() === "admin") {
                adminMenu.show();
            }
            else {
                adminMenu.hide();
            }
        }        
        else {
            adminMenu.hide();
            loginMenu.show();
            logoutMenu.hide();
        }

        

        function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return null;
        }
        
    });
})();


