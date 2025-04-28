


import { Link, useNavigate } from "react-router-dom"
import { signinBanner } from "../../assets"
import { RoutePaths } from "../../components/router/route-path"
import { SignUpI, useSignUp } from "./api";
import {useFormik } from 'formik'
import { SIGNUPSCHEMA } from "../schema";
import { toast } from "react-toastify";
import TextInput from "../../components/elements/text-field";


const SignUp = () => {

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const signupMutation = useSignUp();
  
    //initial form value
    const initialValues: SignUpI = {
      username: '',
      password: '',
    };
  
    const { handleSubmit, handleChange, values, errors, touched } = useFormik<SignUpI>({
      initialValues,
      validationSchema: SIGNUPSCHEMA,
      onSubmit: () => {
        signupMutation.mutate(values, {
          onSuccess: (data) => {
            toast.success(data.status);
            navigate(RoutePaths.HOME);
          },
          onError: (error) => {
            toast.error(error.message);
          },
        });
      },
    });
  return (
    <main className=' bg-amber-50/20 h-screen flex flex-col md:flex-row md:justify-center md:items-center'>
        <div className="flex flex-col md:flex-row h-full md:justify-center md:items-center">
            <section className="w-full md:w-1/2 bg-black md:h-full flex flex-col items-center justify-center">
                <img src={signinBanner} alt="banner"/>
            </section>
           

            <form onSubmit={handleSubmit} className=" bg-[grey] md:px-20 h-full flex flex-col justify-center w-full md:w-1/2 md:mt-0 pt-16 px-4 py-10">
            <section className="text-2xl   font-bold text-black">30 Days Free Porn Challenge</section>
            <section className="flex flex-col mt-4">
        
                <TextInput
              value={values.username}
              label='Username'
              onChange={handleChange}
              err={!!errors.username && touched.username}
              errMessage={errors.username}
              type='text'
              name='username'
              placeHolder='Enter username'
              className='w-full border  bg-white/80 py-3 '
            />
            </section>
            <section className="flex flex-col mt-4">
            <TextInput
              value={values.password}
              label='Password'
              onChange={handleChange}
              err={!!errors.password && touched.password}
              errMessage={errors.password}
              type='password'
              name='password'
              placeHolder='Enter password'
              className='w-full   bg-white/80 py-3 '
            />
            </section>
            <section className="flex flex-col mt-2 items-end">
            <p className=" text-sm text-[#fa9b0a] ">Already have an account <Link to={RoutePaths.HOME}><span className="font-bold text-black cursor-pointer">SignIn</span></Link></p>
            </section>
            <section>
                
                <button disabled={signupMutation.isPending} type="submit" className="bg-black cursor-pointer text-white px-4 py-3 rounded-xl w-full mt-5">
                    {signupMutation.isPending ? 'Signing up...' : 'SignUp'}
                </button>

            </section>
            </form>
        </div>
    </main>
  )
}

export default SignUp