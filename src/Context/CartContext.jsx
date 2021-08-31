import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";

let Cart = createContext();

export let useCart = () => useContext(Cart);
export let CartContext = ({ children }) => {
    let [cartItem, setCartItem] = useState([]);
    let [loading, setLoading] = useState(false);
    let [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                let response = await fetch("/api/products");
                let { products } = await response.json();
                setData(data.concat(products));
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    let [value, dispatch] = useReducer(reduceFxn, { data, cartItem });
    value.data = data;
    return (
        <Cart.Provider
            value={{
                data: data,
                cartItem: value.cartItem,
                setCartItem,
                dispatch,
            }}
        >
            {children}
        </Cart.Provider>
    );
};

let reduceFxn = (state, action) => {
    switch (action.type) {
        case "ADDTOCART":
            return {
                ...state,
                cartItem: state.cartItem.concat(
                    state.data.filter((item) => {
                        return item.id === action.payload.id
                    })
                ),
            };
        case "REMOVEFROMCART":
            return {
                ...state, cartItem: state.cartItem.filter((item) => !(item.id === action.payload.id))
            }
        default:
            return { ...state }
    }
};
