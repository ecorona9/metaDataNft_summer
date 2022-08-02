import './Main.css';

function Main() {
  return (
    <div className="Main">
      <div className='Content'>
        FIND OUT ABOUT YOUR NFT USING OUR FUNCTIONS
        <div>
          <input className='Search' placeholder='Contract Address'></input>
          <select className='Options'>
            <option value="grapefruit">ASSETS</option>
            <option value="lime">COLLECTIONS</option>
            <option selected value="coconut">EVENTS</option>
            <option value="mango">OWNERS</option>
          </select>
        </div>
        
      </div>

    </div>
  );
}

export default Main;
