import Image from 'next/image'
import Navbar from './common/Navbar'
export default function Home() {

  return (
    <div>
      <Navbar />
      <main className="">
        <div className="px-[20vw]">
          <h1 className='text-2xl text-lime-500'>$ whoami</h1>
          <div className='flex items-center p-6 pb-[80px] gap-10'>
            <div className=''>
              <Image
                className='rounded-lg'
                src="/selfie.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
              />
            </div>
            <div className='p-6'>
              <h1 className='text-3xl '>Joe Kuroha</h1>
              <h1 className='text-4xl pt-3'>黒羽　晟</h1>
              <h2 className='text-xl pt-3'>University Student / Full-stack engineer</h2>
              <h3 className='text-xl pt-3'>Agent of IPUT-Kernel</h3>
            </div>
          </div>
          <div id="about" className=''>
            <h1 className='text-2xl text-lime-500'>$ man joe</h1>
            <div className='py-6'>
              <p className='text-lg '>
                最近は珍しくもなんともない大学生のフリーランスエンジニアです。<br />
                ウェブアプリケーションの開発からインフラ構築まで、一人で完結できるフルスタック人材です。<br />
                正直なところ人材不足の企業にしか需要のない人間なので、技術スタックが広ければいいってもんでもありません。
              </p>
              <p>普通「じょう」ならJoだろとお考えの方は多いと思いますが、父親がJoeと指定したので、文句は父へお願いします。</p>
            </div>
          </div>

          <h1 className="text-2xl text-lime-500">＞ CREATE TABLE `Bio`</h1>
          <pre className="py-5 font-mono">
            +------------+------------------------+---------------------------------+<br />
            | Date       | Event                  | Description                     |<br />
            +------------+------------------------+---------------------------------+<br />
            | 2002-12-20 | Birth                  | Born in the slum of Sakado      |<br />
            | 2007       | Complete nursery       | Complete East Sakado Nursery    |<br />
            | 2021-03    | high school graduation | Graduate from Yamakoku          |<br />
            | 2021-04    | Joining IPUT           | 1.5M yen is too expensive       |<br />
            | 2022-06    | Make a Contract        | Contract with Cirrus-Ltd        |<br />
            | 2023-10    | Leaved Driving-school  | Acomplished academic laundering |<br />
            +------------+------------------------+---------------------------------+<br />
          </pre>
        </div>
      </main>
    </div>
  )
}
