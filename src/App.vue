<template>
    <div class="p-grid">
      <div class="p-col-6 p-offset-3">
        <div class="p-d-flex p-jc-between">
          <div > <img src="./assets/logo_header.png"/></div>
          <div ><h3 class="hello"> Single Page App Test </h3> </div>
          <div ><h4 class="hello"> 
            <label>Hello</label>
            <label v-if="name">, {{name}}</label>
           </h4> </div>
      </div>
       
        
        
        <TabMenu :model="items" />
        <router-view />
      </div>
    </div>
</template>

<script>
import jwt_decode from "jwt-decode";
export default {
    mounted(){
      const tokenName = "#token="
      const hash = window.location.hash;
      // const loginUrlPrefix = "http://tonyxx.idf.cc:8090/ssorest/service/oauth/authorize?response_type=token&client_id=clientapp&state=Lk9hVVNydWVQRlA4WTZDfmtKU0Y4ODVNMUxFaGl1OHcxLUt3N2prVFk4R0RU&scope=openid&redirect_uri=";
      // const jwt = localStorage.getItem("jwt");
      if (hash && hash.indexOf(tokenName)>=0){ 
        // if there is token in the query string, just set that , and then bring the route without the token. 
        const token = hash.replace(tokenName, "").split("&")[0];
        localStorage.setItem("jwt", token);
        this.$router.push(this.$route.path);

        // and for each new token set, we need to retrieve user info as well. 
        const decoded = jwt_decode(token);
        localStorage.setItem("sub", decoded.sub);
        this.name = decoded.sub;

      } 
      // else if (!jwt) { // if we dont have jwt, directly bring the page to authentication. 
      //   localStorage.clear();
      //   window.location.href=loginUrlPrefix+encodeURIComponent(window.location.href);
      // }
    },
    data() {
        return {
            name:null, 
            items: [
                {
                    label: 'Home', 
                    icon: 'pi pi-fw pi-home', 
                    to: '/'
                },
                 {
                    label: 'Public Content', 
                    icon: 'pi pi-fw pi-volume-up', 
                    to: '/public'
                },
                 {
                    label: 'Protected Get', 
                    icon: 'pi pi-fw pi-key', 
                    to: '/protected/get'
                },
                 {
                    label: 'Protected Put', 
                    icon: 'pi pi-fw pi-lock', 
                    to: '/protected/put'
                },
                 {
                    label: 'Admin Get', 
                    icon: 'pi pi-fw pi-user', 
                    to: '/protected/admin'
                },
                 {
                    label: 'Logout', 
                    icon: 'pi pi-fw pi-sign-out',
                    to: '/logout'
                },

            ]
        }
    }
}
</script>

<style scoped lang="scss">
::v-deep(.tabmenudemo-content) {
    padding: 2rem 1rem;
}
</style>