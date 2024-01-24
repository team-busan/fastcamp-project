import React from 'react'
import Navbar from '../component/Navbar'
import MyInfo from '../component/MyInfo'
import MyPageSection from '../component/MyPageSection'
import MyPageContent from '../component/MyPageContent'
import MyIntro from '../component/MyIntro'
import MbMPContent from '../component/MbMPContent'

export default function MyPage() {
  return (
    <div>
      <Navbar />
      <MyInfo />
      {/* <MyIntro /> */}
      {/* <MyPageSection /> */}
      {/* <MyPageContent /> */}
      <MbMPContent />
    </div>
  )
}
