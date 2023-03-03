import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {

  const onGenerateJourney = () => {
    console.log('create journey here...')
  }
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>BTMN - Bootstrap Target Market Now</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold">
          Bootstrap Target Market Now
        </h1>

        <p className="mt-3 text-2xl">
          Create User Journey, SEO Keywords and Social Media Post
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-1" placeholder="Who is your target market?" required />
          <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-1" placeholder="What is your business?" required />
          <div className="flex flex-col space-y-4">
            <button onClick={onGenerateJourney} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Generate User Journey</button>
            <table class="table-auto">
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                </tr>
              </tbody>
            </table>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Generate Keywords</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Generate Blog Post</button>
          </div>
        </div>
        
        <div>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download</span>
          </button>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <div>Stephel Maca</div>
      </footer>
    </div>
  )
}

export default Home