import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import React from 'react';

const theme = '';
let gtmkey='';
let getinitialdata = [];
class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        getinitialdata = initialProps?.head as any; 
        const data: any = React.Children.toArray(getinitialdata).find((item: any) => item?.props?.name == 'gtmkey'); 
        gtmkey= data?.props?.content;
        return { ...initialProps }
    } 
    render() {
        return (
            <Html lang="en" className={theme}>
                <Head> 
                    {/* Google Tag Manager */} 
                    <script dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','${gtmkey}');`
                    }}/>
                </Head>             
            
                <body>
                    <Main />
                    <NextScript /> 
                    <div role="complementary">
                        <noscript dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmkey}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
                        }}/> 
                    </div>
                </body>
            </Html>
        )
    }
}

export default MyDocument