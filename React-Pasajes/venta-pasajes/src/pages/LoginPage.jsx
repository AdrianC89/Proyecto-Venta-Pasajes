import { useForm } from "react-hook-form"

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='Email'
                />
                {
                    errors.email && (<p className='text-red-500'>Ingrese el Email correctamente</p>)
                }
                <input
                    type="password"
                    {...register("password", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='Password'
                />
                {
                    errors.password && (<p className='text-red-500'>Por favor, verifique su contraseña</p>)
                }
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                    Registrarse
                </button>
            </form>1
            </div>
        </div>
    )
}

export default LoginPage