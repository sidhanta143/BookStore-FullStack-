import React from 'react'
import Navbar from '../../Component/Navbar'
import Slides from './Slides'
import Freebook from '../../Component/Freebook'






const About = () => {
  return (
    <>
    <Navbar/>
     <div className='max-w-full container  px-4 bg-white md:px-12 flex items-center justify-center min-h-screen'>
<Slides/>




        
        
        
        </div> 
      <div className=' ml-[-20vh] px-40 bg-white '>
          <Freebook/>
        </div>
        <br />
        <div className='p-5'>
      
<h3>
  Lorem      ipsum dolor sit amet consectetur adipisicing elit. Nihil minus vitae magni voluptatibus cumque eveniet hic expedita exercitationem dolor? Quia deserunt eos labore similique repellat sequi voluptatum porro sit natus facilis voluptas impedit molestiae, vero deleniti vitae esse! Exercitationem dolor sapiente fugiat laboriosam voluptatem reprehenderit a harum obcaecati eveniet beatae. Eligendi, ex obcaecati. Tenetur exercitationem quae reprehenderit enim nihil excepturi alias voluptas voluptatum soluta nostrum facilis rerum, id a itaque eaque corporis nemo, veniam fugiat, amet fuga blanditiis temporibus quas adipisci. Distinctio, maiores officiis atque velit, soluta odio nam a dolores molestias dolorum odit at error mollitia, laborum sequi eaque? Laudantium delectus veniam enim sit. Omnis quam iure dolore. Accusamus, blanditiis rem aliquam optio, eum non ex aliquid nobis, iste earum odit id dolorem magnam recusandae incidunt sed qui adipisci! At corporis pariatur nemo voluptate earum reprehenderit dolor voluptas animi facilis ea modi libero error adipisci cum, sint, eaque ab? Quo, maxime? Fugiat eius assumenda omnis dolorum perspiciatis soluta facilis, voluptatum sequi exercitationem excepturi nobis nostrum cumque dolorem doloribus sint? Tempora cumque placeat neque repellendus. Pariatur ad dolores delectus cumque distinctio possimus iste accusantium, commodi sapiente hic deserunt magni numquam reprehenderit vero quam ratione cupiditate ipsam voluptate nihil accusamus excepturi!
</h3>
        </div>
        <br />
        <br />

<div>

</div>
   

<div>
          <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-80">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
</div>
    </>
  )
}

export default About


