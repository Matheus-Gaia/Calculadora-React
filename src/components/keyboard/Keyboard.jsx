import "./Keyboard.css"
import Button from './buttons/Button'

const Keyboard = () => {
  return (
    <div className="Keyboard">
          <Button valor={7}/>
          <Button valor={8}/>
          <Button valor={9}/>
          <Button valor={"/"}/>
          <Button valor={4}/>
          <Button valor={5}/>
          <Button valor={6}/>
          <Button valor={"*"}/>
          <Button valor={1}/>
          <Button valor={2}/>
          <Button valor={3}/>
          <Button valor={'-'}/>
          <Button valor={0}/>
          <Button valor={"."}/>
          <Button valor={"="}/>
          <Button valor={"+"}/>
          <Button valor={"Clear"}/>
    </div>
  )
}

export default Keyboard