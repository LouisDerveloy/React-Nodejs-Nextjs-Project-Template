import React from "react";
import Head from "next/head";
import Image from "next/image";

export default class HomePage extends React.Component {

  send() {
                            console.log("test");
  }

  render() {
    return <>
    <Head>
      <title>Home Page</title>
    </Head>
    <Image src="/hello.gif" width={478} height={296} alt="Hello image"/>
    <h1>Home page</h1>
    
    </>
  }
} 