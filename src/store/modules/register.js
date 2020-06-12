import {get,post_json,post} from '@/http/axios'

export default {
  namespaced:true,
  state: {
    
  },
  mutations: {
    
  },
  actions: {
    async getVcode(context,params){
<<<<<<< HEAD
        let res = await get('/customer/getVerCode',params)
        return res
      },
=======
        let res = await get('/customer/getVerCode',{telephone:params})
        return res
    }
>>>>>>> 98078e035f587d93463dfc28804b36333c3c8a80
  }
}