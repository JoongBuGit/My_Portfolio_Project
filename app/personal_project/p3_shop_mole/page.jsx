import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className="text_header">쇼핑몰 프로젝트</h1>
      <ul className="text_p hover:bg-slate-300">
        <Link href="">홈페이지 :</Link>
      </ul>
      <ul className="text_p hover:bg-slate-300">
        <Link href="">깃허브 :</Link>
      </ul>
    </div>
  )
}
