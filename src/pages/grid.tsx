import React from 'react';
import { Explain } from '../components/Explain';
import Head from 'next/head';
import styles from './grid.module.scss';
import { getCssClassNames, GridContainer } from '@fdmg/css-grid/GridContainer';
import { globalCssClassNames } from '../utils/globalCssClassNames';

export const metaTitle = 'Grid';
export const metaDescription = 'Grid, used to layout a page';

function Page() {
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
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                hideExternalCodeEditors={true}
                legend="Grid"
                reactComponentName="GridContainer"
                description={
                    <>
                        <p>Used as grid for page layouts.</p>
                    </>
                }
            >
                <GridContainer attributes={['grid']}>
                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            's-12',
                            'm-12',
                            'l-12',
                            'xl-12',
                            'gap-bottom',
                        ]}
                    />

                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            's-6',
                            'm-6',
                            'l-6',
                            'xl-6',
                            'gap-1',
                            'gap-bottom',
                        ]}
                    />
                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            's-6',
                            'm-6',
                            'l-6',
                            'xl-6',
                            'gap-1',
                            'gap-bottom',
                        ]}
                    />

                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            'xs-hide',
                            's-6',
                            'm-6',
                            'l-4',
                            'xl-4',
                            'gap-1',
                            'gap-2',
                            'gap-bottom',
                        ]}
                    />
                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            'xs-hide',
                            's-6',
                            'm-6',
                            'l-4',
                            'xl-4',
                            'gap-1',
                            'gap-2',
                            'gap-bottom',
                        ]}
                    />
                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            'xs-hide',
                            's-12',
                            'm-12',
                            'l-4',
                            'xl-4',
                            'gap-2',
                            'gap-bottom',
                        ]}
                    />

                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            'xs-hide',
                            's-3',
                            'm-3',
                            'l-3',
                            'xl-3',
                            'gap-3',
                            'gap-bottom',
                        ]}
                    />
                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            'xs-hide',
                            's-3',
                            'm-3',
                            'l-3',
                            'xl-3',
                            'gap-3',
                            'gap-bottom',
                        ]}
                    />
                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            'xs-hide',
                            's-3',
                            'm-3',
                            'l-3',
                            'xl-3',
                            'gap-3',
                            'gap-bottom',
                        ]}
                    />
                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            'xs-hide',
                            's-3',
                            'm-3',
                            'l-3',
                            'xl-3',
                            'gap-3',
                            'gap-bottom',
                        ]}
                    />

                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            'xs-hide',
                            's-12',
                            'm-12',
                            'l-12',
                            'xl-12',
                            'gap-bottom',
                        ]}
                    />

                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            's-6',
                            'm-6',
                            'l-6',
                            'xl-6',
                            'gap-1',
                            'gap-bottom',
                        ]}
                    />
                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            's-6',
                            'm-6',
                            'l-6',
                            'xl-6',
                            'gap-1',
                            'gap-bottom',
                        ]}
                    />

                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            's-4',
                            'm-4',
                            'l-4',
                            'xl-4',
                            'gap-2',
                            'gap-bottom',
                        ]}
                    />
                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            's-4',
                            'm-4',
                            'l-4',
                            'xl-4',
                            'gap-2',
                            'gap-bottom',
                        ]}
                    />
                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            's-4',
                            'm-4',
                            'l-4',
                            'xl-4',
                            'gap-2',
                            'gap-bottom',
                        ]}
                    />

                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            's-3',
                            'm-3',
                            'l-3',
                            'xl-3',
                            'gap-3',
                            'gap-bottom',
                        ]}
                    />
                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            's-3',
                            'm-3',
                            'l-3',
                            'xl-3',
                            'gap-3',
                            'gap-bottom',
                        ]}
                    />
                    <GridContainer
                        debug={true}
                        className={styles.dummyElement}
                        attributes={[
                            'xs-12',
                            's-3',
                            'm-3',
                            'l-3',
                            'xl-3',
                            'gap-3',
                            'gap-bottom',
                        ]}
                    />
                    <GridContainer
                        attributes={[
                            'grid',
                            'xs-12',
                            's-3',
                            'm-3',
                            'l-3',
                            'xl-3',
                            'gap-3',
                            'gap-bottom',
                        ]}
                    >
                        <GridContainer
                            debug={true}
                            className={styles.dummyElement}
                            attributes={[
                                'xs-12',
                                's-12',
                                'm-12',
                                'l-12',
                                'xl-12',
                                'gap-bottom',
                            ]}
                        />

                        <GridContainer
                            debug={true}
                            className={styles.dummyElement}
                            attributes={[
                                'xs-12',
                                's-6',
                                'm-6',
                                'l-6',
                                'xl-6',
                                'gap-1',
                                'gap-bottom',
                            ]}
                        />
                        <GridContainer
                            debug={true}
                            className={styles.dummyElement}
                            attributes={[
                                'xs-12',
                                's-6',
                                'm-6',
                                'l-6',
                                'xl-6',
                                'gap-1',
                                'gap-bottom',
                            ]}
                        />

                        <GridContainer
                            debug={true}
                            className={styles.dummyElement}
                            attributes={[
                                'xs-12',
                                's-4',
                                'm-4',
                                'l-4',
                                'xl-4',
                                'gap-2',
                                'gap-bottom',
                            ]}
                        />
                        <GridContainer
                            debug={true}
                            className={styles.dummyElement}
                            attributes={[
                                'xs-12',
                                's-4',
                                'm-4',
                                'l-4',
                                'xl-4',
                                'gap-2',
                                'gap-bottom',
                            ]}
                        />
                        <GridContainer
                            debug={true}
                            className={styles.dummyElement}
                            attributes={[
                                'xs-12',
                                's-4',
                                'm-4',
                                'l-4',
                                'xl-4',
                                'gap-2',
                                'gap-bottom',
                            ]}
                        />

                        <GridContainer
                            debug={true}
                            className={styles.dummyElement}
                            attributes={[
                                'xs-12',
                                's-3',
                                'm-3',
                                'l-3',
                                'xl-3',
                                'gap-3',
                                'gap-bottom',
                            ]}
                        />
                        <GridContainer
                            debug={true}
                            className={styles.dummyElement}
                            attributes={[
                                'xs-12',
                                's-3',
                                'm-3',
                                'l-3',
                                'xl-3',
                                'gap-3',
                                'gap-bottom',
                            ]}
                        />
                        <GridContainer
                            debug={true}
                            className={styles.dummyElement}
                            attributes={[
                                'xs-12',
                                's-3',
                                'm-3',
                                'l-3',
                                'xl-3',
                                'gap-3',
                                'gap-bottom',
                            ]}
                        />
                        <GridContainer
                            debug={true}
                            className={styles.dummyElement}
                            attributes={[
                                'xs-12',
                                's-3',
                                'm-3',
                                'l-3',
                                'xl-3',
                                'gap-3',
                                'gap-bottom',
                            ]}
                        />
                    </GridContainer>
                </GridContainer>
            </Explain>
        </>
    );
}

export default Page;
