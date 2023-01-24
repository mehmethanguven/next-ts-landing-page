import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Page: NextPage = () => {
  const router = useRouter()
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl rounded-lg p-10">
      <h3 className="text-3xl font-bold capitalize">
        {router.asPath.split('/')} page
      </h3>
    </div>
  )
}

export default Page
