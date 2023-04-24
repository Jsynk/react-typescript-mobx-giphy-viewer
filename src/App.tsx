import React from 'react';
import './App.css';
import { observer } from "mobx-react-lite";
import { store, ImageMode } from "./store";

const App: React.FunctionComponent = observer(() => (
  <div className='container mt-4'>
    <div className="row">
      <h4>Select image mode</h4>
      <div className="ml-2">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
            onChange={()=>store.setImageMode(ImageMode.Carousel)} data-testid='Carousel'></input>
          <label className="form-check-label" htmlFor="flexRadioDefault1">Carousel/Slider</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
            onChange={()=>store.setImageMode(ImageMode.Card)} data-testid='Card'></input>
          <label className="form-check-label" htmlFor="flexRadioDefault2">Card</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
            onChange={()=>store.setImageMode(ImageMode.Grid)} data-testid='Grid'></input>
          <label className="form-check-label" htmlFor="flexRadioDefault3">Grid</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"
            onChange={()=>store.setImageMode(ImageMode.List)} data-testid='List'></input>
          <label className="form-check-label" htmlFor="flexRadioDefault4">List</label>
        </div>
      </div>
    </div>
    <div className="row mt-4" data-testid="carouselContainer">
      {store.imageMode === ImageMode.Carousel && store.images?.length ? 
      <div id="carouselContainer" className="carousel slide mx-auto border border-dark">
        <div className="carousel-inner">
          {store.images.map((img, index)=>{return (
          <div className={'carousel-item'+(index===0?' active':'')} key={'carousel'+index}>
            <img src={img.images.fixed_width.url} width={img.images.fixed_width.width} className="carousel-item-image" role="carousel-item-image" alt="..."></img>
          </div>
          )})}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselContainer" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselContainer" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      : ''}
      {store.imageMode === ImageMode.Card && store.images?.length ? 
      <div className="row" id="cardContainer">
        {store.images.map((img, index)=>{return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4" key={'card'+index}>
          <div className="card h-100">
            <img src={img.images.fixed_width.url} width={img.images.fixed_width.width} className="card-img-top mt-2 px-2" alt="..." role="card-item-image"></img>
            <div className="card-body">
              <h5 className="card-title fw-bold">{img.title}</h5>
              <div className="card-text">{img.user?.description}</div>
              {img.user?.website_url ?
              <div>
                <p className="card-text">{img.user?.website_url}</p>
                <a href={img.user?.website_url} target='_blank' rel="noreferrer" className="btn btn-primary">Go to user url</a>
              </div>
              : ''}
            </div>
          </div>
        </div>
        )})}
      </div>
      : ''}
      {store.imageMode === ImageMode.Grid && store.images?.length ? 
      <div className="row" id="gridContainer">
        {store.images.map((img, index)=>{return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4" key={'grid'+index}>
          <img src={img.images.fixed_width.url} width={img.images.fixed_width.width} className="object-fit-cover w-100 h-100" alt="..." role="grid-item-image"></img>
        </div>
        )})}
      </div>
      : ''}
      {store.imageMode === ImageMode.List && store.images?.length ? 
      <div className="row" id="listContainer">
        {store.images.map((img, index)=>{return (
        <div className="d-flex justify-content-start flex-gap-10 border border-dark mb-4 p-2 bg-white text-black" key={'list'+index}>
          <div>
            <img src={img.images.fixed_width.url} width={img.images.fixed_width.width} className="object-fit-cover w-100 h-100" alt="..." role="list-item-image"></img>
          </div>
          <div className='d-flex justify-content-center flex-column'>
            <div>
              <div className='fw-bold'>{img.title}</div>
              <div>{img.user?.description}</div>
              <div>{img.user?.website_url}</div>
            </div>
          </div>
        </div>
        )})}
      </div>
      : ''}
    </div>
  </div>
));

export default App;
