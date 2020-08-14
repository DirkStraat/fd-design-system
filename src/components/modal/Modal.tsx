import React, { useCallback } from 'react';
import styles from './Modal.module.scss';
import { CloseIcon } from '../../design-tokens/icons';
import { ButtonCta } from '../button/ButtonCta';

export interface Props {
    className?: string;
    contentClassName?: string;
    opened?: boolean;
    onClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    [x: string]: any;
}

export default function Modal(props: Props) {
    const handleModalClose = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            props.onClose(e);
        },
        [props.onClose]
    );

    return (
        <div className={`${styles.modal}${props.opened ? ` fdOpenModal` : ''}`}>
            <div
                className={`${styles.modalBackground}${
                    props.className ? ` ${props.className}` : ''
                }`}
            />
            <div
                className={`${styles.contentBackground}${
                    props.contentClassName ? ` ${props.contentClassName}` : ''
                }`}
                onClick={handleModalClose}
            >
                <div
                    className={styles.contentBox}
                    onClick={(e) => e.stopPropagation()}
                >
                    <span
                        className={styles.closeIcon}
                        dangerouslySetInnerHTML={{ __html: CloseIcon }}
                        onClick={handleModalClose}
                    />
                    <div className={styles.content}>{props.children}</div>
                    <div className={styles.buttonContainer}>
                        <ButtonCta onClick={handleModalClose}>
                            Sluiten
                        </ButtonCta>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getCssClassNames() {
    return [styles.modal];
}

export { Modal, getCssClassNames };
