


//   return (
//     <>
      
//       <div style={{marginTop: '100px', marginInline: '50px'}}>
//       <h1>{signType === 'register' ? 'Register' : 'Login'}</h1>
//       <form>
//         {signType === 'register' ? (
//           <>
//             <input value={data.firstName} name="firstName" onChange={handleChange} type="text" placeholder='firstName' required />
//             <input value={data.lastName} name="lastName" onChange={handleChange} type="text" placeholder='lastName' required />
//             <input value={data.email} name="email" onChange={handleChange} type="email" placeholder='email' required />
//             <input value={data.password} name="password" onChange={handleChange} type="text" placeholder='password' required />
//             <input value={data.phone} name="phone" onChange={handleChange} type="number" placeholder='phone' required />
//             <input value={data.address} name="address" onChange={handleChange} type="text" placeholder='address' required />
//             {isUnvalidPass && <p>password must be greater than 3 letters</p>}
//             {isEmptyField && <p>all fileds are required ecxept the address</p>}
//             {unvalidEmail && <p>unvalid email</p>}
//           </>
//         ) : (
//           <>
//             {/* <input value={data.phone} name="phone" onChange={handleChange} type="number" placeholder='phone' /> */}
//             <input value={data.email} name="email" onChange={handleChange} type="email" placeholder='email' required />
//             <input value={data.password} name="password" onChange={handleChange} type="text" placeholder='password' required />

//             {!foundUser && <p>user not found</p>}
//             {wrongPass && <p>wrong password</p>}
//           </>
//         )}
//         <button onClick={handleSubmit}>submit</button>
//       </form>
//       {signType === 'register' ? (<button onClick={() => {setSignType('loign')}}>Already have account</button>) : (<button onClick={() => {setSignType('register')}}>Don't have an accoun?</button>)}
//     </div>
//     </>
//   );
// 

