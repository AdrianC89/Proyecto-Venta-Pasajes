import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createPasaje } from '../api/pasajes'; // Importar la función de creación desde la carpeta api

function CrearPasaje() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            
            // Añadir los datos del formulario al FormData
            formData.append('origen', data.origen);
            formData.append('destino', data.destino);
            formData.append('fechaSalida', data.fechaSalida);
            formData.append('fechaLlegada', data.fechaLlegada);
            formData.append('precio', data.precio);
            formData.append('asientosDisponibles', data.asientosDisponibles);
            formData.append('imagen', data.imagen[0]); // Asegúrate de seleccionar el archivo correcto

            await createPasaje(formData); // Llamada a la función que hace el POST a la API
            reset(); // Limpiar el formulario tras la creación
            navigate('/pasajes'); // Redirigir al listado de pasajes

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md p-10 rounded-md">
                <h1 className="text-2xl font-bold">Crear Nuevo Pasaje</h1>
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <input
                        type="text"
                        {...register("origen", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Origen"
                    />
                    {errors.origen && <p className="text-red-500">El origen es obligatorio</p>}

                    <input
                        type="text"
                        {...register("destino", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Destino"
                    />
                    {errors.destino && <p className="text-red-500">El destino es obligatorio</p>}

                    <input
                        type="datetime-local"
                        {...register("fechaSalida", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    />
                    {errors.fechaSalida && <p className="text-red-500">La fecha de salida es obligatoria</p>}

                    <input
                        type="datetime-local"
                        {...register("fechaLlegada", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    />
                    {errors.fechaLlegada && <p className="text-red-500">La fecha de llegada es obligatoria</p>}

                    <input
                        type="number"
                        {...register("precio", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Precio"
                    />
                    {errors.precio && <p className="text-red-500">El precio es obligatorio</p>}

                    <input
                        type="number"
                        {...register("asientosDisponibles", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Asientos disponibles"
                    />
                    {errors.asientosDisponibles && <p className="text-red-500">Debe indicar los asientos disponibles</p>}

                    <input
                        type="file"
                        {...register("imagen", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    />
                    {errors.imagen && <p className="text-red-500">La imagen es obligatoria</p>}

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                    >
                        Crear Pasaje
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CrearPasaje;
