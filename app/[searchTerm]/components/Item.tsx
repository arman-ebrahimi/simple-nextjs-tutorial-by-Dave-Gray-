import Link from "next/link";

type Props = {
    result: Result
}
export default function Item({result}: Props){
    const searchTermResult = (
        <article>
            <h2>
                <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" className="text-xl font-bold underline">
                    {result.title}
                </Link>
            </h2>
            <p>{result.extract}</p>
        </article>
    )

    const content = (
        <main className="mb-5 border-b border-b-slate-500 p-3">
            {result.thumbnail?
                <div className="flex flex-col items-center md:flex-row">
                    <div className="mr-3">
                        <img src={result.thumbnail.source} width={result.thumbnail.width} height={result.thumbnail.height} />
                    </div>
                    {searchTermResult}
                </div> :
                searchTermResult
            }
        </main>
    )
    return content
}