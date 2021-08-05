import filter from './http-filter';
import router from './router';

class ApplicationService{
    getProfile(){
        const userInfoUrl = "http://tonyxx.idf.cc:8090/ssorest/service/oauth/userinfo"
        return filter.get(userInfoUrl);
    }
    getPublicContent(){
        return filter.get("/public");
    }
    getSample(){
        return filter.get("/sample");
    }
    putSample(data){
        return filter.put("/sample", data);
    }
    getAdmin(){
        return filter.get("/admin");
    }
    async logout(){
        await filter.get('/logout').then((data)=>{
            if (data)
                localStorage.clear();
                router.push("/logout")
        })
    }
}

export default new ApplicationService();