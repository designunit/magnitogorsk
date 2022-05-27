import s from './styles.module.css'

import ReactModal from 'react-modal'
import { Button } from '../Button'
import React, { useState } from 'react'
import { Title } from '../Title'
import { Article } from '../Article'
import { PrismicRichText } from '@prismicio/react'


export type ModalProps = Omit<ReactModal.Props, 'closeTimeoutMS'>

export const Modal: React.FC<{
    modalIsOpen: boolean
    setModalIsOpen: (isOpen: boolean) => void
}> = ({ modalIsOpen, setModalIsOpen }) => {
    const delay = 250
    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            closeTimeoutMS={delay}
            className={s.modal}
            overlayClassName={s.overlay}
            ariaHideApp={false}
        >
            <>
                <div className={s.title}>
                    <Title level={3}>
                        Опрос
                    </Title>
                    <Button
                        onClick={() => setModalIsOpen(false)}
                        theme={'link'}
                        size='small'
                        className={s.close}
                        style={{
                            position: 'absolute',
                            top: '5.5rem',
                            right: '50%',
                            transform: 'translateX(min(425px, 30vw))',
                            zIndex: 2,
                        }}
                    >
                        <img
                            src='/static/closeMenu.svg'
                            style={{
                                width: 32,
                                height: 32,
                            }}
                        />
                    </Button>
                </div>
                <iframe className={s.iframe} src={'https://docs.google.com/forms/d/e/1FAIpQLSd9oE-O-7KLzW2Nn-0K0yOQFDlzA4P7KzX2uAl3uVCdoRrWUA/viewform?embedded=true'} frameBorder='0' marginHeight={0} marginWidth={0}>Загрузка…</iframe>
            </>
        </ReactModal>
    )
}