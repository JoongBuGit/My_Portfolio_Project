import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className="text_header">쇼핑몰 프로젝트</h1>
      <div>쇼핑몰 프로젝트입니다.</div>
      <br />

      <img width={500} src="/img/img3.png"></img>

      <ul className="text_p hover:bg-slate-300">
        <Link href="https://school-shopping-project-qfpr.vercel.app/">
          홈페이지 : https://school-shopping-project-qfpr.vercel.app/
        </Link>
      </ul>
      <ul className="text_p hover:bg-slate-300">
        <Link href="https://github.com/JoongBuGit/school_shopping_project">
          깃허브 : https://github.com/JoongBuGit/school_shopping_project
        </Link>
      </ul>
    </div>
  )
}
