import Link from "next/link"
import { BlogList } from "../components/blogs"
import { PortfolioList } from "../components/portfolios"
import { BaseLayout } from "../components/layout"
import { getBlogFileNames, getBlog } from "../lib/md"
import { GetStaticProps } from "next"
import { join } from "path"

const Home = () => {
  return (
    <BaseLayout>
      <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
        Newest Blogs
        <Link legacyBehavior href='/blogs'>
          <a className='text-sm ml-1 text-indigo-600'>(See All)</a>
        </Link>
      </h2>

      <BlogList />

      <br></br>

      <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
        Portfolios
        <Link legacyBehavior href='/portfolios'>
          <a className='text-sm ml-1 text-indigo-600'>(See All)</a>
        </Link>
      </h2>

      <PortfolioList />
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const blogFileNames = getBlogFileNames()

  blogFileNames.forEach((blogFileName) => {
    const blogContent = getBlog(blogFileName)
    console.log(blogContent)
  })

  return {
    props: {},
  }
}

export default Home
