// frontend/src/components/ProtectedPage.jsx
import React, { useEffect, useState } from 'react';
import { getProtectedData } from '../api/protected';

const ProtectedPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getProtectedData();
                setData(res.data);
            } catch (error) {
                console.log('Error obteniendo datos protegidos', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {data ? <h1>{data.message}</h1> : <p>Cargando...</p>}
        </div>
    );
};

export default ProtectedPage;
