import React, { useEffect, useState } from 'react';
import '../design-tokens/design-tokens.scss';
import './_app.scss';
import styles from './_app.module.scss';
import { Menu } from '../components/Menu';
import PageStore, { Page } from '../stores/PageStore';
import Head from 'next/head';
import { Tooltip } from '../components/Tooltip';
import TooltipStore from '../stores/TooltipStore';

function App({ Component, pageProps }) {
    const [tooltipSummary, setTooltipSummary] = useState(null);
    const [pageType, setPageType] = useState<Page>(PageStore.getPageType());
    const [pageStyle, setPageStyle] = useState(styles.overview);
    const darkModeMediaQuery =
        typeof window !== 'undefined'
            ? window?.matchMedia('(prefers-color-scheme: dark)')
            : { matches: false };
    if (darkModeMediaQuery.matches) {
        console.log(`System is 🌒`);
    } else {
        console.log(`System is ☀️`);
    }

    useEffect(() => {
        const subscriptionId = PageStore.subscribe(() => {
            setPageType(PageStore.getPageType());
        });
        setPageType(PageStore.getPageType());

        const tooltipSubscriptionId = TooltipStore.subscribe(() => {
            setTooltipSummary(TooltipStore.getSummary());
        });
        setTooltipSummary(TooltipStore.getSummary());

        return () => {
            PageStore.unsubscribe(subscriptionId);
            TooltipStore.unsubscribe(tooltipSubscriptionId);
        };
    }, []);

    useEffect(() => {
        switch (pageType) {
            case 'article':
                setPageStyle(styles.article);
                break;
            case 'overview':
            default:
                setPageStyle(styles.overview);
        }
    }, [pageType]);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no"
                />
            </Head>
            <section className={pageStyle}>
                <aside>
                    <Menu />
                </aside>
                <main>
                    <Component {...pageProps} />
                </main>
                {tooltipSummary && (
                    <Tooltip
                        title="Design Tokens"
                        description={tooltipSummary}
                    />
                )}
            </section>
        </>
    );
}

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric) {
    // These metrics can be sent to any analytics service
    if ('table' in console) {
        console.table(metric);
    } else {
        (console as any).log(metric);
    }
}

export default App;
