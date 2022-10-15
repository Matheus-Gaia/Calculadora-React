import "./Keyboard.css"
import Button from './buttons/Button'

const Keyboard = ({ handleClick }) => {
  return (
    <div className="Keyboard">
      <Button valor={7} handleClick={handleClick} />
      <Button valor={8} handleClick={handleClick} />
      <Button valor={9} handleClick={handleClick} />
      <Button valor={"/"} handleClick={handleClick} />
      <Button valor={4} handleClick={handleClick} />
      <Button valor={5} handleClick={handleClick} />
      <Button valor={6} handleClick={handleClick} />
      <Button valor={"*"} handleClick={handleClick} />
      <Button valor={1} handleClick={handleClick} />
      <Button valor={2} handleClick={handleClick} />
      <Button valor={3} handleClick={handleClick} />
      <Button valor={'-'} handleClick={handleClick} />
      <Button valor={0} handleClick={handleClick} />
      <Button valor={"."} handleClick={handleClick} />
      <Button valor={"="} handleClick={handleClick} />
      <Button valor={"+"} handleClick={handleClick} />
      <Button valor={"Clear"} handleClick={handleClick} />
      <Button valor={"+/-"} handleClick={handleClick} />
      <Button valor={"%"} handleClick={handleClick} />
      <Button valor={"x <-"} handleClick={handleClick} />
    </div>
  )
}

export default Keyboard