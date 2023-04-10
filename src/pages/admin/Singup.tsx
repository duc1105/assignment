import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../../interface/interface'
interface Iprops {
  onAddUser: (
    user: IUser,
  ) => void
}
const Singup = (props: Iprops) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState<IUser>()
  const onHandleChange = (e: any) => {
    const name = e.target.name
    const value = e.target.value
    setInputValue({ ...inputValue, [name]: value });
  }
  const onHandleSubmit = (e: any) => {
    e.preventDefault();

    props.onAddUser(inputValue)

  }
  return (
    <div>
      <h2 className='text-center text-danger pt-5 pb-4'>Đăng ký</h2>
      <form className='text-center' action="" onSubmit={onHandleSubmit}>
        <div>
          <div>
            <label htmlFor="">Name</label>
          </div>

          <input className='w-25 p-1 rounded mb-3' type="text" onChange={onHandleChange} name='name' />
        </div>
        <div>
          <div>
            <label htmlFor="">Email</label>
          </div>

          <input className='w-25 p-1 rounded mb-3' type="text" onChange={onHandleChange} name='email' />
        </div>
        <div>
          <div>
            <label htmlFor="">Mật khẩu</label>
          </div>

          <input className='w-25 p-1 rounded mb-3' type="text" onChange={onHandleChange} name="password" />
        </div>
        <div>
          <div>
            <label htmlFor="">Nhập lại Mật khẩu</label>
          </div>

          <input className='w-25 p-1 rounded mb-3' type="text" onChange={onHandleChange} name="confirmPassword" />
        </div>

        <button className='mb-5 btn btn-primary' type="submit">Đăng kí</button>
      </form>
    </div>
  )
}

export default Singup
