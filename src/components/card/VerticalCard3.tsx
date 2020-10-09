import React from 'react';
import styles from './VerticalCard3.module.scss';
import { ReadingTime } from './shared/ReadingTime';

export type Variants = 'default' | 'variant-1' | 'variant-2' | 'variant-3';

interface Props {
    id: string;
    url: string;
    imageUrl: string;
    imageUrlS?: string;
    imageUrlM?: string;
    imageUrlL?: string;
    caption?: string;
    label: string;
    /**
     * Reading time in minutes.
     */
    readingTime?: number;
    isRead?: boolean;
    title: string;
    printTitle?: string;
    intro: string;
    onBookmark?: (e: React.MouseEvent<HTMLElement>) => void;
    variant?: Variants;
    [x: string]: any;
}

/**
 * Used on home page.
 * @param props
 */
function VerticalCard3(props: Props) {
    return (
        <article
            style={props.style}
            data-variant={props.variant}
            className={`${styles.verticalCard3}${
                props.className ? ` ${props.className}` : ''
            }${props.isRead ? ` ${styles.isRead}` : ''}`}
            id={props.id}
        >
            <a href={props.url} aria-label={props.title}>
                <div className={styles.cardContent}>
                    <div className={styles.textContent}>
                        <div className={styles.meta}>
                            <span className={styles.prefix}>{props.label}</span>
                        </div>

                        <div className={styles.teaserText}>
                            <h1>{props.title}</h1>

                            <p className={styles.intro}>{props.intro}</p>

                            {props.readingTime && (
                                <ReadingTime
                                    className={styles.readingTime}
                                    readingTime={props.readingTime}
                                />
                            )}
                        </div>
                    </div>
                    <div>
                        <figure>
                            <picture>
                                {props.imageUrlS && (
                                    <source
                                        media="(max-width:639px)"
                                        srcSet={`${props.imageUrlS}`}
                                    />
                                )}
                                {props.imageUrlM && (
                                    <source
                                        media="(max-width:860px)"
                                        srcSet={`${props.imageUrlM}`}
                                    />
                                )}
                                {props.imageUrlL && (
                                    <source
                                        media="(min-width:861px)"
                                        srcSet={`${props.imageUrlL}`}
                                    />
                                )}
                                <img
                                    src={`${props.imageUrl}`}
                                    alt={props.caption ?? props.title}
                                />
                            </picture>
                            <figcaption>{props.caption}</figcaption>
                        </figure>
                    </div>
                </div>
            </a>
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.verticalCard3];
}

export { VerticalCard3, getCssClassNames };
