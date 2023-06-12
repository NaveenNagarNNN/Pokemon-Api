// import Type from "./Types"
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import color from '../color.json'
import { toast } from "react-hot-toast";
import axios from "axios";
import { UserContext } from "./Home";
import { BsSearch } from 'react-icons/bs';

// export function Card(props) {
//     const navigate = useNavigate()
//     const [valueAPI, setValueAPI] = useState({
//         name: "",
//         id: 0,
//         type: [{ slot: 0, type: {} }]
//     })
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         fetch(`https://pokeapi.co/api/v2/pokemon/${props.namePokemon}`)
//             .then((e) => { return e.json() })
//             .then((e) => {
//                 setLoading(false)
//                 setValueAPI({
//                     name: e.forms[0].name,
//                     id: e.id,
//                     type: e.types
//                 })
//             })
//     }, [props])


//     let colorTheme = { "background": "" }

//     if (valueAPI.type[0].type.name == "grass") {
//         colorTheme.background = color.theme.colors.grass
//     }
//     else if (valueAPI.type[0].type.name == "ground") {
//         colorTheme.background = color.theme.colors.ground
//     }
//     else if (valueAPI.type[0].type.name == "psychic") {
//         colorTheme.background = color.theme.colors.psychic
//     }
//     else if (valueAPI.type[0].type.name == "fairy") {
//         colorTheme.background = color.theme.colors.fairy
//     }
//     else if (valueAPI.type[0].type.name == "fighting") {
//         colorTheme.background = color.theme.colors.fighting
//     }
//     else if (valueAPI.type[0].type.name == "poison") {
//         colorTheme.background = color.theme.colors.poison
//     }
//     else if (valueAPI.type[0].type.name == "bug") {
//         colorTheme.background = color.theme.colors.bug
//     }
//     else if (valueAPI.type[0].type.name == "rock") {
//         colorTheme.background = color.theme.colors.rock
//     }
//     else if (valueAPI.type[0].type.name == "ghost") {
//         colorTheme.background = color.theme.colors.ghost
//     }
//     else if (valueAPI.type[0].type.name == "steel") {
//         colorTheme.background = color.theme.colors.steel
//     }
//     else if (valueAPI.type[0].type.name == "normal") {
//         colorTheme.background = color.theme.colors.normal
//     }
//     else if (valueAPI.type[0].type.name == "flying") {
//         colorTheme.background = color.theme.colors.flying
//     }
//     else if (valueAPI.type[0].type.name == "fire") {
//         colorTheme.background = color.theme.colors.fire
//     }
//     else if (valueAPI.type[0].type.name == "water") {
//         colorTheme.background = color.theme.colors.water
//     }
//     else if (valueAPI.type[0].type.name == "electric") {
//         colorTheme.background = color.theme.colors.electric
//     }
//     else if (valueAPI.type[0].type.name == "ice") {
//         colorTheme.background = color.theme.colors.ice
//     }
//     else if (valueAPI.type[0].type.name == "dragon") {
//         colorTheme.background = color.theme.colors.dragon
//     }
//     else if (valueAPI.type[0].type.name == "dark") {
//         colorTheme.background = color.theme.colors.dark
//     }

//     return (
//         <>
//             {
//                 loading ? <div className="progress"></div> : (
//                     <div
//                         className="max-w-[256px] w-full h-80 flex flex-col justify-end relative cursor-pointer group"
//                         onClick={() => navigate(`/data/${valueAPI.name}`)}
//                     >
//                         <div
//                             className={`h-1/2 rounded-t-lg`}
//                             style={colorTheme}
//                         >
//                             <img
//                                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${valueAPI.id}.png`}
//                                 className="-translate-y-28 z-30 drop-shadow-md md:group-hover:scale-110 transition"
//                             />
//                         </div>
//                         <div className="min-h-24 bg-white dark:bg-sky-900 px-6 py-3 flex flex-col justify-between gap-y-2 rounded-b-lg shadow-shadow-card">
//                             <div className="flex justify-between items-center">
//                                 <span className="text-2xl font-bold capitalize dark:text-white">{valueAPI.name}</span>
//                                 <span className="text-gray-400 dark:text-white">#{valueAPI.id}</span>
//                             </div>


//                         </div>
//                     </div>
//                 )
//             }
//         </>
//     )
// }

// export function Search(props) {
//     const [pokemon, setPokemon] = useState([])
//     const [inputtext, setInputtext] = useState([])

//     function searchPokemon() {
//         // props.loading(true)
//         (function () {
//             axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=300`)
//                 .then((res) => {

//                     setPokemon(res.data.results);
//                     console.log(pokemon);
//                     // setLoading(false)
//                     // setValueAPI({
//                     //     name: res.name,
//                     //     id: res.id,
//                     //     type: res.types
//                     // })
//                 })
//                 .catch((error) => {
//                     toast.error("There is no Pokemon with this name");
//                     console.log(error)
//                 })
//             // .finally(() => {
//             //     props.loading(false)
//             // })
//         })()

//         // fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//         //     .then((e) => { return e.json() })
//         //     .then((e) => {
//         //         console.log(props.searchPokemon())
//         //         props.searchPokemon([{ name: e.name }])
//         //         setPokemon('')
//         //     })
//         //     .catch((error) => {
//         //         toast.error("There is no Pokemon with this name");
//         //         console.log(error)
//         //     })
//         //     .finally(() => {
//         //         props.loading(false)
//         //     })
//     }

