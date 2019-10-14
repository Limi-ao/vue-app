import {ActionTree} from 'vuex';
import jwt_decode from 'jwt-decode';

const actions:ActionTree<any,any>={
    async setUser({state,commit},user:any){
        const decode =jwt_decode(user)
        //commit('SET_USER',user);//这个user就是token
        commit('SET_USER',decode);//deocode不是token，是解析之后的token，详细的用户信息
    }
};

export default actions;