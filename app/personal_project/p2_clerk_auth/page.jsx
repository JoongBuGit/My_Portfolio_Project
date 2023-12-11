import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className="text_header">Clerk Auth 프로젝트</h1>
      <div>로그인과 개인정보 페이지 등을 보여주는 프로젝트입니다.</div>
      <br />
      <ul className="text_p hover:bg-slate-300">
        <Link href="https://school-react-project.vercel.app/">
          홈페이지 : https://school-react-project.vercel.app/
        </Link>
      </ul>
      <ul className="text_p hover:bg-slate-300">
        <Link href="https://github.com/JoongBuGit/school_react_project">
          깃허브 : https://github.com/JoongBuGit/school_react_project
        </Link>
      </ul>
    </div>
  )
}
