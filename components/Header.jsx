// use client를 안하면 이벤트에서 함수를 넣을 때 에러가 생긴다
'use client'

import Link from 'next/link'
import React from 'react'

// var menu_dropdown_personal_project_var = false

// function open_menu_item() {
//   // menu_dropdown_personal_project_var = true
//   document.getElementById('menu_personal').style.display = 'block'
//   console.log('실행은 되는중')
//   // console.log(
//   //   document.getElementsByClassName('menu_dropdown_personal_project').length
//   // )
// }

// const open_menu_item2 = () => {
//   console.log('실행은 되는중2')
//   document.getElementById('menu_personal').style.display = 'block'
//   // menu_dropdown_personal_project_var = false
// }

const open_menu_item1 = () => {
  document.getElementById('menu_team').style.display = 'block'
}

const close_menu_item1 = () => {
  document.getElementById('menu_team').style.display = 'none'
}

const open_menu_item2 = () => {
  document.getElementById('menu_personal').style.display = 'block'
}

const close_menu_item2 = () => {
  document.getElementById('menu_personal').style.display = 'none'
}

const Header = () => {
  return (
    <nav className="py-5 px-4 bg-red-500 font-bold ">
      <div className="container">
        <Link href={'/'} className="text-white text-xl">
          My Portfolio Project
        </Link>

        <div className="float-right ">
          <div
            className="float-left"
            onMouseOver={open_menu_item1}
            onMouseOut={close_menu_item1}
          >
            <div className="menu_item hover:bg-blue-700">팀 프로젝트</div>

            <ul id="menu_team" className="menu_dropdown_team_project">
              <Link
                href="/team_project"
                className="menu_item hover:bg-blue-700"
              >
                ZPG SHOP
              </Link>
            </ul>
          </div>

          <div
            className=" float-left "
            onMouseOver={open_menu_item2}
            onMouseOut={close_menu_item2}
          >
            <div className="menu_item hover:bg-blue-700">개인 프로젝트</div>

            <div id="menu_personal" className="menu_dropdown_personal_project">
              <ul>
                <Link
                  href="/personal_project/p1_html"
                  className="menu_item hover:bg-blue-700"
                >
                  Html
                </Link>
              </ul>
              <ul>
                <Link
                  href="/personal_project/p2_clerk_auth"
                  className="menu_item hover:bg-blue-700"
                >
                  Clerk Auth
                </Link>
              </ul>
              <ul>
                <Link
                  href="/personal_project/p3_shop_mole"
                  className="menu_item hover:bg-blue-700"
                >
                  쇼핑몰
                </Link>
              </ul>
            </div>
          </div>

          <Link href="/profile" className="menu_item hover:bg-blue-700">
            프로필
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
