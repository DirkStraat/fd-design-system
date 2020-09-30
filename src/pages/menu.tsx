import React from 'react';
import { Explain } from '../components/Explain';
import { Menu, getCssClassNames } from '../components/menu/Menu';
import Head from 'next/head';

const metaTitle = 'Menu';
const metaDescription = 'Menu, used to display a navigational menu';

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
                cssClassNames={getCssClassNames()}
                legend="Menu"
                reactComponentName="Menu"
                description={
                    <>
                        <p>Used as navigational menu.</p>
                        <p>This element is solely used to display menu.</p>
                    </>
                }
            >
                <Menu
                    label="Main menu"
                    menuItems={[
                        {
                            label: 'Menu 1',
                            link: '#Menu-1',
                        },
                        {
                            label: 'Menu 2',
                            link: '#Menu-2',
                            menuItems: [
                                { label: 'Menu 2.1', link: '#Menu-2.1' },
                                {
                                    label: 'Menu 2.2',
                                    link: '#Menu-2.2',
                                    menuItems: [
                                        {
                                            label: 'Menu 2.2.1',
                                            link: '#Menu-2.2.1',
                                        },
                                    ],
                                },
                            ],
                        },
                    ]}
                />
            </Explain>
        </>
    );
}

export default Page;
