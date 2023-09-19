import{Link,useNavigate}from 'react-router-dom'

const Nav= ()=>{
    const Navigate=useNavigate()
    const auth=localStorage.getItem('user')
    function logout(){
       
        localStorage.clear()
        Navigate('/SingUp')
    }
return(
    <div>
        <img
        className='logo'
        alt='logo' 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkiXXwB7YncAtMcbBF_CcdF2HNGSl-8Lh2g&usqp=CAU'/>
        {
            auth? <ul className='nav-ul'>
            <li><Link to='/'>Product</Link></li>
            <li><Link to='/Add'>Add Product</Link></li>
            <li><Link to='/Update/:id'>Update Product</Link></li>
            <li><Link to='/Profile'>Profile</Link></li>
            <li><Link onClick={logout} to='/SingUp'>logout ({JSON.parse(auth).name})</Link></li>
        </ul>:<ul className='nav-ul nav-right'>
        <li><Link  to='/SingUp'>Sing Up</Link></li>
        <li><Link to='/Login'>Login</Link></li>
        </ul>
        }

        </div>
)
}
export default Nav