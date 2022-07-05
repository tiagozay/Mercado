class ProxyFactory 
{
    static create(objeto, props, acao){

        return new Proxy(objeto, {

            get(target, prop, receiver)
            {

                if(props.includes(prop) && typeof(target[prop]) == 'function'){

                    return function()
                    {
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }   

                }

                return Reflect.get(target, prop, receiver);

            },

            set(target, prop, value, receiver)
            {
                if(props.includes(prop))
                {
                    target[prop] = value;
                    return acao(target);
                }

                Reflect.set(target, prop, value, receiver);
            }

        });
    }
}