import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'

function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate('/pasajes')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        await signup(values);
    });

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-gray-800 max-w-md p-10 rounded-md">
            {
                registerErrors.map((error, i) => (
                    <div className="bg-red-500 p-2 text-white" key={i}>
                        {error}
                    </div>
                ))
            }
            <h1 className="text-2xl font-bold">Registro de Usuarios</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    {...register("username", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='Nombre de Usuario'
                />
                {
                    errors.username && (<p className='text-red-500'>El Nombre de Usuario es requerido</p>)
                }
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
                    Crear Cuenta
                </button>
            </form>
            <p className="flex gap-x-2 justify-between">
                ya tienes una cuenta? <Link to = "/login" className="text-sky-500">Acceso</Link>
            </p>
        </div>
        </div>
    );
}

export default RegisterPage;
