let x ="hello there"
function Hello({person,children}){
  return (
  <>
  <h1>hello {person.name}</h1>
  {children}
  </>
  )
}

export default Hello;
