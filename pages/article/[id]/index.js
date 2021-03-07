import Link from "next/link"
//import {useRouter} from "next/router"

import articlePageStyle from "../../../styles/SingleArticlePage.module.css"

const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query

    return (
        <>
            <article className={articlePageStyle.article}>
                <h2 className={articlePageStyle.h2}>{article.title}</h2>
                <p>{article.body}</p>
                <br/>
                <Link href="/" className={articlePageStyle.link}>go back</Link>
            </article>
        </>
    )
}

/*with getServerSideProps, every time the user clicks an article on the main page, a new fetch is made and the page is made live. 
must understand if that is better for a very dynamic DB
export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props : { 
            article
        }
    }
}
*/

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props : { 
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params : {"id" : id.toString()}}))

    return {
        paths,
        fallback: false,
    }

}

export default article