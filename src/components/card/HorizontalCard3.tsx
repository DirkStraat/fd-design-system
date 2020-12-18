import React from 'react';
import styles from './HorizontalCard3.module.scss';

interface Props {
    id: string;
    url: string;
    label: string;
    time: string;
    title: string;
    printTitle?: string;
    intro: string;
    isRead?: boolean;
    [x: string]: any;
}

/**
 * Used in the search results. Note that the difference with the Horizontal Card 2 is that it supports `printTitle`.
 * @param props
 */
function HorizontalCard3(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.horizontalCard3}${
                props.isRead ? ` ${styles.isRead}` : ''
            }`}
            id={props.id}
        >
            <a href={props.url} aria-label={props.title}>
                <div className={styles.teaserText}>
                    <div className={styles.meta}>
                        <span className={styles.prefix}>{props.label}</span>

                        <time>{props.time}</time>
                    </div>

                    <div className={styles.textContainer}>
                        <h1 className="heading serif s">{props.title}</h1>
                        {props.printTitle && (
                            <p
                                className={`${styles.printTitle} body-text sans xs`}
                            >
                                <span>Krantentitel: </span>
                                <span className={styles.printTitleText}>
                                    ‘{props.printTitle}’
                                </span>
                            </p>
                        )}

                        <p className={`${styles.intro} body-text sans s`}>
                            {props.intro}
                        </p>
                    </div>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.horizontalCard3];
}

export { HorizontalCard3, getCssClassNames };
