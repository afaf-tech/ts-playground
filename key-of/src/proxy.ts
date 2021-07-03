export function proxy(object: any, key: any): any {
    return new Proxy(object, {
        get(target, prop, receiver) {
            
            if(prop === key){
                console.log('getting', key, target[prop]);
            }
            
            return Reflect.get(target, prop, receiver);
        },
        set(target, prop, value, receiver){
            console.log('key', key);
            console.log('object', object);
            if(prop === key){
                console.log('setting', key, value);
                
            }
            return Reflect.set(target, prop, value, receiver)
        }
    })
}