import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className="text_header">HTML 프로젝트</h1>
      <ul className="text_p hover:bg-slate-300">
        <Link href="https://main--aesthetic-piroshki-010e7d.netlify.app/about">
          홈페이지 : https://main--aesthetic-piroshki-010e7d.netlify.app/about{' '}
          <br />
        </Link>
      </ul>

      <ul className="text_p hover:bg-slate-300">
        <Link href="https://github.com/JoongBuGit/school_html_project">
          깃허브 : https://github.com/JoongBuGit/school_html_project
        </Link>
      </ul>
    </div>
  )
}
