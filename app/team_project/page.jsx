'use client'

import Link from 'next/link'
import React from 'react'

const file = '/ppt_file/team_project_plan.pdf'

const handleClick = () => {
  window.open(file)
}

const Button = () => {
  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-800 
      font-semibold border border-gray-400 rounded shadowrounded-full py-2 px-4"
      onClick={handleClick}
    >
      팀프로젝트 ppt 열기
    </button>
  )
}

export default function page() {
  return (
    <div>
      <h1 className="text_header">ZPG SHOP 프로젝트</h1>

      <ul className="text_p">
        설명 : 온라인쇼핑몰을 기획했으며 팀명은 ZPG입니다. <br />
        zzamppong처럼 여러가지 다양한 기능들을 구현하여 합치려는 취지로
        ZPG입니다. <br />
        구경섭, 송명석, 안서진, 이지원, 최중건이 팀입니다. <br />
        백앤드 3명과 프론트 2명으로 나누어서 프로젝트를 진행할 계획입니다.
        <br />
        <br />
      </ul>

      <ul className="text_p hover:bg-slate-300">
        <Link href="">홈페이지 :</Link>
      </ul>
      <ul className="text_p hover:bg-slate-300">
        <Link href={'https://github.com/kks0509/ex'}>
          github : https://github.com/kks0509/ex
        </Link>
      </ul>
      <br />

      <Button />
      {/* <button className="" onClick={handleClick}>
        팀프로젝트 pdf보기
      </button> */}
    </div>
  )
}
