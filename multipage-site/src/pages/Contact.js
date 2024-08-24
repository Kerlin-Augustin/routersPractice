import { useLocation } from 'react-router-dom';

export default function Contacts(){

  const querySelector = useLocation().search
  const queryParams = new URLSearchParams(querySelector)
  const name = queryParams.get('name')

  return (
    <div>
      <h2>Contacts</h2>
      <p>lorem ipsum</p>
      <p>{name}</p>
    </div>
  )
}