//     return (
//         <div className="w-full flex items-center flex-col my-8 px-6">
//             <div className="flex bg-slate-500">
//                 <input
//                     type="search"
//                     className={`bg-gray-200 px-4 py-3 md:w-96 border-gray-400 rounded-tl-lg rounded-bl-lg focus:outline-none border dark:bg-slate-800 dark:text-white `}
//                     onChange={(e) => { setInputtext(e.target.value.toLowerCase()) }}
//                     onKeyUp={(e) => { e.key === 'Enter' && searchPokemon() }}
//                     value={inputtext}
//                     placeholder="Search here"
//                 />
//                 <button
//                     type="button"
//                     className="hover:bg-blue-700 bg-blue-500 transition rounded-tr-lg rounded-br-lg px-3 text-white font-bold flex-1"
//                     onClick={() => { searchPokemon() }}
//                 >Search</button>
//             </div>

//         </div>
//     )
// }

// export function Search(props) {
//     const pokemonuniv = useContext(UserContext);

//     const [searchInput, setSearchInput] = useState("");
//     // let [pokemon, setPokemon] = useState([]);
//     const handleChange = (e) => {
//         // e.preventDefault();
//         setSearchInput(e.target.value);
//     };
//     console.log(props.searchPokemon())
//     useEffect(() => {
//         var filarr = pokemonuniv.filter((item) => {
//             return item.name.match(searchInput);
//         })

//         // setPokemon(filarr);
//         // console.log(pokemon)
//     }, [searchInput])

//     // console.log(pokemon)


//     // if (searchInput.length > 0) {
//     //     var filarr = pokemon.filter((item) => {
//     //         return item.name.match(searchInput);
//     //     });
//     // }
//     // console.log(filarr)


//     return (
//         <div className="w-full flex items-center flex-col my-8 px-6">
//             <div className="flex bg-slate-500">
//                 <input
//                     type="search"
//                     onChange={handleChange}
//                     className={`bg-gray-200 px-4 py-3 md:w-96 border-gray-400 rounded-tl-lg rounded-bl-lg focus:outline-none border dark:bg-slate-800 dark:text-white `}
//                     // onChange={(e) => { setSearchInput(e.target.value.toLowerCase()) }}
//                     onKeyUp={(e) => { e.key === 'Enter' && Search() }}
//                     value={searchInput}
//                     placeholder="Search here"
//                 />
//                 <button
//                     type="button"
//                     className="hover:bg-blue-700 bg-blue-500 transition rounded-tr-lg rounded-br-lg px-3 text-white font-bold flex-1"
//                     onClick={() => { Search() }}
//                 >Search</button>
//             </div>

//         </div>
//     )



// };

export function Search(props) {
    // const pokemon = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const [searchVal, setSearchVal] = useState("");

    // let [pokemonuniv, setpokemonuniv] = useState([]);

    // useEffect(() => {
    //     (async function () {
    //         await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=300`)
    //             .then((res) => {

    //                 setProducts(res.data.results);
    //                 console.log("working");
    //             })
    //             .catch((error) => {
    //                 // toast.error("There is no Pokemon with this name");
    //                 console.log(error)
    //             })
    //     })()
    // }, [])

    useEffect(function () {
        // console.log("working");
        (function () {
            axios
                .get
                (`https://pokeapi.co/api/v2/pokemon/?limit=1281`)
                // (`https://pokeapi.co/api/v2/pokemon/?offset=${(pageNum - 1) * 20}&limit=20`)
                .then((res) => {
                    setProducts(res.data.results);
                    // console.log(products);
                })
        })()
    }, [])


    function handleSearchClick() {

        if (searchVal === "") { return; }

        const filterBySearch = products.filter((item) => {
            if (item.name.includes(searchVal)) { return item.name; }
        })
        // setProducts(filterBySearch);

        console.log(products)
        console.log((filterBySearch))
        props.searchPokemon(filterBySearch)
        // pokemon = (filterBySearch);
        setSearchVal("")

    }
    // const mystyle = {
    //     marginLeft: "600px",
    //     marginTop: "20px",
    //     fontWeight: "700"
    // };

    // return (
    //     <div>
    //         <div style={mystyle}>
    //             <input onChange={e => setSearchVal(e.target.value)}>
    //             </input>
    //             <BsSearch onClick={handleSearchClick} />
    //         </div>
    //         <div>

    //             {products.map((product) => {
    //                 return (
    //                     <div style={mystyle}>{product}</div>
    //                 )
    //             })
    //             }

    //         </div>
    //     </div>
    // );
    return (
        <div className="w-full flex items-center flex-col my-8 px-6">
            <div className="flex bg-slate-500">
                <input
                    type="search"
                    onChange={e => setSearchVal(e.target.value.toLowerCase())}
                    className={`bg-gray-200 px-4 py-3 md:w-96 border-gray-400 rounded-tl-lg rounded-bl-lg focus:outline-none border dark:bg-slate-800 dark:text-white `}
                    // onChange={(e) => { setSearchInput(e.target.value.toLowerCase()) }}
                    onKeyUp={(e) => { e.key === 'Enter' && handleSearchClick() }}
                    value={searchVal}
                    placeholder="Search here"
                />
                <button
                    type="button"
                    className="hover:bg-blue-700 bg-blue-500 transition rounded-tr-lg rounded-br-lg px-3 text-white font-bold flex-1"
                    onClick={handleSearchClick}
                >Search</button>
            </div>

        </div>
    )
};



