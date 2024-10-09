import React from 'react';
import BGLeft from '../img/bg-left.png';
import BGRight from '../img/bg-right.png';
import ApresentacaoImagem from '../img/apresentacao-imagem.png';
import {BsFillPlayCircleFill} from 'react-icons/bs';

const Apresentacao = () => {
    return (
        <div className='about-section-container'>
            <div className='about-background-image-container-left'>
                <img src={BGLeft} />
            </div>
            <div className='about-section-image-container'>
                <img src={ApresentacaoImagem} />
            </div>
            <div className='about-section-text-container'>
                <p className='primary-subheading'>SOBRE NÓS</p>
                <h1 className='primary=heading'>BENEFÍCIOS</h1>
                <li className='primary-text'>Os melhores e mais eficientes entregadores.</li>
                <li className='primary-text'>Ampla variedade de tipos de restaurante.</li>
                <li className='primary-text'>Sistema de pagamentos moderno, rápido e fácil.</li>
                <div className='about-buttons-container'>
                    <button className='secondary-button'>Saiba Mais</button>
                    <button className='watch-video-button'> <BsFillPlayCircleFill/> Video de Apresentação</button>
                </div>
            </div>
            <div className='about-background-image-container-right'>
                <img src={BGRight} />
            </div>
        </div>
    )
};

export default Apresentacao;