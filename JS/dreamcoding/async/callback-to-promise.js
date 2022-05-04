class UserStorage{
    loginUSer(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'seowoo' && password ==='12345')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not Found'));
                }
            },2000);
        });
       
    }

    getRoles(user){
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                if(user === 'seowoo'){
                    resolve({name:'seowoo', role:'admin'});
                } else{
                    reject(new Error('no access'));
                }
    
            },1000);
        })
        

    } 
}

const userStorage = new UserStorage();
const id = 'seowoo';
const password = '12345'

userStorage.loginUSer(id, password)
.then(user => userStorage.getRoles(user))
.then(user => console.log(`Hello ${user.name}, you have a ${user.role} role`))
.catch(error => console.log(error));