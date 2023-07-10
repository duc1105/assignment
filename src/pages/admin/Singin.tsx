import React, { useState } from 'react'
import { IUser } from '../../interface/interface'
// import { useNavigate } from 'react-router-dom'
interface IProps {
    onSignin: (
        user: IUser
    ) => void
}
const Singin = (props: IProps) => {
    // const navigate = useNavigate() 
    const [inputValue, setInputValue] = useState<IUser>()
    const onHandleChange = (e: any) => {
        const name = e.target.name
        const value = e.target.value
        setInputValue({ ...inputValue, [name]: value });
    }
    const onHandleSubmit = (e: any) => {
        e.preventDefault();
        props.onSignin(inputValue)
    }
    return (
        <div>
            <h2 className='text-center text-danger pt-5 pb-4'>Đăng nhập</h2>
            <form className='text-center' onSubmit={onHandleSubmit}>

                <div className=" mb-4 w-96">
                    <div>
                        <label className="text-wrap" >Email</label>
                    </div>
                    <input className='w-25 p-1 rounded' type="text" onChange={onHandleChange} name='email' placeholder='nhập email' />
                </div>


                <div className="form-outline mb-4">
                    <div>
                        <label className="text-wrap" >Password</label>
                    </div>
                    <input className='w-25 p-1 rounded' type="password" onChange={onHandleChange} name="password" />

                </div>

                <button className="btn btn-primary btn-block mb-4" type="submit">Sign in</button>


                <div className="text-center">
                    <p>Not a member? <a href="singup">Resigter</a></p>

                </div>
            </form>
            {/* <form action="" onSubmit={onHandleSubmit}>
                <div className='form-group'>
                    <label htmlFor="">Email</label>
                    <input className='' type="text" onChange={onHandleChange} name='email' placeholder='nhập email' />
                </div>
                <div>
                    <label htmlFor="">Mật khẩu</label>
                    <input type="text" onChange={onHandleChange} name="password"  />
                </div>            
                <button type="submit">Add New User</button>
            </form> */}
        </div>
    )
}

export default Singin
