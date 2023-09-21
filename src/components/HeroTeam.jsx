// import {createContext, useContext, ReactNode} from "react";
// // Import hooks
// import {useParams} from "react-router-dom"

// // Import utils
// import {fetchHero} from "../utils/utils"

// type HeroTeamProviderProps = {
//     children: ReactNode
// }

// type HeroTeamContext = {
//     getHero: (id: number) => number
//     addHero: (id: number) => void
//     removeHero: (id: number) => void

// }

// type Hero = {
//     id: number
// }

// const HeroTeamContext = createContext({})

// export function useHeroTeam(){
//     return useContext(HeroTeamContext)
// }


// export function HeroTeamProvider({children} : HeroTeamProviderProps){
//     let {id} = useParams();
//     const [heroes, setHeroes] = useState<HeroTeam[]>([])

//     useEffect(() => {
//         fetchHero(id).then(data => setHero(data[0])).catch(err => console.error(err))
//     }, []);

//     if (!hero) return

//     function getHero(id: number){
//         return hero.id; 
//     }

//     function addHero(id: number){

//     }

//     function removeHero(){

//     }

//     return (
//         <HeroTeamContext.Provider value={{}}>
//             {children}
//         </HeroTeamContext.Provider>
//         )
//     }