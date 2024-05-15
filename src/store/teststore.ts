import {defineStore} from 'pinia'

const useTestStore = defineStore('useteststore',{
    state(){
        return {
            test: [] as any
        }
    },
    getters:{

    },
    actions:{
        addTest(data: any){
            this.test = data
        },
        remove(){
            this.test.token = ''
        }
    },
    persist: true,
})

export default useTestStore