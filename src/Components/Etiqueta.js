import React from 'react';

const Etiqueta = (props) => {
    const {texto}=props;
    return (
        <button>{texto}</button>
    );
}

export default Etiqueta;
