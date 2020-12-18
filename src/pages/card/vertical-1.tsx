import React, { useState } from 'react';
import styles from './cards.module.scss';
import { Explain } from '../../components/Explain';
import {
    VerticalCard1,
    getCssClassNames,
} from '../../components/card/VerticalCard1';
import Head from 'next/head';

const verticalCards1: any = [
    {
        id: '1345422',
        label: 'Arbeidsmarkt',
        title:
            'Lockdown leidt tot recordstijging aantal WW-uitkeringen in april',
        imageUrl:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlS:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlM:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=351&h=234',
        imageUrlL:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        url:
            'https://fd.nl/economie-politiek/1345422/lockdown-leidt-tot-recordstijging-aantal-ww-uitkeringen-in-april',
        intro: `Scherpe stijging met 17% tot 292.000 uitkeringen, blijkt uit cijfers van het UWV. Tijdens de kredietcrisis in 2008 liep de werkloosheid veel geleidelijker op.`,
        readingTime: 3,
    },
    {
        id: '1321841',
        label: 'Detailhandel',
        title: 'Den Haag zet druk op verhuurders om huurverlaging te slikken',
        imageUrl:
            'https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlS:
            'https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlM:
            'https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=351&h=234',
        imageUrlL:
            'https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        url:
            'https://fd.nl/ondernemen/1321841/den-haag-zet-druk-op-pandeigenaren-om-huurverlaging-winkeliers-te-slikken',
        intro: `Het Rijk sluit overheidsingrijpen niet uit om een akkoord tussen verhuurders en winkeliers af te dwingen, nu onderhandelingen moeizaam verlopen.`,
        readingTime: 5,
    },
    {
        id: '1357440',
        label: 'Fiscaal',
        title:
            'Kabinet verwacht bijna €1 mrd aan dividendbelasting te moeten terugbetalen',
        imageUrl:
            'https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399',
        imageUrlS:
            'https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399',
        imageUrlM:
            'https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=351&h=234',
        imageUrlL:
            'https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399',
        url:
            'https://fd.nl/economie-politiek/1357440/europees-arrest-dividendbelasting-kost-schatkist-910-mln',
        intro: `Nederlands bedrijf met aandelenportefeuille betaalt het gelag.`,
        readingTime: 2,
        isRead: true,
    },
];

export const metaTitle = 'Vertical Card 1';
export const metaDescription = 'Vertical Card 1, used on the homepage';

function Page() {
    const [bookmarked, setBookmarked] = useState(false);

    function toggleBookmark() {
        setBookmarked(!bookmarked);
    }

    return (
        <>
            <Head>
                <title>
                    {metaTitle} - Design System - Het Financieele Dagblad
                </title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="twitter:title" content={metaTitle} />
                <meta
                    property="twitter:description"
                    content={metaDescription}
                />
            </Head>

            <Explain
                previewClassName={styles.horizontalFlexPreview}
                anchor="vertical1"
                cssClassNames={getCssClassNames()}
                legend="Vertical Card 1"
                reactComponentName="VerticalCard1"
                description={
                    <>
                        <p>Used on homepage.</p>
                        <ul>
                            <li>default</li>
                            <li>default</li>
                            <li>visited</li>
                        </ul>
                    </>
                }
            >
                <>
                    <VerticalCard1
                        className={styles.verticalCard1}
                        onBookmark={toggleBookmark}
                        bookmarked={bookmarked}
                        {...verticalCards1[0]}
                    />
                    <VerticalCard1
                        className={styles.verticalCard1}
                        onBookmark={toggleBookmark}
                        bookmarked={bookmarked}
                        {...verticalCards1[1]}
                    />
                    <VerticalCard1
                        className={styles.verticalCard1}
                        onBookmark={toggleBookmark}
                        bookmarked={bookmarked}
                        {...verticalCards1[2]}
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
