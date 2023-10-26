import {getWikiResults} from "@/lib/getWikiResults";
import Item from "./components/Item";

type Params = {
    params: {searchTerm: string}
}

export async function generateMetadata({params: {searchTerm}} : Params){
    const data : Promise<SearchResults> = getWikiResults(searchTerm);
    const wikiResults = await data;
    const displayTerm = searchTerm.replaceAll('%20', ' ');
    if(!wikiResults?.query?.pages){
        return {
            title: `${displayTerm} Not Found`
        }
    }
    else {
        return {
            title: displayTerm,
            description: `Results for ${displayTerm}`
        }
    }
}

export default async function SearchTerm({params: {searchTerm}} : Params){
    const data : Promise<SearchResults> = getWikiResults(searchTerm);
    const wikiResults = await data;
    const results : Result[] | undefined = wikiResults?.query?.pages;

    const content = (
        <main className="mx-auto max-w-2xl bg-slate-200 py-4 min-h-screen break-words mt-2">
            {results?
                Object.values(results).map(result => {
                    return(
                        <Item key={result.pageid} result={result} />
                    )
                }) :
                <h2 className="text-xl p2 text-red-500">There was no results for: {searchTerm}</h2>
            }
        </main>
    )

    return content
}