import React from 'react';
import BGLeft from '../img/bg-left.png';
import BGRight from '../img/bg-right.png';
import ApresentacaoImagem from '../img/apresentacao-imagem.png';
import {BsFillPlayCircleFill} from 'react-icons/bs';

const Apresentacao = () => {
    return (
        <div className='apresentacao-container'>
            <div className='apresentacao-bg-left'>
                <img src={BGLeft} />
            </div>
            <div className='apresentacao-imagem'>
                <img src={ApresentacaoImagem} />
            </div>
            <div className='apresentacao-textos'>
                <p className='primary-subtitulo'>SOBRE NÓS</p>
                <h1 className='primary-titulo'>BENEFÍCIOS</h1>
                <li className='primary-text'>Os melhores e mais eficientes entregadores.</li>
                <li className='primary-text'>Ampla variedade de tipos de restaurante.</li>
                <li className='primary-text'>Sistema de pagamento moderno, rápido e fácil.</li>
                <div className='apresentacao-botoes'>
                    <button className='secondary-button'>Saiba Mais</button>
                    <button className='watch-video-button'> <BsFillPlayCircleFill/> Video de Apresentação</button>
                </div>
            </div>
            <div className='apresentacao-bg-right'>
                <img src={BGRight} />
            </div>
        </div>
    )
};

export default Apresentacao;