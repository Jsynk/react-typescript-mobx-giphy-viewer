import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import { store } from "./store";


describe('react state media viewer - tests', ()=>{
  it('Should have 4 radiobuttons', ()=>{
    store.mockApi = true
    const {container} = render(<App />)
    const radioButtons = container.querySelectorAll('.form-check-input')
    expect(radioButtons.length).toEqual(4)
  })

  it('Select carousel and display 10 images', async ()=>{
    store.mockApi = true
    const {container} = render(<App />)
    
    const Carousel = screen.getByTestId('Carousel')
    fireEvent.click(Carousel)

    const carouselContainer = container.querySelector('#carouselContainer')
    expect(carouselContainer).toBeDefined()

    const carouselItems = await screen.findAllByRole('carousel-item-image')
    expect(carouselItems.length).toEqual(10)
  })

  it('Select card and display 10 images', async ()=>{
    store.mockApi = true
    const {container} = render(<App />)
    
    const Card = screen.getByTestId('Card')
    fireEvent.click(Card)
    
    const cardContainer = container.querySelector('#cardContainer')
    expect(cardContainer).toBeDefined()

    const cardItems = await screen.findAllByRole('card-item-image')
    expect(cardItems.length).toEqual(10)
  })

  it('Select grid and display 10 images', async ()=>{
    store.mockApi = true
    const {container} = render(<App />)
    
    const Grid = screen.getByTestId('Grid')
    fireEvent.click(Grid)
    
    const gridContainer = container.querySelector('#gridContainer')
    expect(gridContainer).toBeDefined()

    const gridItems = await screen.findAllByRole('grid-item-image')
    expect(gridItems.length).toEqual(10)
  })

  it('Select list and display 10 images', async ()=>{
    store.mockApi = true
    const {container} = render(<App />)
    
    const List = screen.getByTestId('List')
    fireEvent.click(List)
    
    const listContainer = container.querySelector('#listContainer')
    expect(listContainer).toBeDefined()

    const listItems = await screen.findAllByRole('list-item-image')
    expect(listItems.length).toEqual(10)
  })
})