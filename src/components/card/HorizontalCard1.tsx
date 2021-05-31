import React from 'react';
import styles from './HorizontalCard1.module.scss';

interface Props {
    id: string;
    url: string;
    imageUrl?: string;
    /**
     * Custom image component. When set this will replace the default img-element.
     */
    imageComponent?: JSX.Element;
    label: string;
    time: string;
    title: string;
    isRead?: boolean;
    variant?: 'variant-1';
    [x: string]: any;
}

/**
 * Used on category, dossier pages.
 * @param props
 */
function HorizontalCard1(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.horizontalCard1}${
                props.isRead ? ` ${styles.isRead}` : ''
            }${props.variant === 'variant-1' ? ` ${styles.longread}` : ''}`}
            id={props.id}
        >
            <a href={props.url} aria-label={props.title}>
                {(props.imageUrl || props.imageComponent) && (
                    <figure>
                        <picture>
                            {props.imageComponent ?? (
                                <img
                                    src={`${props.imageUrl}`}
                                    alt={props.caption ?? props.title}
                                />
                            )}
                        </picture>
                        <figcaption>{props.caption}</figcaption>
                    </figure>
                )}

                {!props.imageUrl && !props.imageComponent && (
                    <div className={`${styles.figure} ${styles.empty}`}>
                        <img src="/assets/images/fd-logo.svg" />
                    </div>
                )}

                <div className={styles.teaserText}>
                    <div className={styles.meta}>
                        <span className={styles.prefix}>{props.label}</span>
                        <time>{props.time}</time>
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className="heading serif s">{props.title}</h1>
                    </div>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.horizontalCard1];
}

export { HorizontalCard1, getCssClassNames };
