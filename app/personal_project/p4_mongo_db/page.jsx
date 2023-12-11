import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className="text_header">몽고DB 프로젝트</h1>
      <div>몽고DB를 연동하여 만든 프로젝트 입니다.</div>
      <br />

      <ul className="text_p hover:bg-slate-300">
        <Link href="https://mongo-db-brown.vercel.app/">
          홈페이지 :https://mongo-db-brown.vercel.app/
        </Link>
      </ul>
      <ul className="text_p hover:bg-slate-300">
        <Link href="https://github.com/JoongBuGit/MongoDB">
          깃허브 : https://github.com/JoongBuGit/MongoDB
        </Link>
      </ul>
    </div>
  )
}
