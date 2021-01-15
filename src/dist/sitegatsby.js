
import React from 'react'
import Link from 'gatsby-link'
import $ from 'jquery'


export const onSitecode = () => {

class Header extends React.Component {
  componentDidMount () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 10) {
        $('.Header').addClass('floatingHeader');
      } else {
        $('.Header').removeClass('floatingHeader');
      }
    })
  }
  render () {
    return (
      <div className='Header'>
        <div className='HeaderGroup'>
link goes here
        </div>
      </div>
    )
  }
}
