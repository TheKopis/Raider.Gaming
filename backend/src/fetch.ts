export default async function getRaiderIOProfile(realm: string, name: string): Promise<JSON | undefined>{
    try{
        const response = await fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=${realm}&name=${name}&fields=mythic_plus_scores_by_season:current`, {
        method: 'GET'
        })

        const json = await response.json()

        return json

    }   catch(e){
        console.log(e)
        return undefined
    }
}

// `https://raider.io/api/v1/characters/profile?region=us&realm=illidan&name=metatanks`