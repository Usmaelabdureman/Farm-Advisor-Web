import React from 'react';
import {PlusLg,PersonFill} from 'react-bootstrap-icons';
import './landingp.css';
import logo from '../../assets/Agino_logo.svg';
import splash from '../../assets/Vector.svg'

const LandingPage = () => {
  return (
      <div className=' container-fluid'>
        <div className='row'>
        <div className="col-md-12 navbar navbar-expand-lg header ">
          <img src={logo} alt='agino farm logo' className='logo' />
          <PlusLg className='addIcon float-right' />
          <PersonFill className='profile float-right' />
        </div>
        <div className="col offset-md-2 pt-20">
        <div className='card'>
          <img className='align-item-center t-20' src={splash} alt='Agino'/>
          <h1 className='mt-20'>Welcome to Agino</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi asperiores aspernatur repellat optio ipsum recusandae totam ipsa necessitatibus at odit perferendis soluta iure facere est, repellendus vero? Quis, dolore.
          </p>

          <div>
            <button className='btn'>Create My first Farm</button>
          </div>
        </div>
    </div>


        </div>

      </div>
  )
}

export default LandingPage