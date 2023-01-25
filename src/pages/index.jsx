import Head from 'next/head'
import { Resume } from './components/Resume';

const Page = props => {
    return (
        <div className="p-12 bg-white">
            <Head>
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>
            <Resume/>
        </div>
    )
}

export default Page;