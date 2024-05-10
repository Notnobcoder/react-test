import { useEffect, useState } from 'react'
import { Counter } from './components/counter'

function App() {

  const [adult, setAdult] = useState(0)
  const [child, setChild] = useState(0)
  const [infants, setInfants] = useState(0)
  const [total, setTotal] = useState(adult + child + infants)
  const [selectedOption, setSelectedOption] = useState('Economy');
  const [departed, setDeparted] = useState("New Delhi")
  const [going, setGoing] = useState("Mumbai")

  useEffect(() => {
    setTotal(adult + child + infants)
  }, [adult, child, infants])

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleDepartedChange = () => {
    setDeparted(going)
    setGoing(departed)
  }

  return (
    <>
      <div className="mt-10 space-y-10 flex items-center justify-center flex-col">
        {/* input change */}
        <div className="flex items-center space-x-7">
          <div>
            <h4>Departed From</h4>
            <h5 className="text-2xl">
              {departed}
            </h5>
          </div>
          <button onClick={handleDepartedChange}>change</button>
          <div>
            <h4>Going To</h4>
            <h5 className="text-2xl">
              {going}
            </h5>
          </div>
        </div>
        {/* // show value */}
        <div className="text-2xl space-y-2">
          <h5>Traveler(s). Class</h5>
          <h4>
            {total} Traveller , {selectedOption}
          </h4>
        </div>


        <div className="flex items-center gap-8 justify-center my-10">
          <Counter title="Adult" count={adult} setCount={setAdult} />
          <Counter title="Child" count={child} setCount={setChild} />
          <Counter title="Infants" count={infants} setCount={setInfants} />
        </div>

        {/* radio button */}
        <form>
          <input
            type="radio"
            id="Economy"
            name="color"
            value="Economy"
            checked={selectedOption === 'Economy'}
            onChange={handleOptionChange}
          />
          <label >Economy</label><br />
          <input
            type="radio"
            id="Premium Economy"
            name="color"
            value="Premium"
            checked={selectedOption === 'Premium'}
            onChange={handleOptionChange}
          />
          <label>Premium Economy</label><br />
          <input
            type="radio"
            id="Business"
            name="color"
            value="Business"
            checked={selectedOption === 'Business'}
            onChange={handleOptionChange}
          />
          <label htmlFor="green">Business</label><br />
        </form>

      </div>
    </>
  )
}

export default App
