import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import packageInfo from '../package.json'
import {useState} from "react";

const Home: NextPage = () => {

  const [roxy, setRoxy] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>你的日记 API Server</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/roxy.svg" />
      </Head>

      <main className={styles.main}>

        <div className={styles.grid}>
          <div className={styles.card} onClick={() => setRoxy(!roxy)}>
            <Image src={`/roxy${roxy ? '_outline' : ''}.svg`} width={200} height={200} alt={'roxy'}/>
            <h1>nideriji-api-server</h1>
            <p>你的日记 Web API 第三方代理服务器</p>
            <br/>
            <p>Powered by <a href={'https://nextjs.org'}>Next.js</a></p>
          </div>

          <div className={styles.sub_grid}>
            <div className={styles.card}>
              <p>
                <h2>依赖信息</h2>
                本项目所使用的 nideriji-api 版本：<br/><br/>
                <code className={styles.code}>
                  {`${packageInfo.dependencies["nideriji-api"]}`}
                </code>
              </p>
            </div>

            <div className={styles.card}>
              <h2>参照</h2>
              <p>
                <a href={'https://github.com/ymd45921/NiderijiApi'} className={styles.hover}>
                  Github
                </a>
                &nbsp;·&nbsp;
                <a href={'https://www.postman.com/nnm-shiraha/workspace/public-workspace/collection/20443049-aa93614f-d3b6-4a20-949c-0593de1ad60a?action=share&creator=20443049'} className={styles.hover}>
                  Postman
                </a>
                &nbsp;·&nbsp;
                <a href={'https://www.npmjs.com/package/nideriji-api'} className={styles.hover}>
                  npm
                </a>
              </p>
            </div>

            <div className={styles.card}>
              <p>
                部署于&nbsp;
                <Image src={'/vercel.svg'} width={72} height={16} alt={'Vercel'}/>
              </p>
            </div>
          </div>

        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>版本信息</h2>
            <p>{`${packageInfo.version}`}</p>
          </div>

          <div className={styles.card}>
            <h2>友情链接</h2>
            <p><a href={'https://webify.cloudbase.net/'}>CloudBase Webify</a> 提供网站托管服务</p>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
